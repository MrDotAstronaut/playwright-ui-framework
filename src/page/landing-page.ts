import { Page, Locator } from '@playwright/test';
import please from '../utility/please';

export class LandingPage {

    private page: Page;

    private _workSpace: Locator;
    private _login: Locator;
    private _signUp: Locator;

    constructor(page: Page) {

        this.page = page;

        this._workSpace = this.page.locator("#testing");
        this._login = this.page.locator("//a[text()='Log in']");
        this._signUp = this.page.locator("//a[text()='Sign up']");

    }

    async launchURL(url) {
        await this.page.goto(url);
    }

    async openWorkSpace() {
        await please.click(this._workSpace, "Work Space");
    }

}