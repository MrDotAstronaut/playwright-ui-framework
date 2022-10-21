import { test, expect } from '@playwright/test';
import { POManager } from '../page_objects/po.manager';
import { UIUtils } from '../utils/UIutils';

let uiUtils;
let pom;
let hp, tp;

test.describe('LetCode Workspace', async () => {
  test.beforeEach( async ({ page }) => {
    pom = new POManager(page);
    uiUtils = new UIUtils(pom);
    await uiUtils.preCondition();
    hp = await pom.homePage();
    tp = await pom.testPage();
  });
  test('Navigate to workspace', async () => {
    await hp.clickWorkspace();
    await tp.clickOption("Edit");
  });
  test.afterEach( async () => {
    await uiUtils.postCondition();
  });
});