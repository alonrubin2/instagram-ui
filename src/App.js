import './App.scss';
import Header from './Header/Header'
import Register from './Register/Register'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Register />
      </div>
    </div>
  );
}

export default App;
