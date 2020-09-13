import React, {useState} from 'react'

const Form = () => {
    const [search, setSearch] = useState({
        ciudad: '',
        pais: ''
    })
    // extraer ciudad y pais
    const {ciudad,pais} = search;
    const handleChange = (e) => {
        // actualizar el state
        // console.log(e.target.value)
        setSearch({
            ...search, [e.target.name] : e.target.value
        });
    }
    return (
        <form className='input-field col s12'>
            <input
                type='text'
                name='ciudad'
                id='ciudad'
                value={ciudad}
                onChange={handleChange}
            />
            <label htmlFor='ciudad'>Ciudad:</label>
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
        </form>
    )
}

export default Form
