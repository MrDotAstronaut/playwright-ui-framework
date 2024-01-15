import { Page } from '@playwright/test';
import { Perform } from '../utility/perform';
import { Verify } from '../utility/verify';
import { Get } from '../utility/get';
import { Wait } from '../utility/wait';

export class ButtonPage {

    private selector = {
        header: "//h1",
        click: "#home",
        xy: "#position",
        color: "#color",
        size: "#property",
        disabled: "(//button[@id='isDisabled'])[1]",
        clickHold: "(//button[@id='isDisabled'])[2]"
    }
    
    private perform: Perform;
    private verify: Verify;
    private get: Get;
    private wait: Wait;

    constructor(page: Page) {
        this.perform = new Perform(page);
        this.verify = new Verify(page);
        this.get = new Get(page);
        this.wait = new Wait(page);
    }

	async testFirstButton(title: string) {
        await this.verify.toContain(this.selector.header, "Header", title);
        await this.perform.click(this.selector.click, "Button 1");
    }

    async testRemainingButtons(title: string, color: string, hold: string) {
        await this.verify.toContain(this.selector.header, "Header", title);
        await this.get.position(this.selector.xy, "Button 2");
        await this.get.color(this.selector.color, "Button 3");
        await this.get.size(this.selector.size, "Button 4");
        await this.verify.toBeDisabled(this.selector.disabled, "Button 5");
        await this.perform.click(this.selector.clickHold, "Button 6", { delay: 1000 });
        await this.verify.toContain(this.selector.clickHold, "Button 6", hold);
    }

}