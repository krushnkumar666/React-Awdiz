import {BrowserRouter as Router,Routes, Route}  from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Home from './components/home';
import Register from './components/register';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
