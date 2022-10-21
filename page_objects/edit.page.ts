import { Locator, Page } from '@playwright/test';

export class Edit {
    
    readonly page : Page;
    readonly enter : Locator;
    readonly append : Locator;
    readonly check : Locator;
    readonly clear : Locator;
    readonly disabled : Locator;
    readonly read : Locator;

    constructor(page : Page){
        this.page = page;
        this.enter = page.locator("#fullName");
        this.append = page.locator("#join");
        this.check = page.locator("#getMe");
        this.clear = page.locator("#clearMe");
        this.disabled = page.locator("#noEdit");
        this.read = page.locator("#dontwrite");
    }

    async setEnter(value : string){
        this.enter.fill(value);
    }

    async setAppend(value : string){
        this.append.type(value);
        this.append.press('Tab');
    }

    async getCheck(){
        this.check.getAttribute("value");
    }

    async setClear(){
        this.clear.fill("");
    }

    async getDisabled(){
        this.disabled.isDisabled();
    }

    async getRead(){
        this.read.isEditable();
    }

}