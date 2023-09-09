
const Buscador = ({ datos, datafiltro }) => {


  const inputHandler = (e) => {
      e.preventDefault();
      const buscarPalabra = e.target.value.toLowerCase();
      console.log('dataB',datos)
      const resultado = datos.filter((colaborador) =>
          
          colaborador.nombre.toLowerCase().includes(buscarPalabra) || 
          colaborador.correo.toLowerCase().includes(buscarPalabra) || 
          colaborador.edad.includes(buscarPalabra) || 
          colaborador.cargo.toLowerCase().includes(buscarPalabra) || 
          colaborador.telefono.includes(buscarPalabra)
          
      )

      datafiltro(resultado)
  }

  return (
      <input 
          className="form-control"
          type="text"
          placeholder="Buscador"
          onChange={inputHandler}>
      </input>
  )
};

export default Buscador;