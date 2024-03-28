// test/apiKey.spec.js

import { getApiKey, setApiKey } from '../src/Lib/apiKey.js';

const testKey = "thisIsKey"

describe('getApiKey', () => {
  it('debería regresar correctamente el valor de la API Key', () => {
    localStorage.setItem("apiKey", testKey);
    expect(getApiKey()).toBe(testKey)
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    
  });
});