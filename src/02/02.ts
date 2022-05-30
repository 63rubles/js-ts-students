const student = {
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