import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03_03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Gera",
        age: 21,
        isActive: false,
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
                title: "Redux"
            },
            {
                id: 3,
                title: "TS"
            }
        ]
    }
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, "JS")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test("student should became active", () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test("in which city does student live?", () => {
    let result1 = doesStudentLiveIn(student, "Mogilev")
    let result2 = doesStudentLiveIn(student, "Minsk")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})