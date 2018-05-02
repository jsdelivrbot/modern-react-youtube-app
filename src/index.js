import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <div>{process.env.API_KEY}</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));