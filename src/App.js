import React from 'react';
import Card from './ui/card/Card';
import './App.css';
import Header from './components/Header';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
      <Card>
        <Header />
        <Users />
      </Card>
    </div>
  );
}

export default App;
