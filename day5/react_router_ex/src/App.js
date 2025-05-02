import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import Diary from './pages/Diary';
import Home from './pages/Home';
import New from './pages/New';
import Notfount from './pages/Notfound';


function App() {
  const nav = useNavigate();

  const onClickButton = (e) => {
    nav('/new')
  }

  return (
    <div className="App">
      <Link to={'/'}>Home</Link>
      <Link to={'/new'}>New</Link>
      <Link to={'/diary'}>Diary</Link><br/>

      <a href='/'>[a tag Home]</a>
      <a href='/new'>[a tag New]</a>
      <a href='/diary'>[a tag Diary]</a>
      
      <button onClick={onClickButton}>new 페이지로 이동</button>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/diary/:id' element={<Diary/>}/>
        <Route path='*' element={<Notfount/>}/>
      </Routes>
    </div>
  );
}

export default App;
