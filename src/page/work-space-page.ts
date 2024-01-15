import { Page, Locator } from '@playwright/test';
import { Perform } from '../utility/perform';
import { Verify } from '../utility/verify';
import { Get } from '../utility/get';
import { Wait } from '../utility/wait';

export class WorkSpacePage {

    private selector = {
        title: (title: string) => `//header/p[contains(text(),'${title}')]`,
        choose: (choice: string) => `a[href='/${choice}']`
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

	async chooseWorkSpace(expected: { title: string }, choice: string) {
        const actual = {
            title: await this.get.text(this.selector.title(expected.title), "Title")
        }
        await this.verify.toContain(actual.title, "Title", expected.title);
        await this.perform.click(this.selector.choose(choice), expected.title);
    }

}