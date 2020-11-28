import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GMap from './components/GMap';
import LeafletMap from './components/LeafletMap';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' component={GMap} exact={true} />
          <Route path='/GMap' component={GMap} />
          <Route path='/LeafletMap' component={LeafletMap} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
