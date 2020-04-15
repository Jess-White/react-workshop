import React from 'react';
import ReactDOM from 'react-dom';
import MyInfo from './MyInfo';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(<div>
                <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                </ul>
                </div>, document.getElementbyId("root"));

function() MyApp {
  return (
    <div>
    <h1>Jess White</h1>
    <p>
    This is a little blurb about me.
    </p>
    <ul>
    <li>Toronto</li>
    <li>Bangkok</li>
    <li>Surinam</li>
    </ul>
    </div> 
  ) 
};

ReactDOM.render(<MyApp/>, document.getElementById("root"))

serviceWorker.unregister();
