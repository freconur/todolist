import { createContext, useReducer } from "react";
import { Todo, TodoState } from "../components/type";
import { TodoReducer } from "./TodoReducers";

const INITIAL_STATE: TodoState = {
	todoCount: 0,
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
		}
	],
	completed: 0,
	pending: 0
}

type TodoContextProps = {
	todoState: TodoState;
	toggleTodo: (id:string) => void // void quiere decir que bno regresa nada
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

	return (
		<TodoContext.Provider value={{
			todoState,
			toggleTodo
		}}>
			{children}
		</TodoContext.Provider>
	)

}

export { TodoProvider, TodoContext }