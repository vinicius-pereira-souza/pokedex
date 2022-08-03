import { useState } from "react"
import { useNavigate } from 'react-router-dom';

import style from './Form.module.css'
import Botao from './../Botao/Botao';

function Form() {
  const [ valorInput, setValorInput ] = useState('')
  const navigate = useNavigate()

  function handleChange(e) {
    setValorInput(e.target.value)
  }

  function buscarPokemon(e) {
    e.preventDefault()
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${valorInput}`)
    .then(r => r.json())
    .then(resp => {
      navigate(`/pokemon/${valorInput}`)
      setValorInput('')
    }).catch(err => console.log(err))
  }

  return (
    <form className={style.formContainer}>
        <input 
        type="text" 
        name="texto"
        id="texto"
        placeholder="Digite o nome ou o numero de cadastro"
        onChange={handleChange}
        value={valorInput}/>
      <Botao acao={buscarPokemon} text="Buscar"/>
    </form>
  )
}

export default Form