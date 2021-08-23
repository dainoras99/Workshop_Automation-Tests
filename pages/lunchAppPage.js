exports.LunchAppPage = class LunchAppPage {

    
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://lunch.devbstaging.com/login-password');
    }

    
    async initiateLogin() {
        const username = "admin5@sourceryacademy.com";
        const password = "nera svarbus57";
        await this.page.fill("input[aria-label='Email']", username);
        await this.page.fill("input[aria-label='Password']", password);
        await this.page.click(".v-btn.v-btn--block.theme--dark.primary");
        //await this.page.waitForNavigation();
    }
    
}