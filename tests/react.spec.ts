import { test, expect, type Page, type Browser } from "@playwright/test";

const performFillData = async (page: Page) => {
  await page.getByRole("button", { name: "Fill the data" }).click();
  await expect(
    page.getByRole("cell", { name: "0", exact: true }),
  ).toBeVisible();
  await expect(
    page
      .getByRole("row", {
        name: "0 John Doe Quality Control Specialist Blue",
        exact: true,
      })
      .getByRole("cell")
      .nth(1),
  ).toBeVisible();
  await expect(
    page
      .getByRole("row", {
        name: "0 John Doe Quality Control Specialist Blue",
        exact: true,
      })
      .getByRole("cell")
      .nth(2),
  ).toBeVisible();
  await expect(
    page
      .getByRole("row", {
        name: "0 John Doe Quality Control Specialist Blue",
        exact: true,
      })
      .getByRole("cell")
      .nth(3),
  ).toBeVisible();
};

const attemtToTraceEvent = async (page: Page, browser: Browser) => {
  console.log("========== React Component Start Tracing Perf ===========");
  await browser.startTracing(page, {
    path: "./reactPerfTraces.json",
    screenshots: true,
  });
  await page.goto("https://js-battle-umber.vercel.app/react/");
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/react page/i);

  //Using Performanc.mark API
  await page.evaluate(() => window.performance.mark("Perf:Started"));

  //Action
  await performFillData(page);

  //Using performance.mark API
  await page.evaluate(() => window.performance.mark("Perf:Ended"));

  //Performance measure
  await page.evaluate(() =>
    window.performance.measure("overall", "Perf:Started", "Perf:Ended"),
  );

  //To get all performance marks
  const getAllMarksJson = await page.evaluate(() =>
    JSON.stringify(window.performance.getEntriesByType("mark")),
  );
  const getAllMarks = await JSON.parse(getAllMarksJson);
  console.log('window.performance.getEntriesByType("mark")', getAllMarks);

  //To get all performance measures of Google
  const getAllMeasuresJson = await page.evaluate(() =>
    JSON.stringify(window.performance.getEntriesByType("measure")),
  );
  const getAllMeasures = await JSON.parse(getAllMeasuresJson);
  console.log('window.performance.getEntriesByType("measure")', getAllMeasures);
  console.log("======= React Component Stop Tracing ============");
  await browser.stopTracing();

  return getAllMeasures.at(0)?.duration;
};

test.describe("React page - fill the data action", () => {
  test("Get the list of Performance metrics", async ({ page }) => {
    console.log("========== React Component Start Tracing Perf ===========");
    await page.goto("https://js-battle-umber.vercel.app/react/");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/react page/i);

    //Create a new connection to an existing CDP session to enable performance Metrics
    const session = await page.context().newCDPSession(page);
    //To tell the CDPsession to record performance metrics.
    await session.send("Performance.enable");

    // action
    await performFillData(page);

    console.log(
      "=============React Component CDP Performance Metrics===============",
    );
    let performanceMetrics = await session.send("Performance.getMetrics");
    console.log(performanceMetrics.metrics);
  });

  test("Capture performance traces by marking actions using Performance API", async ({
    page,
    browser,
  }) => {
    console.log("========== React Component Start Tracing Perf ===========");
    await browser.startTracing(page, {
      path: "./reactPerfTraces.json",
      screenshots: true,
    });
    await page.goto("https://js-battle-umber.vercel.app/react/");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/react page/i);

    //Using Performanc.mark API
    await page.evaluate(() => window.performance.mark("Perf:Started"));

    //Action
    await performFillData(page);

    //Using performance.mark API
    await page.evaluate(() => window.performance.mark("Perf:Ended"));

    //Performance measure
    await page.evaluate(() =>
      window.performance.measure("overall", "Perf:Started", "Perf:Ended"),
    );

    //To get all performance marks
    const getAllMarksJson = await page.evaluate(() =>
      JSON.stringify(window.performance.getEntriesByType("mark")),
    );
    const getAllMarks = await JSON.parse(getAllMarksJson);
    console.log('window.performance.getEntriesByType("mark")', getAllMarks);

    //To get all performance measures of Google
    const getAllMeasuresJson = await page.evaluate(() =>
      JSON.stringify(window.performance.getEntriesByType("measure")),
    );
    const getAllMeasures = await JSON.parse(getAllMeasuresJson);
    console.log(
      'window.performance.getEntriesByType("measure")',
      getAllMeasures,
    );
    console.log("======= React Component Stop Tracing ============");
    await browser.stopTracing();
  });

  test.only("Render 5000 rows after click event", async ({ page, browser }) => {
    const durations = [];
    for (let i = 0; i < 5; i++) {
      const duration = await attemtToTraceEvent(page, browser);
      durations.push(duration);
    }
    console.log("React Measures Durations: ");
    console.log(JSON.stringify(durations));
  });
});
