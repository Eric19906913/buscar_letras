import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import axios from 'axios';

function App() {

  //state para busqueda
  const [buscaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState('');
  const [informacion, guardarInformacion] = useState({});

  useEffect(()=>{
    //si el objeto esta vacio retorna
    if(Object.keys(buscaLetra).length === 0) return;

    const consultarAPILetra = async () =>{
      const {artista, cancion} = buscaLetra;
      const urlLetra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const urlArtista = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [resLetra, resInformacion] = await Promise.all([
        axios(urlLetra),
        axios(urlArtista)
      ]);

      //const resultado = await axios(url);

      guardarLetra(resLetra.data.lyrics);
      guardarInformacion(resInformacion.data.artists[0]);
    }

    consultarAPILetra();
  },[buscaLetra]);


  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col md-6">
            <Info
              informacion={informacion}
            />
          </div>
          <div className="col md-6">
            {(letra) ?
                <Cancion
                  letra={letra}
                />
              :
                null
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
