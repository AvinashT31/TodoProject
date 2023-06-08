import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Todo from './Component/Todo'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Todo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
