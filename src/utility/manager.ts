import { JSHandle, test as manager } from '@playwright/test';

import { data } from '../data/test-data';

import { LandingPage } from '../page/landing-page';
import { WorkSpacePage } from '../page/work-space-page';
import { InputPage } from '../page/input-page';
import { ButtonPage } from '../page/button-page';
import { SelectPage } from '../page/select-page';

type fixtures = {
    data: any;
    landingPage: LandingPage;
    workSpacePage: WorkSpacePage;
    inputPage: InputPage;
    buttonPage: ButtonPage;
    selectPage: SelectPage;
};

export const test = manager.extend<fixtures>({
    data: async ({}, use) => {
        await use(data);
    },
    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page));
    },
    workSpacePage: async ({ page }, use) => {
        await use(new WorkSpacePage(page));
    },
    inputPage: async ({ page }, use) => {
        await use(new InputPage(page));
    },
    buttonPage: async ({ page }, use) => {
        await use(new ButtonPage(page));
    },
    selectPage: async ({ page }, use) => {
        await use(new SelectPage(page));
    }
})