import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Info = ({informacion}) =>{

  if(Object.keys(informacion).length === 0) return null;

  const {strArtistThumb, strGenre, strBiographyES, strFacebook, strTwitter, strLastFMChart} = informacion;

  return(
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Informacion del artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="logo artista"/>
        <p className="card-text">Genero: {strGenre}</p>
        {
          (strBiographyES) ?
            <Fragment>
              <h2 className="card-text">Biografia: </h2>
              <p className="card-text">{strBiographyES}</p>
            </Fragment>
          :
            null
        }

        <p className="card-text">
        {
          (strFacebook) ?
            <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          :
            null
        }
        {
          (strTwitter) ?
            <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          :
            null
        }
        {
          (strLastFMChart) ?
            <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-lastfm"></i>
            </a>
          :
            null
        }

        </p>
      </div>
    </div>
  );
}

Info.propTypes = {
  informacion: PropTypes.object.isRequired
}

export default Info;
