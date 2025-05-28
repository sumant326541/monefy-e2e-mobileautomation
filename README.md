<img width="100" alt="Screenshot 2021-06-29 at 8 12 27 AM" src="https://user-images.githubusercontent.com/39675511/123728969-d2a87b00-d8b1-11eb-9ece-558d4021f816.png">

# monefy mobile automation for android and ios app with Appium,WebdriverIO,BDD-Cucumber

## Table of Contents

- [Tools And Technology](#tools-and-technology)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Makefile](#makefile)
- [Running test in local](#running-tests-in-local)
- [Running test in rocker](#running-tests-in-docker)
- [Reports](#reports)


## Tools And Technology
- Webdriverio with Javascript
- appium
- BDD-Cucumber
- Configured with emulator and ios real device
- Allure-Report

## Prerequisites

- Ensure Node.js and npm are installed on your machine (node -v
v21.6.2 ,npm -v 10.8.1
)
- appium inspector - For inspecting new elements, utilize Appium Inspector.
- appium  install it from package.json or through below command
```sh
npm install appium -g
```
- xcuitest - To enable execution on ios device. Install XCUITest driver using either the package.json or the command 
```sh
npm install appium-xcuitest-driver
```
- uiautomator2 - To enable execution on android simulator. Install using either the package.json or the command 
```sh
npm install uiautomator2
```
- ios device - Install webdriveragent first time and configure signing profile from xcode
- emulator (for android) - For Android testing on emulators, configure Android SDK, ADB, and AVD Manager for launching Android emulators.
- Visual Studio Code - When writing code, use a code editor, with Visual Studio Code being the preferred choice.

- android app installation - install ([Android App](https://play.google.com/store/apps/details?id=com.monefy.app.lite)) or set app path capabilities 'appium:app': 'path/monefy.apk' in wdio:android.conf.js
- iOS app installation - install ([iOS APP](https://itunes.apple.com/us/app/monefy-money-manager/id1212024409?))or set app path capabilities 'appium:app': 'path/monefy.ipa' in wdio:ios.conf.js 
- android capabilities: update android capabilities in wdio:ios.conf.js and start-emulator.sh
- iOS capabilities: update iOS capabilities in wdio:ios.conf.js 

## Makefile 

- use below command to check all available command in make file and uses 
```sh
make help
```
## Installation

Clone the repository:

```sh
https://github.com/sumant326541/money-e2e-mobileautomation.git
```
install dependencies mentioned in package.json

```sh
npm install
```

## Running Tests in local
### Android

- make sure android emulator has been configured 

```js
make test-android
```
### iOS

- make sure iOS device has connected to host machine

 ```js
make test-ios
```

## Running Tests in docker container
### Android

- make sure android emulator has been configured 

- Build Docker images

```js
make docker-build
```
- Run test in docker container with emulator on host machine

```js
make docker-up
```
- OR

```js
make docker-test
```


## Reports

### Alluare Report
- Allure report integration implemented
- A report in HTML format will be created within allure-report folder.

 ```js
make report
``` 
### dot report
- integrated dot report 
