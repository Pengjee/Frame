import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Maze from './routes/Maze';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Maze />, document.getElementById('root'));
registerServiceWorker();
