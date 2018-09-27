export const ENV = {
    FIXER_API: 'http://data.fixer.io/api/latest?access_key=b1b67cc3284b203bdf9b3650f7b7b8c8',
    SYMBOL_API: 'http://data.fixer.io/api/symbols?access_key=b1b67cc3284b203bdf9b3650f7b7b8c8',
    API_KEY: '1310d83b485330647e6e59ad7f9ef94d',
    MY_API_KEY: 'b1b67cc3284b203bdf9b3650f7b7b8c8'
  };

export const DELAY = 30000;

export const LOGGING_ENABLED = true;

export const ABOUT_TEXT = {
  TITLE: 'Currency Converter',
  TEXT: `1. App requests for data from Fixer API every 30 seconds, users can manually refresh too.\n
  2. Once data is fetched, amounts can be entered on either side for conversion.\n
  3. Changing Source currency is a premium feature of Fixer API.\n
  4. Destination currency can be changed to any of the available items in the list.\n`
};