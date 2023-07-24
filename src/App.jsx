import Table from './components/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
 
function App() {

  return (
    <>

      <h1>¡Welcome to your budget manager!</h1>
      <h2>Based on the Warren Buffet ideas</h2>

    <div className='container'>
        <div className='column'>
        
        <div>
        <br />
          <Table></Table>
          <br />
        </div>

        
      </div>

        <div className='column'>
        </div>



    </div>

    
    </>
  );
}

export default App;
