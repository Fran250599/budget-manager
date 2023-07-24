import React, { useState } from 'react';
import './Table.css';
import PieChart from './PieChart';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

function Table(){
    //** Basically, I need a table that works like an excel spreadsheet.
    //I need to be able to add rows, the two colums will be 'Payment name' and  'Ammount'
    //The idea is that after any ammount is added, the user will click 'enter' and the new ammount on the input field, it will be added or substracted to the total ammount located
    //at the bottom after the last row. 
    const [tableRows, setTableRows] = useState(['Payment 1', 'Payment 2', 'Payment 3']);
    const [ammountSummary, setAmmountSummary] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const [chartAmmounts, setChartAmmounts] = useState([50,50,50])
    const [chartNames, setChartNames] = useState(['Payment 1', 'Payment 2', 'Payment 3'])

    const addRow = () => {
        setTableRows([...tableRows, `Payment ${tableRows.length + 1}`]);
    }

    const handleChanges = () => {
        let total = 0;
        for (let i = 0; i < tableRows.length; i++) {
            const inputAmmounts = document.getElementById('ammount'+ i);
            const inputNames = document.getElementById('name'+ i);
            total += Number(inputAmmounts.value);
            chartAmmounts[i] = inputAmmounts.value;
            chartNames[i] = inputNames.value;
        }
        setRemaining(document.getElementById('budget').value - total);
        setAmmountSummary(total);

    
    }


  return (
    <>
    
    <div className='container'>
    <div className='column'>
    <label className='form-label'>Your budget:</label>
        
        <input className='form-control' id='budget' onChange={handleChanges}/>
        <br/>
        <div className='container'>
            
            
            
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Payment name</th>
                        <th>Ammount</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows.map((row, index) => (
                        <tr key={index}>
                            <td><input id={'name'+index} type="text"  onChange={handleChanges}/></td>
                            <td><input id={'ammount'+index}  type="number" value={chartAmmounts[index]} onChange={handleChanges}/></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total to spent:</td>
                        <td>{ammountSummary}</td>
                    </tr>
                    <tr>
                    <td>Remaining:</td>
                        <td>{remaining}</td>
                    </tr>
                </tfoot>
            </table>
            <button className='btn btn-primary' onClick={addRow}>Add row</button>
    
    </div>
    <div className='column' id='chartDiv'>
    <PieChart chartAmmounts={chartAmmounts} chartNames={chartNames}></PieChart>
    </div>
       

    </div>
    
    </>
  );

}

export default Table;
