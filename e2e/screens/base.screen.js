const { $ } = require('@wdio/globals')

module.exports = class BaseScreen {

    get elementByLabel() {
        return (label) => {
            const androidSelector = `//android.view.View[contains(@content-desc,'${label}')]`;
            const iosSelector = `//XCUIElementTypeOther[contains(@label, '${label}')]`;
            const selector = driver.isAndroid ? androidSelector : iosSelector;
            return $(selector);
        };
    }

    get allowPopUp() {
        return () => {
            const androidSelector = `//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]`;
            const iosSelector = `//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]`;
            const selector = driver.isAndroid ? androidSelector : iosSelector;
            return $(selector);
        };
    }

    async clickOnAllowPopUp() {
        await this.allowPopUp().click();
    }
    
}