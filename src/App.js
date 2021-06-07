import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, { initialState } from "./reducers";
import { addOne, addDigit, addToMem, applyNumber, changeOperator, clearDisplay, clearMem, enterDigit, pullFromMem } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApply = (e) => {
    dispatch(applyNumber(Number(e.target.textContent)));
  };

  const handleOpChange = (e) => {
    dispatch(changeOperator(e.target.textContent));
  };

  const handleClear = (e) => {
    dispatch(clearDisplay());
  };

  const handleAddToMem = (e) => {
    dispatch(addToMem());
  };

  const handlePullFromMem = (e) => {
    dispatch(pullFromMem());
  };

  const handleClearMem = (e) => {
    dispatch(clearMem());
  };

  const handleAddDigit = (e) => {
    dispatch(addDigit(e.target.textContent));
  };

  const handleEnterDigit = (e) => {
    dispatch(enterDigit());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <TotalDisplay value={state.workingNumber}/>

            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleAddToMem}/>
              <CalcButton value={"MR"} onClick={handlePullFromMem}/>
              <CalcButton value={"MC"} onClick={handleClearMem}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleAddDigit}/>
              <CalcButton value={2} onClick={handleAddDigit}/>
              <CalcButton value={3} onClick={handleAddDigit}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleAddDigit}/>
              <CalcButton value={5} onClick={handleAddDigit}/>
              <CalcButton value={6} onClick={handleAddDigit}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleAddDigit}/>
              <CalcButton value={8} onClick={handleAddDigit}/>
              <CalcButton value={9} onClick={handleAddDigit}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOpChange}/>
              <CalcButton value={"*"} onClick={handleOpChange}/>
              <CalcButton value={"-"} onClick={handleOpChange}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
              <CalcButton value={"="} onClick={handleEnterDigit}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
