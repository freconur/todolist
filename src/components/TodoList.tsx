import { useContext } from "react"
import { TodoContext } from "../context"
import { Item } from "./Item"


const TodoList = () => {
    const {todoState} = useContext(TodoContext)
    const {todos} = todoState
    console.log('todoState', todoState)
    return (
       <ul>
        {todos.map(todo => <Item todo={todo} key={todo.id}/>)}
       </ul>
    )
}

export {TodoList}