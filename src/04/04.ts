const ages = [100,20,33,91,53,59]

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100]

type CourseType = {
    title: string
    price: number
}

const course = [
    {title: "JS", price: 120},
    {title: "CSS", price: 180},
    {title: "REACT", price: 90}
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}

const cheapCourses = [
    {title: "REACT", price: 90},
    {title: "JS", price: 120}
]