import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { routes } from "./routes/routes";
import Menu from "./Component/Menu/Menu";
import Media from 'react-media';
import './App.scss'
import MenuIcon from "./Component/menuIcon/MenuIcon";
import Projects from "./Pages/Projects/Projects";

function App() {
  const [menuIcon, setMenuIcon] = useState(false)
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
            <Routes><Route path='/Projects' element={<Projects />} /></Routes>
          </div>
          <Media queries={{ large: { minWidth: 1000 } }} >
            {(matches) => matches.large ?
             (<Menu />):
             (<div onClick={() => {setMenuIcon(!menuIcon)}} className='menu__icon'>
                <MenuIcon status={menuIcon} />
                {menuIcon && <Menu />}
              </div>)}
          </Media>
        </div>
      </Router>
    </div>
  );
}

export default App;
