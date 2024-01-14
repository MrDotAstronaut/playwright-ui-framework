import { Page } from '@playwright/test';
import { Perform } from '../utility/perform';
import { Verify } from '../utility/verify';
import { Get } from '../utility/get';
import { Wait } from '../utility/wait';

export class SelectPage {

    private selector = {
        header : "//h1",
        dropdown : "#fruits",
        confirmation : ".subtitle",
        multiselect : "#superheros"
    };

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

	async testDropdown(title: string) {
        await this.verify.toContain(this.selector.header, "Header", title);
        await this.perform.select(this.selector.dropdown, "Mango", { value: "1" });
        await this.verify.toContain(this.selector.confirmation, "Selection Confirmation", "Mango");
        await this.perform.select(this.selector.dropdown, "Orange", { label: "Orange" });
        await this.verify.toContain(this.selector.confirmation, "Selection Confirmation", "Orange");
        await this.perform.select(this.selector.dropdown, "Pine Apple", { index: 5 });
        await this.verify.toContain(this.selector.confirmation, "Selection Confirmation", "Pine Apple");
    }

    async testMultiSelect() {
        //await this.selector.multiselect.selectOption({ value: "am" });
    }

}