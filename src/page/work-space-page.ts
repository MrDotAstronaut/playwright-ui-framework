import { Page, Locator } from '@playwright/test';
import please from '../utility/please';

export class WorkSpacePage {
    
    private page: Page;

    private _choose: Locator;

    constructor(page: Page) {

        this.page = page;

    }

	async chooseWorkSpace(choice: string) {
        if (choice.includes('table')) {
            this._choose = this.page.locator(`//p[contains(text(),'Table')]//ancestor::div[@class='card']//a[text()='${choice}']`);
        }
        else {
            this._choose = this.page.locator(`//p[contains(text(),'${choice}')]//ancestor::div[@class='card']//a`);
        }
        await please.click(this._choose, choice);
    }

}