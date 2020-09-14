import React, { useState } from 'react';
import Error from './Error';

const Form = ({search, setSearch, setAsk}) => {

    const [error, setError] = useState(false)

        // extraer ciudad y pais
        const { ciudad, pais } = search;

    // funcion que coloca los elementos en el state
    const handleChange = (e) => {
        // actualizar el state
        setSearch({
            ...search, [e.target.name]: e.target.value
        });
    }
    // cuando el usuario da submit al formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // validar
        if(ciudad.trim()===''||pais.trim()===''){
            setError(true);
            return;
        }
        setError(false);
        // Pasar los cambios al component principal
        setAsk(true);
    }

    return (
        <form onSubmit={handleSubmit} >
            {error ? <Error mensaje='Ambos campos son obligatorios'/>:null}
            <div className='input-field col s12'>
                <input
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor='ciudad'>Ciudad:</label>
            </div>
            <div className='input-field col s12'>
                <select name='pais' id='pais' value={pais} onChange={handleChange}>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="CL">Chile</option>
                </select>
            </div>
            <div className='input-field col s12'>
                <input type='submit' value='Buscar Clima' className='waves-effect waves-light btn-large btn-block yellow accent-4' />
            </div>
        </form>
    )
}

export default Form
