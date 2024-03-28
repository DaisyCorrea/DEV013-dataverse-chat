// test/apiKey.spec.js

import { getApiKey, setApiKey } from '../src/Lib/apiKey.js';

const testKey = "thisIsKey"

describe('Mi función saca la API KEY guardada en el localStorage', () => {
  test('Si el usuario ingreso la clave, debe devolver esa clave', () => {
    localStorage.setItem("apiKey", testKey);
    expect(getApiKey()).toBe(testKey)
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    
  });
});