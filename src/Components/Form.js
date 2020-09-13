import React, { useState } from 'react'

const Form = () => {
    
    const [search, setSearch] = useState({
        ciudad: '',
        pais: ''
    })

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
    }

    return (
        <form onSubmit={handleSubmit} >
            {error ? <p className='red darken-4'>Todos los campos son obligatorios</p>:null}
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
                </select>
            </div>
            <div className='input-field col s12'>
                <input type='submit' value='Buscar Clima' className='waves-effect waves-light btn-large btn-block yellow accent-4' />
            </div>
        </form>
    )
}

export default Form
