import { Page } from '@playwright/test';
import { Perform } from '../utility/perform';
import { Verify } from '../utility/verify';
import { Get } from '../utility/get';
import { Wait } from '../utility/wait';

export class SelectPage {

    private selector = {
        header : "//h1",
        dropdown : "#fruits",
        confirmationDD : "(//p[@class='subtitle'])[1]",
        confirmationMS : "(//p[@class='subtitle'])[2]",
        multiselect : "#superheros",
        dropdownOptions : "#lang option",
        dropdownInput : "#country"
    };

    private page: Page;
    private perform: Perform;
    private verify: Verify;
    private get: Get;
    private wait: Wait;

    constructor(page: Page) {
        this.page = page;
        this.perform = new Perform(page);
        this.verify = new Verify(page);
        this.get = new Get(page);
        this.wait = new Wait(page);
    }

	async testDropdown(expected: { title: string, selection1: string, selection2: string, selection3: string }) {
        let actual: { [key: string]: any } = {
            title: await this.get.text(this.selector.header, "Header"),
        };
        await this.verify.toContain(actual.title, "Header", expected.title);
        await this.perform.selectSingle(this.selector.dropdown, "Dropdown", { value: "1" });
        actual.confirmation = await this.get.text(this.selector.confirmationDD, "Selection Confirmation");
        await this.verify.toContain(actual.confirmation, "Selection Confirmation", expected.selection1);
        await this.perform.selectSingle(this.selector.dropdown, "Dropdown", { label: "Orange" });
        actual.confirmation = await this.get.text(this.selector.confirmationDD, "Selection Confirmation");
        await this.verify.toContain(actual.confirmation, "Selection Confirmation", expected.selection2);
        await this.perform.selectSingle(this.selector.dropdown, "Dropdown", { index: 5 });
        actual.confirmation = await this.get.text(this.selector.confirmationDD, "Selection Confirmation");
        await this.verify.toContain(actual.confirmation, "Selection Confirmation", expected.selection3);
    }

    async testMultiSelect(expected: { title: string, selections: string[] }) {
        let actual: { [key: string]: any } = {
            title: await this.get.text(this.selector.header, "Header"),
        };
        await this.verify.toContain(actual.title, "Header", expected.title);
        await this.perform.selectMultiple(this.selector.multiselect, "Multi-select", { values: ["am", "ta", "bt"] });
        actual.confirmation = await this.get.text(this.selector.confirmationMS, "Selection Confirmation");
        await this.verify.toContain(actual.confirmation, "Selection Confirmation", expected.selections[0]);
        await this.perform.selectMultiple(this.selector.multiselect, "Multi-select", { labels: ["Aquaman", "Daredevil", "Incredible Hulk"] });
        actual.confirmation = await this.get.text(this.selector.confirmationMS, "Selection Confirmation");
        await this.verify.toContain(actual.confirmation, "Selection Confirmation", expected.selections[1]);
    }

    async testDropdownOptions(expected: { title: string, options: string[] }) {
        let actual: { [key: string]: any } = {
            title: await this.get.text(this.selector.header, "Header"),
            options: await this.get.texts(this.selector.dropdownOptions),
        };
        await this.verify.toContain(actual.title, "Header", expected.title);
        await this.verify.toEqual(actual.options, "Dropdown Options", expected.options);
    }

    async testDropdownInput(expected: { title: string, input: string }) {
        let actual: { [key: string]: any } = {
            title: await this.get.text(this.selector.header, "Header")
        };
        await this.verify.toContain(actual.title, "Header", expected.title);
        await this.perform.selectSingle(this.selector.dropdownInput, "Dropdown", { value: "India" });
        actual.input = await this.get.input(this.selector.dropdownInput, "Dropdown");
        await this.verify.toEqual(actual.input, "Dropdown Input", expected.input);
    }

}