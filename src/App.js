import './default.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from 'components/Header';
import Homepage from 'pages/Homepage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          {/* <Switch> */}
          <Route path="/">
            <Homepage />
          </Route>
          {/* </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
