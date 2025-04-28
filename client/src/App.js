import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Info2 from './components/Info2.jsx';
import UserContextProvider from "./context/UserContextProvider.jsx";
// import Cards from './components/Cards.jsx';

function App() {
  return (
    <UserContextProvider>
    <div className="App">
      <Header/>
      <Info2/>
      {/* <Cards/> */}
    </div>
    </UserContextProvider>
  );
}

export default App;
