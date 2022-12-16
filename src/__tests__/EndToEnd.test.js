import puppeteer from 'puppeteer';

describe('Filter events by city', () => {
  let browser;
  let page;

  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ['--disable-extensions']
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('When user hasn’t searched for a city, show upcoming events from all cities', async () => {
    const numberOfEvents = await page.$$eval(
      '.event',
      (element) => element.length
    );
    expect(numberOfEvents).toBe(2);
  });

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.type('.city', 'Paris', { delay: 100 });
    const numberOfCities = await page.$$eval(
      '.suggestions li',
      (element) => element.length
    );
    expect(numberOfCities).toBe(1);
  });

  test('User can select a city from the suggested list', async () => {
    await page.reload();
    await page.type('.city', 'London', { delay: 100 });
    await page.click('.suggestions li');
    const numberOfEvents = await page.$$eval(
      '.event',
      (element) => element.length
    );
    expect(numberOfEvents).toBe(1);
  });
});


// describe('show/hide an events details', () => {
//   let browser;
//   let page;
//   beforeAll(async () => {
//     jest.setTimeout(30000);
//     browser = await puppeteer.launch({
//       headless: false,
//       slowMo: 250,
//       ignoreDefaultArgs: ['--disable-extensions']
//     });
//     page = await browser.newPage();
//     await page.goto('http://localhost:3000/');
//     await page.waitForSelector('.event');
//   });

//   afterAll(() => {
//     browser.close();
//   });

//   test('An element is collapsed by default', async () => {

//     const eventDetails = await page.$('.event .event-details');
//     expect(eventDetails).toBeNull();
//   });

//   test('User can expand an event to see its details', async () => {
//     await page.click('.event .details-button');

//     const eventDetails = await page.$('.event .event-details');
//     expect(eventDetails).toBeDefined();
//   });

//   test('User can collapse an event to hide its details', async () => {
//     await page.click('.event .details-button');
//     const eventDetails = await page.$('.event .event-details');
//     expect(eventDetails).toBeNull();
//   });
// });