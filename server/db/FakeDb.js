import { generateId } from "../utils/GenerateId"



class FakeDb {
    burgers = [{ name: 'BLT', ingredients: 'Bacon, Lettuce, Tomato, 1/4 lb patty, on ciabatta bun', price: '12.99', id: generateId()}]
}

export const fakeDb = new FakeDb()