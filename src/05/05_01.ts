export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Alexander Petrov", age: 33},
    {name: "Svetlana Cringe", age: 25},
    {name: "German Romanov", age: 22}
]

const dimychTransformator = (man: ManType) => {
    return {
        stack: ["css, html", "tdd", "js", "react, angular"],
        firstName: man.name.split("")[0],
        lastName: man.name.split("")[1]
    }
}

const devs = [
    {
        stack: ["css, html", "tdd", "js", "react, angular"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack: ["css, html", "tdd", "js", "react, angular"],
        firstName: "Svetlana", lastName: "Cringe"
    },
    {
        stack: ["css, html", "tdd", "js", "react, angular"],
        firstName: "German", lastName: "Romanov"
    }
]

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const devs3 = people.map(dimychTransformator)
const devs4 = people.map(man => {
        return {
            stack: ["css, html", "tdd", "js", "react, angular"],
            firstName: man.name.split("")[0],
            lastName: man.name.split("")[1]
        }
    }
)

const messages = people.map( man => 'Hello ' + man.name.split(" ")[0] + '. Welcome to IT-incubator' )

export const createGreetingMessages = (people: Array<ManType>) => {
    return people.map( man => 'Hello ' + man.name.split(" ")[0] + '. Welcome to IT-incubator' )
}