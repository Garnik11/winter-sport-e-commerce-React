import {Header} from "./Header"
import './App.css';
import {Routes, Route  } from "react-router-dom";
import  Shop  from "./Shop";
import  Team  from "./Team";
import Main from "./Main"
import Product from "./Product";



export default function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header/>
        

        <Routes>
          <Route path = '/' element = {<Main/>} />
          <Route path="/:id" element = {<Product/>}/>
          <Route path = '/shop' element = {<Shop/>} />
          <Route path = '/team' element = {<Team/>} />

        </Routes>

      </header>
    </div>
  );

}

