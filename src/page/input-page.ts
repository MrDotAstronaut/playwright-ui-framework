import { Page, Locator } from '@playwright/test';
import please from '../utility/please';

export class InputPage {
    
    private page: Page;
    private _header: Locator;
    private _enter: Locator;
    private _append: Locator;
    private _value: Locator;
    private _clear: Locator;
    private _disabled: Locator;
    private _readOnly: Locator;

    constructor(page: Page) {
        this.page = page;
        this._header = this.page.locator("//h1");
        this._enter = this.page.locator("#fullName");
        this._append = this.page.locator("#join");
        this._value = this.page.locator("#getMe");
        this._clear = this.page.locator("#clearMe");
        this._disabled = this.page.locator("#noEdit");
        this._readOnly = this.page.locator("#dontwrite");
    }

	async testInputs(title: string, fullName: string, appendText: string, key: string) {
        await please.toContain(this._header, "Header", title);
        await please.fill(this._enter, "Input 1", fullName);
        await please.type(this._append, "Input 2", appendText);
        await please.press(this._append, "Input 2", key);
        await please.getInput(this._value, "Input 3");
        await please.clear(this._clear, "Input 4");
        await please.toBeDisabled(this._disabled, "Input 5");
        await please.toBeReadOnly(this._readOnly, "Input 6");
    }

}