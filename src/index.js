import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';

const App = () => {
    return (
        <>
        <Card />
        <div className="footer">Made with &hearts; by Estefanía De Rosa Gil</div>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));