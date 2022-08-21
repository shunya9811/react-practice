import {useState, useCallback, useMemo } from 'react'
import Todo from './components/Todo';

function App() {

  console.log('App')

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([
    {
        todo: 'Learn vue.js',
        isCompleted: false
    },
    {
        todo: 'Learn React',
        isCompleted: false
    },
    {
        todo: 'Learn Laravel',
        isCompleted: false
    },
  ]);

  const inputTodo = (e) => {
    setTodo( e.target.value )
  }

  const addTodo = (e) => {
    e.preventDefault()
    setTodos(todos => [...todos,{todo:todo, isCompleted:false}])
    setTodo('')
  }

  const completeTodo = useCallback(index => {
    console.log(index)
    let newTodos = todos.map((todo,todoIndex) => {
      if(todoIndex  === index){
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
      })
    setTodos(newTodos);
  },[todos]);

  const nonCompleteTodos = useMemo(() => todos.filter(todo => {
    console.log('filter')
    return todo.isCompleted === false
  }),[todos])

  return (
    <div style={{ margin: "2em"}}>
      <form onSubmit={ addTodo }>
        <input type="text" onChange={inputTodo} value={todo} />
      </form>
      <Todo todos={nonCompleteTodos} completeTodo={completeTodo}/>
    </div>
  );
}

export default App;