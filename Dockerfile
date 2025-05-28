FROM --platform=linux/amd64 node:18

# Install OpenJDK 17 and essential tools
RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    curl \
    unzip \
    wget \
    git \
    && rm -rf /var/lib/apt/lists/*

# Set Android environment variables
ENV ANDROID_SDK_ROOT=/opt/android-sdk
ENV PATH=$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/platform-tools:$ANDROID_SDK_ROOT/emulator

# Install Android Command Line Tools (arm64 compatible)
RUN mkdir -p $ANDROID_SDK_ROOT/cmdline-tools && \
    cd /opt && \
    wget https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip -O cmdline-tools.zip && \
    unzip cmdline-tools.zip -d android-sdk/cmdline-tools && \
    mv android-sdk/cmdline-tools/cmdline-tools android-sdk/cmdline-tools/latest && \
    rm cmdline-tools.zip

# Accept licenses and install SDK components
RUN yes | sdkmanager --licenses && \
    sdkmanager "platform-tools" "platforms;android-33" "build-tools;33.0.2"

# Install Appium, WDIO CLI, android driver
RUN npm install -g appium@latest @wdio/cli
RUN npx appium driver install uiautomator2


# Create working directory
WORKDIR /home/appium

# Copy package files first to install dependencies (for caching)
COPY package*.json ./

RUN npm install

# Copy rest of source files
COPY . .

# Expose Appium port
EXPOSE 4723

# Default command to run your WDIO Android tests
CMD ["npm", "run", "wdio:android"]
