import { Todo } from "./type"


interface ItemTodo {
todo: Todo
}

const handleCLick = () => {
    console.log('hacinedo clicks')
}

const Item = ({todo}: ItemTodo) => {
     return (
        <li onClick={handleCLick}>
            <p>id:{todo.id}</p>
            <h2>{todo.text}</h2>
        </li>
    )
}

export {Item}