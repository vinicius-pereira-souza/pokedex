import style from './PokeContainer.module.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function PokeContainer({pokeName}){
  const [ dados, setDados ] = useState({})
  const [ imagem, setImagem ] = useState()
  let navigate = useNavigate()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(resp => resp.json())
    .then(pokeObj => {
      setDados(pokeObj)
      setImagem(pokeObj.sprites.other.dream_world.front_default)
    }).catch(err => console.log(err))
  }, [pokeName])

  function rediretion() {
    navigate(`/pokemon/${dados.id}`)
  }

  return (
    <>
      {dados && (
        <div onClick={rediretion} className={style.container}>
          <span className={style.numero}>{dados.id}</span>
          {imagem && <img src={imagem} alt="" />}
          <span className={style.nome}>{dados.name}</span>
        </div>
      )}
    </> 
  )
}

export default PokeContainer