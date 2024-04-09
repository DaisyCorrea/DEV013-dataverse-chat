import { communicateWithOpenAI } from "../src/Lib/openAIApi.js"

global.fetch = jest.fn(() => {
    Promise.resolve({
        status: 200,
        json: () => Promise.resolve({}),
    });
});

describe("funcion de OpenIA", => {
    it('llamar a la API de OpenIA y o')
})