import { Page } from "@playwright/test";

export class Perform {

    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async goto(url: string) {
        await this.page.goto(url);
        console.log(`Launched ${url}`);
    }

    async click(selector: string, elementName: string, optional?: { delay: number }) {
        if (optional != undefined) {
            await this.page.locator(selector).click({ delay: optional.delay });
            console.log(`Clicked ${elementName}`);
        }
        else {
            await this.page.locator(selector).click();
            console.log(`Clicked ${elementName}`);
        }
    }

    async fill(selector: string, elementName: string, text: string) {
        await this.page.locator(selector).fill(text);
        console.log(`Filled ${text} into ${elementName}`);
    }

    async type(selector: string, elementName: string, text: string) {
        await this.page.locator(selector).type(text);
        console.log(`Typed ${text} into ${elementName}`);
    }

    async press(selector: string, elementName: string, key: string) {
        await this.page.locator(selector).press(key);
        console.log(`Pressed ${key} on ${elementName}`);
    }

    async clear(selector: string, elementName: string) {
        await this.page.locator(selector).clear();
        console.log(`Cleared ${elementName}`);
    }

    async select(selector: string, elementName: string, optional?: { value?: string, label?: string, index?: number }) {
        if(optional?.value){
            await this.page.locator(selector).selectOption({ value: optional.value });
        }
        else if(optional?.label){
            await this.page.locator(selector).selectOption({ label: optional.label });
        }
        else if(optional?.index){
            await this.page.locator(selector).selectOption({ index: optional.index });
        }
        console.log(`Selected ${elementName}`);
    }

}