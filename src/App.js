import './App.css';
import Header from './components/Header';
import Users from './components/users/Users';
import React from 'react';
// import Posts from './components/Posts';
import Card from './ui/card/Card';

function App() {
  return (
    <div className="App">
      <Card>
        <Header />
        <Users />
        {/* <Posts /> */}
      </Card>
    </div>
  );
}

export default App;
