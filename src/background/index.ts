import * as browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener((): void => {
  // eslint-disable-next-line no-console
  console.log("[twitter-ads-blocker-webext] Thanks for installing the extension!")
})
