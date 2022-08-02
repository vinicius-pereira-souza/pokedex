import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './PokeDados.module.css'
import Stats from './../components/Stats/Stats';
import Dados from '../components/Dados/Dados';
import SubContainer from './../components/Sublista/SubContainer';
import SubPokemon from '../components/SubPokemon/SubPokemon';

function PokeDados() {
  const { id } = useParams()
  const [ pokemon, setPokemon ] = useState({})
  const [ img, setImg ] = useState()
  const [ erro, setErro ] = useState(false)
  const [ arrStat, setArrStat ] = useState([])
  const peso = pokemon.weight * 0.1
  
  const urlInicial = 'https://pokeapi.co/api/v2/pokemon'
  const [ url, setUrl ] = useState(urlInicial)
  const [ pokeDados, setPokeDados ] = useState()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(r => r.json())
    .then(dados => {
      setPokemon(dados)
      setImg(dados.sprites.other.dream_world.front_default)
      setArrStat(dados.stats)
    }).catch(err => {
      setErro(!erro)
    })

    fetch(url)
    .then(r => r.json())
    .then(poke => {
      setPokeDados(poke)
    }).catch(err => console.log(err))

  }, [id, erro])

  return (
    <div className={style.container}>
      {img && 
        <>
          <div className={style.pokemon}>
            <img src={img} alt="Imagem do Pokemon"/>
            <div>
              <div className={style.dados}>
                <Dados titulo="Nome" valor={pokemon.name}/>
                <Dados titulo="Numero" valor={`#${pokemon.id}`}/>
              </div>
              <div className={style.dados}>
                <Dados titulo="Peso" valor={`${peso} Kg`}/>
                <Dados titulo="Altura" valor={`${pokemon.height * 10} Cm`}/>
              </div>
              {arrStat && <Stats arrStat={arrStat}/>}
            </div>
          </div>
        </>
      }
      <SubContainer>
        {pokeDados && (
          pokeDados.results.map(poke => (
            <SubPokemon key={poke.name} nome={poke.name}/>
          ))
        )}
        <SubPokemon/>
      </SubContainer>
    </div>
  )
}

export default PokeDados