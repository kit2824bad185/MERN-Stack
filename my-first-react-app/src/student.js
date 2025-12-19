function Student(props) {
    return (
        <div>
            <h2>Student name: {props.name}</h2>
            <p>Class: {props.className}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Student;
