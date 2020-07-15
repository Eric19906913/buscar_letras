import React, {useState} from 'react'
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({guardarBusquedaLetra}) =>{

  const [busqueda, guardarBusqueda] = useState({
    artista: '',
    cancion: ''
  });
  const [error, guardarError] = useState(false);

  //saco artista y cancion y los seteo como value para que actualice cada input
  const { artista, cancion } = busqueda;

  //guardar la busqueda del usuario
  //lee cada uno de los inputs segun cambian
  const actualizarState = e =>{
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  //buscar los datos que ingreso el usuario
  const buscarInfo = e =>{
    e.preventDefault();

    if(artista.trim() === '' || cancion.trim() === ''){
      guardarError(true);
      return;
    }
    guardarError(false);

    //pasar la busqueda al APP
    guardarBusquedaLetra(busqueda);
  }

  return(
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            onSubmit={buscarInfo}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"

          >

            <fieldset>
              <legend className="text-center">Buscar letras de canciones</legend>
              {
                (error) ?
                <Error
                  mensaje="Debe completar todos los campos"
                />
                :
                null
              }
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre Artista"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cancion</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre Cancion"
                      onChange={actualizarState}
                      value={cancion}
                      />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary float-right"
              >Buscar</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

Formulario.propTypes = {
  guardarBusquedaLetra: PropTypes.func.isRequired
}

export default Formulario;
