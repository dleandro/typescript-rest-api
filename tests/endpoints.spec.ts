import request from "supertest"
import app from "../app"

const filteredDescAlJSON = {"record":[{"country":"Portugal","code":"PT","vat":23},{"country":"Italy","code":"IT","vat":22},{"country":"Malta","code":"MT","vat":18}],"metadata":{"id":"5f69afbe65b18913fc510ce8","private":false,"createdAt":"2020-09-22T08:03:10.012Z"}}
const filteredAscAndJSON = {"record":[{"country":"Netherlands","code":"NL","vat":21},{"country":"Ireland","code":"IE","vat":23},{"country":"Poland","code":"PO","vat":23},{"country":"Finland","code":"FI","vat":24}],"metadata":{"id":"5f69afbe65b18913fc510ce8","private":false,"createdAt":"2020-09-22T08:03:10.012Z"}}
const fullJSON = {"record":[{"country":"Austria","code":"AT","vat":20},{"country":"Belgium","code":"BE","vat":21},{"country":"Bulgaria","code":"BG","vat":20},{"country":"Croatia","code":"HR","vat":25},{"country":"Cyprus","code":"CY","vat":19},{"country":"Czech Republic","code":"CZ","vat":21},{"country":"Denmark","code":"DK","vat":25},{"country":"Estonia","code":"EE","vat":20},{"country":"Finland","code":"FI","vat":24},{"country":"France","code":"FR","vat":20},{"country":"Germany","code":"DE","vat":19},{"country":"Greece","code":"EL","vat":24},{"country":"Hungary","code":"HU","vat":27},{"country":"Ireland","code":"IE","vat":23},{"country":"Italy","code":"IT","vat":22},{"country":"Latvia","code":"LV","vat":21},{"country":"Lithuania","code":"LT","vat":21},{"country":"Luxembourg","code":"LU","vat":17},{"country":"Malta","code":"MT","vat":18},{"country":"Netherlands","code":"NL","vat":21},{"country":"Poland","code":"PO","vat":23},{"country":"Portugal","code":"PT","vat":23},{"country":"Romania","code":"RO","vat":20},{"country":"Slovakia","code":"SK","vat":20},{"country":"Slovenia","code":"SI","vat":22},{"country":"Spain","code":"ES","vat":21},{"country":"Sweden","code":"SW","vat":25},{"country":"United Kingdom","code":"GB","vat":20}],"metadata":{"id":"5f69afbe65b18913fc510ce8","private":false,"createdAt":"2020-09-22T08:03:10.012Z"}}

describe("testing textbin endpoint", () => {

    it ("requests jsonbin data without filters_full json is returned", () => {
        return request(app).get("/countries").expect(200, fullJSON)
    })

    it("requests jsonbin data with correct filters ascending and_data is correctly returned", () => {
        return request(app)
          .get('/countries?filter=and&order=asc')
          .expect(200, filteredAscAndJSON);
    })

    it('requests jsonbin data with correct filters descending AL_data is correctly returned', () => {
      return request(app)
        .get('/countries?filter=al&order=desc')
        .expect(200, filteredDescAlJSON);
    });

    it("requests jsonbin data with incorrect type filters_data is not returned and error is shown", () => {
        return request(app).get("/countries?filter=1&order=drf").expect(400)
    })

})


describe("testing string reversal endpoint", () => {

    const revertResult = "OllEh";

    it("requests to reverse string and uppercase vowels_should return correct string", () => {
        return request(app).get("/reverse/hello").expect(200, revertResult)
    })

})

describe("testing append strings endpoint", () => {

    const resultArray = {
    "arr": [
        "hello",
        "bye"
    ]
}

    it("requests to append string at the start and end of array_should correctly append and return current array", () => {
        return request(app).put("/append?start=hello&end=bye").expect(200, resultArray)
    })

})

