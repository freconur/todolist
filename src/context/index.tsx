import { createContext, useReducer } from "react";
import { Todo, TodoState } from "../components/type";
import { TodoReducer } from "./TodoReducers";

const INITIAL_STATE: TodoState = {
	todos: [
		{
			id: "1",
			text: 'salir a correr',
			completed: false,
		},
		{
			id: "2",
			completed: false,
			text: 'estudiar ingles intermedio'
		},
		{
			id: "3",
			completed: false,
			text: 'practice typescript'
		},
		{
			id: "4",
			completed: true,
			text: 'creado proyecto de javascript'
		}
	],
}

type TodoContextProps = {
	todoState: TodoState;
	toggleTodo: (id: string) => void // void quiere decir que bno regresa nada
	totalTodos: number,
	todosCompleted: number
}

interface Props {
	children: JSX.Element | JSX.Element[]
}



const TodoContext = createContext<TodoContextProps>({} as TodoContextProps)

function TodoProvider({ children }: Props) {
	
	const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE)
	
	const toggleTodo = (id: string) => {
		dispatch({ type: 'toggleTodo', payload: { id } })
	}
	//COUNTER TODOS
	const todosCompleted = INITIAL_STATE.todos.filter((todo) => !!todo.completed).length
	const totalTodos =  INITIAL_STATE.todos.length
	console.log('todosCompleted',todosCompleted)
//COUNTER TODOS

	return (
		<TodoContext.Provider value={{
			todoState,
			toggleTodo,
			totalTodos,
			todosCompleted
		}}>
			{children}
		</TodoContext.Provider>
	)

}

export { TodoProvider, TodoContext }