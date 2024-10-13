import { mockRequest, mockResponse } from "../../__mocks__"
import { getStock } from "../../handlers/stock"

describe('getStock', () => {
    it('should return an empty array', () => {
        getStock(mockRequest, mockResponse)
        expect(mockResponse.send)
        .toHaveBeenCalledWith([])

    })
})