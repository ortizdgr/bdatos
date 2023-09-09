
import { Table } from 'react-bootstrap';


const Listado = ({ datos, setDatos, dataFiltro, setDataFiltro }) => {

  const borrarColaborador = (idColaborador) => {
      

      const colaboradores = datos.filter(colaborador =>
          colaborador.id !== idColaborador
      )
      setDatos(colaboradores)

      const colaboradoresFiltrados = dataFiltro.filter(colaborador =>
          colaborador.id !== idColaborador
      )
      setDataFiltro(colaboradoresFiltrados)

  }


  const contenidoTabla = dataFiltro.map((colaborador) => (
      <tr id="conten" key={colaborador.id}>
          <th scope="row">{colaborador.id}</th>
          <td>{colaborador.nombre}</td>
          <td>{colaborador.correo}</td>
          <td>{colaborador.edad}</td>
          <td>{colaborador.cargo}</td>
          <td>{colaborador.telefono}</td>
          <td>
              <button 
              className="btn btn-primary" 
              type="button"
              onClick={e => borrarColaborador(colaborador.id)}
              >Borrar col</button>
          </td>
      </tr>
  ));

  return (
      <Table className="table">
          <thead>
              <tr id="dt">
                  <th id="ta" scope="col">Id</th>
                  <th id="ta" scope="col">nombre</th>
                  <th id="ta" scope="col">correo</th>
                  <th id="ta" scope="col">Edad</th>
                  <th id="ta" scope="col">cargo</th>
                  <th id="ta" scope="col">telefóno</th>
                  <th id="ta" scope="col"></th>
              </tr>
          </thead>
          <tbody>
              {contenidoTabla}
          </tbody>
      </Table>
  )
}



export default Listado;