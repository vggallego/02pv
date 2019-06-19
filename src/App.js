import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'

class App extends Component {
  state = {  
    
  }

  createNuevaCita = datos => {
    console.log(datos);
  }
  render() { 
    return (  
      <div className="container">
        <Header
          titulo='Admin Vets'
        />
        <div className="row">
          <div className="col-md10 mx-auto">
            <NuevaCita 
              createNuevaCita={this.createNuevaCita}
            />
          </div>
        </div>  
      </div>
    );
  }
}
 
export default App;