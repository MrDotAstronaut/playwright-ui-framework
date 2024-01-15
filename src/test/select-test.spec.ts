import { test } from '../utility/manager';

test('Select Test', async ({
  data,
  landingPage,
  workSpacePage,
  selectPage
}) => {
  await landingPage.launchURL(data.url);
  await landingPage.openWorkSpace();
  await workSpacePage.chooseWorkSpace(data.buttonTest.sectionTitle, data.selectTest.choice);
  await selectPage.testDropdown(data.selectTest.pageTitle);
  await selectPage.testMultiSelect();
});