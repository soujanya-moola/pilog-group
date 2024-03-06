import React, { useEffect, useState } from 'react'

export const APITesting = () => {

    const [todos, setTodos] = useState()

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then((data) => {
          setTodos(data)
          console.log(todos)
        })
     }, [todos]);
  return (
    <div>
       {todos.map((e) => 
       <>
       <h1>{e.id}</h1>
       <h4>{e.title}</h4>
       </>
       )}
    </div>
  )
}
