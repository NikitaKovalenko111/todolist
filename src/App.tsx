import './App.css'
import Header from './components/Layout/header'
import Todos from './components/Todos/todos';
import { Space } from 'antd'
import CreateTodo from './components/CreateTodo/create-todo';

function App() {
  return (
    <div className="App">
      <Header />
      <Space direction='vertical' size="large" style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }} >
        <Todos />
        <CreateTodo />
      </Space>
    </div>
  );
}

export default App;
