import './App.css';
import AppUi from './AppUi';
import { TodoProvider } from './context';


function App() {

  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export default App;
