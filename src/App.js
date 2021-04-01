import logo from './logo.svg';
import bed from './homerBedAngry.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bed} className="App-logo" alt="logo" />
        <h1>Rise and shine</h1>  
        <h1>Time to start those assignments</h1>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
        </div>
      </header>
    </div>
  );
}

export default App;
