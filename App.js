import {Link,Routes,Route} from "react-router-dom"
import About from './About';
import './App.css';

import Home from './Home';

import Newpost from './Newpost';
import Postpage from './Postpage';
import Post from "./Post";
import Postlayout from "./Postlayout";
import Appp from "./Appp";



function App() {
  
  return (
    <>
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/newpost">Newpost</Link>
          </li>
          <li>
            <Link to="/postpage">postpage</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/newpost" element={<Newpost/>}></Route>
        <Route path="postpage" element={<Postlayout/>}>
        <Route index element={<Postpage/>}></Route>
        <Route path=":id" element={<Post/>}/>
        <Route path="newpost" element={<Newpost/>}/>
        </Route>
      </Routes>
  <Appp/>
    
    </div>
    
    
    </>
  );
}

export default App;
