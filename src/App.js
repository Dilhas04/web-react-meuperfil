import React, {Component} from "react";
import './App.css';
import Fotos from './foto';
import Dados from './dados';
import Music from './music';

class App extends Component {

    render(){
      return(
        <div>
          <Fotos/>, <Dados/>, <Music/>
        </div>
      );
    }
}

export default App;