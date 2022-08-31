test("choose humans older than 90", ()=>{
    const ages = [100,20,33,91,53,59]

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(2)
    expect(oldAges[0]).toBe(100)
    expect(oldAges[1]).toBe(91)
})

test("choose courses cheaper than 160", ()=>{
    const course = [
        {title: "JS", price: 120},
        {title: "CSS", price: 180},
        {title: "REACT", price: 90}
    ]

    const cheapCourses = course.filter(course => course.price < 160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe("JS")
    expect(cheapCourses[1].title).toBe("REACT")
})

test("choose only completed tasks", ()=>{
    const tasks = [
        {id: 1, title: "Salt", isDone: false},
        {id: 2, title: "Meat", isDone: true},
        {id: 3, title: "Sugar", isDone: false},
        {id: 4, title: "Bread", isDone: true}
    ]

    const completedTasks = tasks.filter((el) => el.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe("Meat")
    expect(completedTasks[1].title).toBe("Bread")
})

test("choose only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "Salt", isDone: false},
        {id: 2, title: "Meat", isDone: true},
        {id: 3, title: "Sugar", isDone: false},
        {id: 4, title: "Bread", isDone: true}
    ]

    const uncompletedTasks = tasks.filter((el) => !el.isDone)

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)
})