import { test } from '../utility/manager';

test('has title', async ({
  data,
  landingPage,
  workSpacePage,
  selectPage
}) => {
  await landingPage.launchURL(data.url);
  await landingPage.openWorkSpace();
  await workSpacePage.chooseWorkSpace(data.selectTest.choice);
  await selectPage.testDropdown(data.selectTest.choice);
});