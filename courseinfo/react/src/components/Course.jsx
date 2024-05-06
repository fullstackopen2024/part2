import Content from "./Content.jsx";
import Header from "./Header.jsx";

const Course = ({course}) => {
    return (
        <>
            <Header heading={course.name}/>
            <Content parts={course.parts}/>
        </>
    )
}

export default Course
