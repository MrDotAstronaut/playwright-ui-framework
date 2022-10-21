import { PlaywrightTestConfig} from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  
  testDir: './tests',
  // workers: 1,
  // retries: 1,
  // fullyParallel: false,
  timeout: 30 * 1000,
  
  expect: {
    timeout: 5000
  },
  
  reporter: 'html',
  
  use: {

    screenshot: 'on',   // off, on, only-on-failure
    trace: 'off',       // off, on, retain-on-failure, on-first-retry
    video: 'off',       // off, on, retain-on-failure, on-first-retry

    baseURL : 'https://letcode.in'
    // viewport : {width : 720, height : 720}
    // ignoreHttpsErrors : true,
    // permissions : ['geolocation']

  },

  projects : [
    
    {
      name : 'Chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        viewport: null,
        launchOptions: {
          args: ["--start-maximized"],
        },
      }
    },

    // {
    //   name : 'Firefox',
    //   use: {
    //     browserName: 'firefox',
    //     headless: false,
    //     viewport: null,
    //   }
    // },

    // {
    //   name : 'Safari',
    //   use: {
    //     browserName: 'webkit',
    //     headless: false,
    //     viewport: {width : 1365, height : 657},
    //   }
    // },

  ]
}

export default config;
