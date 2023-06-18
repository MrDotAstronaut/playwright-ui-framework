import { Locator, expect } from "@playwright/test";

export default new class Component {

    async click(locator: Locator, elementName: string, optional?: { delay: number }) {
        if (optional != undefined) {
            await locator.click({ delay: optional.delay });
            console.log(`Clicked ${elementName}`);
        }
        else {
            await locator.click();
            console.log(`Clicked ${elementName}`);
        }
    }

    async fill(locator: Locator, elementName: string, text: string) {
        await locator.fill(text);
        console.log(`Filled ${text} into ${elementName}`);
    }

    async type(locator: Locator, elementName: string, text: string) {
        await locator.type(text);
        console.log(`Typed ${text} into ${elementName}`);
    }

    async press(locator: Locator, elementName: string, key: string) {
        await locator.press(key);
        console.log(`Pressed ${key} on ${elementName}`);
    }

    async clear(locator: Locator, elementName: string) {
        await locator.clear();
        console.log(`Cleared ${elementName}`);
    }

    async select(locator: Locator, elementName: string, optional?: { value?: string, label?: string, index?: number }) {
        if(optional?.value){
            await locator.selectOption({ value: optional.value });
        }
        else if(optional?.label){
            await locator.selectOption({ label: optional.label });
        }
        else if(optional?.index){
            await locator.selectOption({ index: optional.index });
        }
        
        console.log(`Selected ${elementName}`);
    }

    async getInput(locator: Locator, elementName: string) {
        const input = await locator.inputValue();
        console.log(`Input of ${elementName} -> ${input}`);
    }

    async getSize(locator: Locator, elementName: string) {
        const size = await locator.boundingBox();
        console.log(`Size of ${elementName}\n -> X : ${size?.x}\n -> Y : ${size?.y}`);
    }

    async getPosition(locator: Locator, elementName: string) {
        const position = await locator.boundingBox();
        console.log(`Position of ${elementName}\n -> Height : ${position?.height}\n -> Width : ${position?.width}`);
    }

    async getColor(locator: Locator, elementName: string) {
        const color = await locator.evaluate((element) => {
            return window.getComputedStyle(element).getPropertyValue("background-color");
        });
        console.log(`Color of ${elementName} -> ${color}`);
    }

    async getText(locator: Locator, elementName: string) {
        const text = await locator.textContent();
        console.log(`Text of ${elementName} -> ${text}`);
    }

    async toContain(locator: Locator, elementName: string, expected: string) {
        const actual = await locator.textContent();
        expect(actual).toContain(expected);
        console.log(`Verified ${elementName}\n -> Actual   : '${actual?.trim()}'\n -> Expected : '${expected}'`
        );
    }

    async toEqual(locator: Locator, elementName: string, expected: string) {
        const actual = await locator.textContent();
        expect(actual).toEqual(expected);
        console.log(`Verified ${elementName}\n -> Actual   : '${actual?.trim()}'\n -> Expected : '${expected}'`
        );
    }

    async toBeEnabled(locator: Locator, elementName: string) {
        await expect(locator).toBeEnabled();
        console.log(`Verified ${elementName} -> ${elementName} is enabled`);
    }

    async toBeDisabled(locator: Locator, elementName: string) {
        await expect(locator).toBeDisabled();
        console.log(`Verified ${elementName} -> ${elementName} is disabled`);
    }

    async toBeEditable(locator: Locator, elementName: string) {
        await expect(locator).toBeEditable();
        console.log(`Verified ${elementName} -> ${elementName} is editable`);
    }

    async toBeReadOnly(locator: Locator, elementName: string) {
        const check = await locator.isEditable();
        expect(check).toBeFalsy();
        console.log(`Verified ${elementName} -> ${elementName} is readonly`);
    }

}