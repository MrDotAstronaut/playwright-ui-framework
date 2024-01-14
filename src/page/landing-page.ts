import { Page } from '@playwright/test';
import { Perform } from '../utility/perform';
import { Verify } from '../utility/verify';
import { Get } from '../utility/get';
import { Wait } from '../utility/wait';

export class LandingPage {

    private selector = {
        workSpace: "#testing",
        login: "//a[text()='Log in']",
        signUp: "//a[text()='Sign up']"
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

    async launchURL(url) {
        await this.perform.goto(url);
    }

    async openWorkSpace() {
        await this.perform.click(this.selector.workSpace, "Work Space");
    }

}