import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'
import ListaCitas from './components/ListaCitas'

class App extends Component {
  state = {  
    citas: []
  }

  // cuando la aplicacion carga leeremos los datos de storage
  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  // cuando agregamos/eliminamos una citas
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  } 

  crearNuevaCita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas, datos];
    //agregar el nuevo state
    this.setState({
      citas: citas
    });
  }

  // elimina la citas del state
  eliminarCita = id => {
    // copia del id
    const citasActuales = [...this.state.citas];
    // utilizar filter para sacar el elemento id del array
    const citas = citasActuales.filter(cita => cita.id !== id);
    // actualizar el state
    this.setState({
      citas
    });
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
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas 
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>  
      </div>
    );
  }
}
 
export default App;