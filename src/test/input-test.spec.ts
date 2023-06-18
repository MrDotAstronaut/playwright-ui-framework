import { test } from '../utility/manager';

test('has title', async ({
  data,
  landingPage,
  workSpacePage,
  inputPage
}) => {
  await landingPage.launchURL(data.url);
  await landingPage.openWorkSpace();
  await workSpacePage.chooseWorkSpace(data.inputTest.choice);
  await inputPage.testInputs(
    data.inputTest.choice,
    data.inputTest.fullName,
    data.inputTest.appendText,
    data.inputTest.key
  );
});