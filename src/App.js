import './styles/App.scss';
import React from 'react';

import Header from './components/Header'
import StudentList from './components/StudentList';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="py-3">
          <StudentList />
        </div>
      </div>
    </div>
  );
}

export default App;
