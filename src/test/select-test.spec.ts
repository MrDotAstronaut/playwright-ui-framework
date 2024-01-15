import { test } from '../utility/manager';

test('Select Test', async ({
  data,
  landingPage,
  workSpacePage,
  selectPage
}) => {
  await landingPage.launchURL(data.url);
  await landingPage.openWorkSpace();
  await workSpacePage.chooseWorkSpace({
      title: data.buttonTest.sectionTitle
    },
    data.selectTest.choice
  );
  await selectPage.testDropdown({
    title: data.selectTest.pageTitle,
    selection1: data.selectTest.selection1,
    selection2: data.selectTest.selection2,
    selection3: data.selectTest.selection3
  });
  await selectPage.testMultiSelect({
    title: data.selectTest.pageTitle,
    selections: data.selectTest.selections
  });
  await selectPage.testDropdownOptions({
    title: data.selectTest.pageTitle,
    options: data.selectTest.options
  });
  await selectPage.testDropdownInput({
    title: data.selectTest.pageTitle,
    input: data.selectTest.input
  });
});