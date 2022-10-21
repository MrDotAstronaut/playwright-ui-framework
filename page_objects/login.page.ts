import { Locator, Page } from '@playwright/test';

export class Login {
    
    readonly page : Page;
    readonly email : Locator;
    readonly password : Locator;
    readonly submit : Locator;

    constructor(page : Page){
        this.page = page;
        this.email = page.locator("//input[@name='email']");
        this.password = page.locator("//input[@name='password']");
        this.submit = page.locator("//button[text()='LOGIN']");
    }

    async goto(path : string){
        await this.page.goto(path);
    }

    async fillEmail(username : string){
        await this.email.fill(username);
    }

    async fillPassword(password : string){
        await this.password.fill(password);
    }

    async clickSubmit(){
        await this.submit.click();
    }
}