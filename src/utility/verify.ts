import { Page, expect } from "@playwright/test";

export class Verify {

    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async toContain(selector: string, elementName: string, expected: string) {
        const actual = await this.page.locator(selector).textContent();
        expect(actual).toContain(expected);
        console.log(`Verified ${elementName}\n -> Actual   : '${actual?.trim()}'\n -> Expected : '${expected}'`
        );
    }

    async toEqual(selector: string, elementName: string, expected: string) {
        const actual = await this.page.locator(selector).textContent();
        expect(actual).toEqual(expected);
        console.log(`Verified ${elementName}\n -> Actual   : '${actual?.trim()}'\n -> Expected : '${expected}'`
        );
    }

    async toBeEnabled(selector: string, elementName: string) {
        await expect(this.page.locator(selector)).toBeEnabled();
        console.log(`Verified ${elementName} -> ${elementName} is enabled`);
    }

    async toBeDisabled(selector: string, elementName: string) {
        await expect(this.page.locator(selector)).toBeDisabled();
        console.log(`Verified ${elementName} -> ${elementName} is disabled`);
    }

    async toBeEditable(selector: string, elementName: string) {
        await expect(this.page.locator(selector)).toBeEditable();
        console.log(`Verified ${elementName} -> ${elementName} is editable`);
    }

    async toBeReadOnly(selector: string, elementName: string) {
        const check = await this.page.locator(selector).isEditable();
        expect(check).toBeFalsy();
        console.log(`Verified ${elementName} -> ${elementName} is readonly`);
    }

}