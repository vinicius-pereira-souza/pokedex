import style from './SubPokemon.module.css'
import { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

function SubPokemon({nome}) {
  const [ obj, setObj ] = useState({})
  const [ img, setImg ] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    .then(r => r.json())
    .then(pokemon => {
      setObj(pokemon)
      setImg(pokemon.sprites.other.dream_world.front_default)
    })
  }, [nome])


  function handleRedirecionar() {
    navigate(`../pokemon/${obj.name}/`)
  }

  return (
    <>
      {img && (
        <div onClick={handleRedirecionar} className={style.container}>
            <img className={style.img} src={img} alt={`imagem do pokemon ${obj.name}`} />
          <div>
            <span className={style.dado}>{obj.id}</span>
            <span className={style.dado}>{obj.name}</span>
          </div> 
        </div>
      )}
    </>

  )
}

export default SubPokemon