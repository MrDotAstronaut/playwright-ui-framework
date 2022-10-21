import { Locator, Page } from '@playwright/test';

export class Home {
    
    readonly page : Page;
    readonly workspace : Locator;
    readonly logout : Locator;

    constructor(page : Page){
        this.page = page;
        this.workspace = page.locator("#testing");
        this.logout = page.locator("//a[text()='Sign out']");
    }

    async clickWorkspace(){
        await this.workspace.click();
    }

    async clickLogout(){
        await this.logout.click();
    }
}