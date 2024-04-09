import { communicateWithOpenAI } from "../src/Lib/openAIApi.js"

/* eslint-diseable */

global.fetch = jest.fn(() => {
    Promise.resolve({
        status: 200,
        json: () => Promise.resolve({}),
    })
});

describe("funcion de OpenAi",() => {
    it('Debería responder la función communicateWithOpenAi', () =>{
        const functionOpenAi = communicateWithOpenAI();
        expect(functionOpenAi).toBe(Promise)  
    })
})





