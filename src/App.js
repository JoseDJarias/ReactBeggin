import './App.css';
import GameList from './components/GameList';
import Counter from './components/Counter';
import CounterV2 from './components/CounterV2';
import Navigation from './components/Navigation';
import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import BetContainer from './components/BetContainer';
import BetCounter from './components/BetCounter';
import TaskList from './components/TaskList';


// function Welcome({name}){
//   return <h1>Hola {name}</h1>
// }
function App() {
  // const [value,setValue] = useState(0)
  // function increaseCounter() {
  //   setValue(value+1)
  // }

  return (
    // <div className='App'>
    // <div className='div-container'>
    <TaskList/>
    // </div>

    // </div>
  )
}

// function App() {
//   const [isSessionStarted, setIsSessionStarted] = useState(false)
  
//   const handleLogin = () => {
//     setIsSessionStarted(true);
//   };

//   const handleLogout = () =>{
//     setIsSessionStarted(false);
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//       <Navigation
//         isSessionStarted={isSessionStarted}
//         onLogout={handleLogout}
//       />
//       </header>
//       <div>
//       {isSessionStarted ? false : <LoginForm onLogin={handleLogin} />}
   
//       </div>
//     </div>
//   );
// }


// function App() {
//   const [value,setValue] = useState(0);
//   // evento
//   const increase= () =>{
//     setValue(value+1)
//     }
//   return (
//     <div className="App">
//       <Navigation isSessionStarted = {true}/>

//       <div>
//         <Welcome name='Nico'/>
//         <GameList />
//         <Counter/>
//         <CounterV2 value={value} increase={increase}/>
//        </div>
//       </div>
//   );
// }

export default App;
