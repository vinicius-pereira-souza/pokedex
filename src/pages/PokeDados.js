import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './PokeDados.module.css'
import Stats from './../components/Stats/Stats';

function PokeDados() {
  const { id } = useParams()
  const [ pokemon, setPokemon ] = useState({})
  const [ img, setImg ] = useState()
  const [ erro, setErro ] = useState(false)
  const peso = pokemon.weight * 0.1

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(r => r.json())
    .then(dados => {
      setPokemon(dados)
      setImg(dados.sprites.other.dream_world.front_default)
    }).catch(err => {
      setErro(!erro)
    })
  }, [id, erro])

  return (
    <div className={style.container}>
      <>
        {img && (
          <div className={style.dadosContiner}>
            <img src={img} alt="" />
            <div>
              <p>Nome: {pokemon.name}</p>
              <p>Numero de cadastro: {pokemon.id}</p>
              <p>Peso: {peso.toFixed(2)}Kg</p>
              <p>Altura: {pokemon.height * 10}Cm</p>
            </div>
          </div>
        )}
        {erro && <p>Não Temos dados sobre este Pokemon</p>}
      </>
      <div>
        <h3>sub Lista</h3>
      </div>
    </div>
  )
}

export default PokeDados