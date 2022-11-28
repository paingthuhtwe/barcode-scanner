import WebStorage from '@georapbox/web-storage/dist/WebStorage.esm.min.js';

export const storage = WebStorage.createInstance({
  driver: 'localStorage',
  keyPrefix: 'barcode-scanner/'
});

export const SETTINGS_STORAGE_KEY = 'settings';