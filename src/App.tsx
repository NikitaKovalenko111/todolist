import './App.css'
import Header from './components/Layout/header'
import Todos from './components/Todos/todos';
import { Space } from 'antd'
import CreateTodo from './components/CreateTodo/create-todo';
import Search from './components/Search/search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Space direction='vertical' size="large" style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }} >
          <Search />
          <Todos />
          <CreateTodo />
        </Space>
      </div>
    </BrowserRouter>
  );
}

export default App;
