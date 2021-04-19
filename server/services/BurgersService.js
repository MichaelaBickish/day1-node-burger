import { fakeDb } from "../db/FakeDb"
import { BadRequest } from "../utils/Errors";
import { generateId } from "../utils/GenerateId"



class BurgersService {

    async find(query = {}) {
        // let values = await dbContext.Values.find(query); ANCHOR why commented out? what does this do?
        return fakeDb.burgers;
    }

    async findById(id) {
        let value = fakeDb.burgers.find(e => e.id === id)
        if (!value) {
            throw new BadRequest("Invalid Id Casting Failed")
        }
        return value;
    }
    
    create(newBurger) {
        newBurger.id = generateId()
        fakeDb.burgers.push(newBurger)
        return newBurger
    }

    delete(id) {
        let value = fakeDb.burgers.find(e => e.id === id)
        if (!value) {
            throw new BadRequest("Invalid Id Casting Failed");
          }
          fakeDb.burgers = fakeDb.burgers.filter(b => b.id !== id)
    }


}



export const burgersService = new BurgersService()