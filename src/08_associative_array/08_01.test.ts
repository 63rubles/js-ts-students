import {UsersType} from "./08_01";

let users: UsersType
beforeEach(() => {
    users = {
        '3434': {id: 3434, name: "Gera"},
        '443': {id: 443, name: "Nata"},
        '1': {id: 1, name: "Yanix"},
        '678': {id: 678, name: "Loki"}
    }
})

test("test should update corresponding user", () => {
    users['3434'].name = "German"

    expect(users['3434']).toEqual({id: 3434, name: "German"})
})

test("test should delete corresponding user", () => {
    delete users['3434']

    expect(users['3434']).toBeUndefined()
})