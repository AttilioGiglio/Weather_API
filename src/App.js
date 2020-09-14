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
      
    }, [ask])

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
