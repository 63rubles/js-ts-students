export type userType = {
    name: string
    age: number
    address: {title: string}
}

const increaseAge = (u: userType) => {
    u.age++;
}

test("reference type test", () => {
    let user = {
        name: "Gera",
        age: 22,
        address: {
            title: "Minsk"
        }
    }

    increaseAge(user);
    expect(user.age).toBe(23)

    //---------------------------------

    const superman = user
    superman.age = 1000; //с объектами манипуляции происходят по ссылке, то есть объект мутирует. это не копия, мы не создаём новый объект, а просто меняем исходный
    expect(user.age).toBe(1000)
})

test("reference type test", () => {
     let user = {
        name: "Gera",
        age: 22,
        address: {
            title: "Minsk"
        }
    }

    // const addr = user.address

    let user2: userType = {
        name: "Natiks",
        age: 20,
        address: user.address
    }

    user2.address.title = "Mogilev";
    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe("Mogilev")
})

test("array reference test", () => {
    let users = [
        {
            name: "Gera",
            age: 22
        },
        {
            name: "Yanix",
            age: 27
        }
    ]

    const admins = users
    admins.push({name: "Nana", age: 33})
    //мы не добавляем нового админа, мы так же добавляем и нового юзера

    expect(users[2]).toEqual({name: "Nana", age: 33})
})

test("value type test", () => {
    let usersCount = 1000

    let adminsCount = usersCount

    adminsCount++

    //у примитивов всё это работает по-другому, в данном случае, мы не пемяем объект начальный, потому что у примитивов происходит копия. Поэтому adminsCount станет 101, а usersCount останется 100
    //так же, если бы мы использовали const - то мы бы не смогли изменить значение, так как const подразумевает изменение только объектов, а примитивов можно сделать только копию
})

test("reference type array test", () => {
    const newAdress = {
        title: "minsk city"
    }

    let user = {
        name: "Gera",
        age: 22,
        address: {
            title: newAdress
        }
    }

    let user2: userType = {
        name: "Natiks",
        age: 20,
        address: newAdress
    }

    const users = [user, user2, {name: "Pasha", age: 18, address: newAdress}]

    const admins = [user, user2]
    admins[0].name = "German" //здесь мы изменили имя уже не только как админу, но и как юзеру
    //такой мутабельный подход не совсем подходит нам, хотя реакт разрабу должно быть на это всё равно, разве, что он не станет angular разрабом. Лучший подход для этого - создавать копии объектов, а не их прямое изменение по ссылкам

    expect(user.name).toBe("German")
})