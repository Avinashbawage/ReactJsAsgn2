import React from 'react' 
import './App.css';
import Topbar from './components/Topbar/topbar'
import Latestposts from './components/Latestposts/latestposts'
import Cards from './components/Cards/cards'

function App() {
  return (
    <div className="App">
     <Topbar/>
     <div className='containerbox'>
     <Latestposts/>
     <Cards/>
     </div>
    </div>
  );
}

export default App;
