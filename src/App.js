import React, { Fragment, useState, useEffect } from 'react';
import Form from './Components/Form';
import Header from './Components/Header'

function App() {
  const [search, setSearch] = useState({
    ciudad: '',
    pais: ''
});

const { ciudad, pais } = search;

const [ask, setAsk] = useState(false); 

    useEffect(() => {
      const consultarAPI = async () => {
      if(ask){
      const appId = '2ce81b5a2b3517cc2b2ec2f81334e625';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado)}
    }
    consultarAPI();
    }, [ask, ciudad, pais])

  return (
    <Fragment>
      <Header
        titulo='Clima React App'
      />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
             <Form 
             search={search}
             setSearch={setSearch}
             setAsk={setAsk}
             />
            </div>
            <div className='col m6 s12'>
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
