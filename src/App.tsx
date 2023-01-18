import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { routes } from "./routes/routes";
import Menu from "./Component/Menu/Menu";
import './App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="page__layout">
          <div className='page__content'>
            <Routes>
              {routes.map((route, index) => {
                return (
                  <Route key={index} path={route.path} element={<route.component />}/>
                )
              })}
            </Routes>
          </div>
          <Menu />
        </div>
      </Router>
    </div>
  );
}

export default App;
