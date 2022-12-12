import { TodoCounter } from './components/TodoCounter'
import { TodoList } from './components/TodoList'
import { TodoSearch } from './components/TodoSearch'

const AppUi = () => {
  
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>
      <TodoList  />
    </div>
  )
}

export default AppUi