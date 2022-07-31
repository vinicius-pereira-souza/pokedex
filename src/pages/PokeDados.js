import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PokeDados() {
  const { id } = useParams()
  const [ pokemon, setPokemon ] = useState({})
  const [ img, setImg ] = useState()
  const [ erro, setErro ] = useState(false)

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
    <>
      {img && (
        <div>
          <img src={img} alt="" />
          <p>Nome: {pokemon.name}</p>
          <p>Numero de cadastro: {pokemon.id}</p>
          <p>Peso: {pokemon.weight * 0.1}Kg</p>
          <p>Altura: {pokemon.height * 10}Cm</p>
        </div>
      )}
      {erro && <p>Não Temos dados sobre este Pokemon</p>}
    </>
  )
}

export default PokeDados