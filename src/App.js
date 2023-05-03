import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { loadPosts } from './redux/actions/postAction';
import logo from './logo.svg';
import './App.css';

function App() {

  //dispatch action
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  //selector state
  const data = useSelector((state) => state.posts.data);
  const requesting = useSelector((state) => state.posts.requesting);

  return (
    <div className="App">
         <header className="App-header">
        {
          requesting ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            (data && data.length > 0) ? <div>
              <ul className="list-group">
                {data.map(item =>
                  <li key={item.id} className="list-group-item">{item.title}</li>
                )}
              </ul>
            </div>
              : <div>Data is empty</div>
        }
      </header>
    </div>
  );
}

export default App;
