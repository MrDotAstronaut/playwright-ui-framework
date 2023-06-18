import { Page, Locator } from '@playwright/test';
import please from '../utility/please';

export class SelectPage {
    
    private page: Page;
    private _header: Locator;
    private _dropdown: Locator;
    private _confirmation: Locator;

    constructor(page: Page) {
        this.page = page;
        this._header = this.page.locator("//h1");
        this._dropdown = this.page.locator("#fruits");
        this._confirmation = this.page.locator(".subtitle");
    }

	async testDropdown(title: string) {
        await please.toContain(this._header, "Header", title);
        await please.select(this._dropdown, "Select Dropdown", { value: "1" });
        await please.toContain(this._confirmation, "Selection Confirmation", "Mango");
        await please.select(this._dropdown, "Select Dropdown", { label: "Orange" });
        await please.toContain(this._confirmation, "Selection Confirmation", "Orange");
        await please.select(this._dropdown, "Select Dropdown", { index: 4 });
        await please.toContain(this._confirmation, "Selection Confirmation", "Pine Apple");
    }

}