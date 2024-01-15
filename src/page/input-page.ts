import { Page } from '@playwright/test';
import { Perform } from '../utility/perform';
import { Verify } from '../utility/verify';
import { Get } from '../utility/get';
import { Wait } from '../utility/wait';

export class InputPage {
    
    private selector = {
        header: "//h1",
        enter: "#fullName",
        append: "#join",
        value: "#getMe",
        clear: "#clearMe",
        disabled: "#noEdit",
        readOnly: "#dontwrite"
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

	async testInputs(expected: { title: string }, fullName: string, appendText: string, key: string) {
        let actual: { [key: string]: any } = {
            title: await this.get.text(this.selector.header, "Header"),
        };
        await this.verify.toContain(actual.title, "Header", expected.title);
        await this.perform.fill(this.selector.enter, "Input 1", fullName);
        await this.perform.type(this.selector.append, "Input 2", appendText);
        await this.perform.press(this.selector.append, "Input 2", key);
        await this.get.input(this.selector.value, "Input 3");
        await this.perform.clear(this.selector.clear, "Input 4");
        await this.verify.toBeDisabled(this.selector.disabled, "Input 5");
        await this.verify.toBeReadOnly(this.selector.readOnly, "Input 6");
    }

}