import Content from "./Content.jsx";
import Header from "./Header.jsx";

const Course = ({course}) => {
    function getTotalNumberOfExcecises(parts) {
        return parts.reduce((subtotal, currentPart) => subtotal + currentPart.exercises, 0);
    }

    return (
        <>
            <Header heading={course.name}/>
            <Content parts={course.parts}/>
            <div>total of {getTotalNumberOfExcecises(course.parts)} exercises</div>
        </>
    )
}

export default Course
