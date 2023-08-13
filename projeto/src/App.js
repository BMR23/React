import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  // ***** Forma longa *****
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     name: 'Breno Melo',
  //     counter: 0
  //   }
  //   this.handlePClick = this.handlePClick.bind(this)  
  //   // para o método ter acesso ao this
  //    Vou tornar a função uma arrow function para facilitar
  // }
  state = {
    name: 'Breno Melo',
    counter: 0
  }

  handlePClick = () => {
    this.setState({ name: 'Junior'})
  }

  handleAClick = (event) => {  // jeitinho para não usar .bind
    event.preventDefault();  
    // "Eu não quero que esse evento faça o que ele ia fazer antes"
    const {counter} = this.state;
    this.setState({ counter: counter + 1})
  }

  render(){
    // const name = this.state.name
    const { name, counter } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
