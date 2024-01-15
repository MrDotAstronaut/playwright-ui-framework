import { test } from '../utility/manager';

test('Button Test', async ({
  data,
  landingPage,
  workSpacePage,
  buttonPage
}) => {
  await landingPage.launchURL(data.url);
  await landingPage.openWorkSpace();
  await workSpacePage.chooseWorkSpace({
      title: data.buttonTest.sectionTitle
    },
    data.buttonTest.choice
  )
  await buttonPage.testFirstButton({
      title: data.buttonTest.sectionTitle
  });
  await landingPage.openWorkSpace();
  await workSpacePage.chooseWorkSpace({
      title: data.buttonTest.sectionTitle
    },
    data.buttonTest.choice
  );
  await buttonPage.testRemainingButtons({
    title: data.buttonTest.pageTitle,
    position: data.buttonTest.position,
    color: data.buttonTest.color,
    size: data.buttonTest.size,
    hold: data.buttonTest.hold
  });
});