import {createGreetingMessages, ManType} from "./05_01";

let people: Array<ManType>

beforeEach( () => {
    people = [
        {name: "Alexander Petrov", age: 33},
        {name: "Svetlana Cringe", age: 25},
        {name: "German Romanov", age: 22}
    ]
})

test("Should do greeting messages for users", () => {
    const messages = createGreetingMessages(people)

    expect(people.length).toBe(3)
    expect(messages[0]).toBe('Hello Alexander. Welcome to IT-incubator')
    expect(messages[1]).toBe('Hello Svetlana. Welcome to IT-incubator')
    expect(messages[2]).toBe('Hello German. Welcome to IT-incubator')
})