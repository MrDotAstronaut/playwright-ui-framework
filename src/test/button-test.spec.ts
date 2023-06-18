import { test } from '../utility/manager';

test('has title', async ({
  data,
  landingPage,
  workSpacePage,
  buttonPage
}) => {
  await landingPage.launchURL(data.url);
  await landingPage.openWorkSpace();
  await workSpacePage.chooseWorkSpace(data.buttonTest.choice);
  await buttonPage.testFirstButton(data.buttonTest.choice);
  await landingPage.openWorkSpace();
  await workSpacePage.chooseWorkSpace(data.buttonTest.choice);
  await buttonPage.testRemainingButtons(
    data.buttonTest.choice,
    data.buttonTest.color,
    data.buttonTest.hold
  );
});