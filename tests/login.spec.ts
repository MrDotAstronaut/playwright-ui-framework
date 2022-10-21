import { test, expect } from '@playwright/test';
import { POManager } from '../page_objects/po.manager';
import { UIUtils } from '../utils/UIutils';

let uiUtils;
let pom;

test.describe('Login to LetCode', async () => {
  test.beforeEach( async ({ page }) => {
    pom = new POManager(page);
    uiUtils = new UIUtils(pom);
  });
  test('Login Successful', async () => {
    await uiUtils.preCondition();
  });
  test.afterEach( async () => {
    await uiUtils.postCondition();
  });
});