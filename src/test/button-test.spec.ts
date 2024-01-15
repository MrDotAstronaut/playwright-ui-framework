import { test } from '../utility/manager';

test('Button Test', async ({
  data,
  landingPage,
  workSpacePage,
  buttonPage
}) => {
  await landingPage.launchURL(data.url);
  await landingPage.openWorkSpace();
  await workSpacePage.chooseWorkSpace(data.buttonTest.sectionTitle, data.buttonTest.choice);
  await buttonPage.testFirstButton(data.buttonTest.sectionTitle);
  await landingPage.openWorkSpace();
  await workSpacePage.chooseWorkSpace(data.buttonTest.sectionTitle, data.buttonTest.choice);
  await buttonPage.testRemainingButtons(
    data.buttonTest.pageTitle,
    data.buttonTest.color,
    data.buttonTest.hold
  );
});