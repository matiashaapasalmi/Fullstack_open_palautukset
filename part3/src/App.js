const App = () => {

 


  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }



  const Course = ({Course}) => {

    return(

      <div>
        <h1>{course.name}</h1>
        <div>
          {course.parts[0].name} {course.parts[0].exercises}
        </div>
        <div>
          {course.parts[1].name} {course.parts[1].exercises}
        </div>
        <div>
          {course.parts[2].name} {course.parts[2].exercises}
        </div>
        <div>
          total {course.parts[0].exercises + course.parts[2].exercises}
        </div>
      </div>
     
      
      
    )


  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App