import style from './SubPokemon.module.css'
// import img from '../../img/3.svg'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
    }).catch(err => console.log(err))
  }, [])


  function handleRedirecionar() {
    navigate(`./pokemon/${obj.id}`)
  }

  return (
    <>
      {img && (
        <div onClick={handleRedirecionar} className={style.container}>
            <img className={style.img} src={img} alt="" />
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