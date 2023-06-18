import { Page, Locator } from '@playwright/test';
import please from '../utility/please';

export class ButtonPage {
    
    private page: Page;
    private _header: Locator;
    private _click: Locator;
    private _xy: Locator;
    private _color: Locator;
    private _size: Locator;
    private _disabled: Locator;
    private _clickHold: Locator;

    constructor(page: Page) {
        this.page = page;
        this._header = this.page.locator("//h1");
        this._click = this.page.locator("#home");
        this._xy = this.page.locator("#position");
        this._color = this.page.locator("#color");
        this._size = this.page.locator("#property");
        this._disabled = this.page.locator("(//button[@id='isDisabled'])[1]");
        this._clickHold = this.page.locator("(//button[@id='isDisabled'])[2]");
    }

	async testFirstButton(title: string) {
        await please.toContain(this._header, "Header", title);
        await please.click(this._click, "Button 1");
    }

    async testRemainingButtons(title: string, color: string, hold: string) {
        await please.toContain(this._header, "Header", title);
        await please.getPosition(this._xy, "Button 2");
        await please.getColor(this._color, "Button 3");
        await please.getSize(this._size, "Button 4");
        await please.toBeDisabled(this._disabled, "Button 5");
        await please.click(this._clickHold, "Button 6", { delay: 1000 });
        await please.toContain(this._clickHold, "Button 6", hold);
    }

}