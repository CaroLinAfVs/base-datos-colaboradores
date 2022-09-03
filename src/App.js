import Header from "./componentes/Header";
import Datos from "./componentes/Datos";
import Button from "./componentes/Button";
import ListaColaboradores from "./componentes/ListaColaboradores";
import baseColaboradores from "./baseColaboradores.json";
import {useState} from "react";

function App() {
  const [colaboradores, setColaboradores] = useState(baseColaboradores)
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [filtro, setFiltro] = useState("")

  const agregarColaborador = (e) =>{
    e.preventDefault()
    const newColaborador = {id: colaboradores.length + 1, nombre: name, correo: mail}
    const newList = []
    for(let colaborador of colaboradores){
      newList.push(colaborador)
    }
    newList.push(newColaborador)
    setColaboradores(newList)
    setName("")
    setMail("")
  }
  const filtrarColaborador = (text)=>{
    const listFiltrada = colaboradores.filter(colaborador => colaborador.nombre !== text.nombre)
    console.log(listFiltrada)
    setColaboradores(listFiltrada)
  }
  

  return (
    <div className="App">
      <div>
      <Header title="Buscador de Colaboradores" onSearch={setFiltro} value={filtro}/>
      </div>
      <form onSubmit={agregarColaborador} className="user">
        <Datos onChange={setName} subtitle="Nombre del colaborador" text="Ingresa el nombre del colaborador" value={name}/>
        <Datos onChange={setMail} subtitle="Correo del colaborador" text="Ingresa correo del colaborador" value={mail}/>
        <Button  text="Agregar colaborador" />
      </form>
      
      <div className="title">
        <hr/>
        <h2>Listado de colaboradores</h2>
      </div>
      <ListaColaboradores colaboradores={colaboradores} filtro={filtro}/>

    </div>
  );
}

export default App;
