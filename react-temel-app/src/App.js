import './App.css';
import Header from './components/Header'
import User from './components/User'

function App() {
  const user = {
    name: 'Ahmet',
    surname: 'SARIDOĞAN',
    username: 'ahmetsaridogan'
  }
  const isLoggedIn = false

  return (
    <div className="App">
      <Header />
      <hr /><hr />
      <User user={user} isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
