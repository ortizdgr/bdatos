import './App.css'
import Listado from './assets/Components/Listado'
import { BDColaboradores } from './BDColaboradores'
import { useState } from 'react';
import Buscador from './assets/Components/Buscador';
import Formulario from './assets/Components/Formulario';

function App() {

  const [datos, setDatos] = useState(BDColaboradores)
  const [dataFiltro, setDataFiltro] = useState(datos)

  const [alert, setAlert] = useState({
    error: false,
    msg: '',
    color: '',
  });

  return (
    <>
      <Buscador datos={datos} dataFiltro={setDataFiltro} />
      <Listado
        datos={datos}
        setDatos={setDatos}
        dataFiltro={dataFiltro}
        setDataFiltro={setDataFiltro} />
      <Formulario
        datos={datos}
        setDatosB={setDatos}
        dataFiltro={dataFiltro}
        setDataFiltro={setDataFiltro}
        alert={alert}
        setAlert={setAlert} />
    </>
  )
}
export default App;

