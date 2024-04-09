import { communicateWithOpenAI } from "../src/Lib/openAIApi.js"
/* eslint-disable */

describe("funcion de OpenAi",() => {
    it('Debería responder la función communicateWithOpenAi', () => {
        const response = {choices: [{messages: {content: "Esta es la Respuesta" } }], ok: true}
        global.fetch = jest.fn(() => {
            return Promise.resolve({
               ok: true, json: () => Promise.resolve({response}),
            })
        });

        const dataFech = communicateWithOpenAI("Esta es la Respuesta", { id: "nausicaa-del-valle-del-viento",})
        return dataFech.then(result => {
            expect(typeof(result)).toEqual("object");  
        });
    })

    it("Deberia devolver Error", () => {
        global.fetch = jest.fn(() => {
            return Promise.reject({
               json: () => Promise.reject(new Error('Hay un error con la respuesta')),
            })
        });
        
        const dataFech = communicateWithOpenAI("Esta es la Respuesta", { id: "nausicaa-del-valle-del-viento",})
        return dataFech.catch(error => {
          expect(typeof(error)).toEqual('object');
        });
    })   
});