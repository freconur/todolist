import { useContext } from "react"
import { TodoContext } from "../context"

const TodoCounter = () => {

  const {totalTodos,todosCompleted} = useContext(TodoContext)
  return (
    <div>
      <h1>{todosCompleted} todos completados de {totalTodos}</h1>
    </div>
  )
}

export  {TodoCounter}