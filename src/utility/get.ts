import { Page } from "@playwright/test";

export class Get {

    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async input(selector: string, elementName: string) {
        const input = await this.page.locator(selector).inputValue();
        console.log(`Input of ${elementName} -> ${input}`);
    }

    async size(selector: string, elementName: string) {
        const size = await this.page.locator(selector).boundingBox();
        console.log(`Size of ${elementName}\n -> X : ${size?.x}\n -> Y : ${size?.y}`);
    }

    async position(selector: string, elementName: string) {
        const position = await this.page.locator(selector).boundingBox();
        console.log(`Position of ${elementName}\n -> Height : ${position?.height}\n -> Width : ${position?.width}`);
    }

    async color(selector: string, elementName: string) {
        const color = await this.page.locator(selector).evaluate((element) => {
            return window.getComputedStyle(element).getPropertyValue("background-color");
        });
        console.log(`Color of ${elementName} -> ${color}`);
    }

    async text(selector: string, elementName: string) {
        const text = await this.page.locator(selector).textContent();
        console.log(`Text of ${elementName} -> ${text}`);
    }

}