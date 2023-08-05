import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Detail from './Components/Detail';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPost } from './redux/actions/postActions';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPost());
    }, [dispatch])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/detail/:id' Component={Detail} />
      </Routes>
    </div>
  );
}

export default App;
