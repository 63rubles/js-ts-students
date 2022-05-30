type TechnologiesType = {
    id: number
    title: string
}

type AdressType = {
    streetTitle: string
    city: LocalCityType
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    adress: AdressType
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
    id: 1,
    name: "Gera",
    age: 21,
    isActive: true,
    adress: {
        streetTitle: "Surganova",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "React"
        },
        {
            id: 2,
            title: "JS"
        },
        {
            id: 3,
            title: "TS"
        }
    ]
}

console.log(student.adress.city.title)
console.log(student.technologies[2].title)