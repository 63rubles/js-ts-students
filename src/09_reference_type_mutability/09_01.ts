export type userType = {
    name: string
    age: number
    address: {title: string}
}

let user = {
    name: "Gera",
    age: 22
}

const increaseAge = (user: userType) => {
    user.age++;
}