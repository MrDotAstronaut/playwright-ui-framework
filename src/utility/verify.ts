import { Page, expect } from "@playwright/test";

export class Verify {

    private page: Page;

    private GREEN = "\u001b[1;32m";
    private RESET = "\u001b[0m";

    constructor(page: Page) {
        this.page = page;
    }

    async toContain(actual: any, elementName: string, expected: any) {
        expect(actual).toContain(expected);
        console.log(`${this.GREEN}${elementName} contains expected value\n -> Actual   : ${JSON.stringify(actual)}\n -> Expected : ${JSON.stringify(expected)}${this.RESET}`);
    }

    async toEqual(actual: any, elementName: string, expected: any) {
        expect(actual).toEqual(expected);
        console.log(`${this.GREEN}${elementName} equals expected value\n -> Actual   : ${JSON.stringify(actual)}\n -> Expected : ${JSON.stringify(expected)}${this.RESET}`);
    }

    async toBeEnabled(selector: string, elementName: string) {
        await expect(this.page.locator(selector)).toBeEnabled();
        console.log(`${this.GREEN}${elementName} is enabled${this.RESET}`);
    }

    async toBeDisabled(selector: string, elementName: string) {
        await expect(this.page.locator(selector)).toBeDisabled();
        console.log(`${this.GREEN}${elementName} is disabled${this.RESET}`);
    }

    async toBeEditable(selector: string, elementName: string) {
        await expect(this.page.locator(selector)).toBeEditable();
        console.log(`${this.GREEN}${elementName} is editable${this.RESET}`);
    }

    async toBeReadOnly(selector: string, elementName: string) {
        const check = await this.page.locator(selector).isEditable();
        expect(check).toBeFalsy();
        console.log(`${this.GREEN}${elementName} is readonly${this.RESET}`);
    }

}