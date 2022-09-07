

// type LessonsType = {
//     title: string
// }

// type AddressType = {
//     street: TitleType
// }
//
// type TitleType = {
//     title: string
// }

import {Test6Props} from "./Destructuring";

let props: Test6Props;
beforeEach(()=>{
    props = {
        name: "Gera",
        age: 22,
        lessons: [{title: "2"}, {title: "1"}, {title: "3", name: "react"}],
        address: {
            street: {
                title: "Nezavisimosti"
            }
        }
    }
})

test("destructuring test", ()=>{
    let props = {
        name: "Gera",
        age: 22,
        lessons: [{title: "2"}, {title: "1"}],
        address: {
            street: {
                title: "Nezavisimosti"
            }
        }
    }

    //const age = props.age
    //const lessons = props.lessons

    const {age, lessons} = props
    // const title = props.address.street.title
    const {title} = props.address.street

    expect(age).toBe(22)
    expect(lessons.length).toBe(3)
    expect(title).toBe("Nezavisimosti")
})

test("array destructuring",()=>{
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1,ls2] = props.lessons;
    const [ ,lsn2, ...restLessons] = props.lessons

    expect(l1.title).toBe("2")
    expect(l2.title).toBe("1")

    expect(ls1.title).toBe("2")
    expect(ls2.title).toBe("1")
    // expect(ls3.title).toBe("3")

    expect(lsn2.title).toBe("1")
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe("3")

    expect(restLessons[0]).toStrictEqual({title: "3", name: "react"})
})