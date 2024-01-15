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

	async testFirstButton(expected: { title: string }) {
        const actual = {
            title: await this.get.text(this.selector.header, "Header")
        }
        await this.verify.toContain(actual.title, "Header", expected.title);
        await this.perform.click(this.selector.click, "Button 1");
    }

    async testRemainingButtons(expected: { title: string, position: string, color: string, size: string, hold: string }) {
        let actual: { [key: string]: any } = {
            title: await this.get.text(this.selector.header, "Header"),
            position: await this.get.position(this.selector.xy, "Button 2"),
            color: await this.get.color(this.selector.color, "Button 3"),
            size: await this.get.size(this.selector.size, "Button 4")
        };
        await this.verify.toContain(actual.title, "Header", expected.title);
        await this.verify.toEqual(actual.position, "Button 2", expected.position);
        await this.verify.toEqual(actual.color, "Button 3", expected.color);
        await this.verify.toEqual(actual.size, "Button 4", expected.size);
        await this.verify.toBeDisabled(this.selector.disabled, "Button 5");
        await this.perform.click(this.selector.clickHold, "Button 6", { delay: 1000 });
        actual.hold = await this.get.text(this.selector.clickHold, "Button 6");
        await this.verify.toContain(actual.hold, "Button 6", expected.hold);
    }

}