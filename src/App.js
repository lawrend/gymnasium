import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    // const tribonacci = function(signature,n){
    //   let retSig = signature;
    //   if (n > 3) {
    //     for (let i = 0; i < n-3; i++) {
    //       let summation = signature[i] + signature[i+1] + signature[i+2];
    //       retSig.push(summation);
    //     }
    //     return retSig
    //   }
    //   else
    //     return retSig.slice(0, n)
    // }


    // let sig = [1, 1, 1]
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <p>Trib = {tribonacci(sig, 7)}</p>
    //   </div>
    //   );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dis is Kewl</h1>
        </header>
        <p className="App-intro">
          You gots to talk to Sabz because she knows it.
        </p>
      </div>
      )
}
}

export default App;
