test("choose humans older than 90", ()=>{
    const ages = [100,20,33,91,53,59]

    const predicate = (age: number) => age > 90

    const oldAges = ages.filter(predicate)

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

    const cheapPredicate = (course: CourseType) => {
        return course.price < 160
    }

    const cheapCourses = course.filter(cheapPredicate)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe("JS")
    expect(cheapCourses[1].title).toBe("REACT")
})