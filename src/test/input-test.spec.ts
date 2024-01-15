import { test } from '../utility/manager';

test('Input Test', async ({
  data,
  landingPage,
  workSpacePage,
  inputPage
}) => {
  await landingPage.launchURL(data.url);
  await landingPage.openWorkSpace();
  await workSpacePage.chooseWorkSpace(data.buttonTest.sectionTitle, data.inputTest.choice);
  await inputPage.testInputs(
    data.inputTest.pageTitle,
    data.inputTest.fullName,
    data.inputTest.appendText,
    data.inputTest.key
  );
});