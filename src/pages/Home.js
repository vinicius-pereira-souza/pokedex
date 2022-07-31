import ContainerHome from './../components/ContainerHome/ContainerHome';
import { useEffect, useState } from 'react';
import Botao from '../components/Botao/Botao';
import PokeContainer from './../components/PokeContainer/PokeContainer';
import style from './Home.module.css'

function Home() {
  const urlInicial = 'https://pokeapi.co/api/v2/pokemon'
  const [ url, setUrl ] = useState(urlInicial)
  const [ pokeDados, setPokeDados ] = useState()

  useEffect(() => {
    fetch(url)
    .then(r => r.json())
    .then(dados => {
      setPokeDados(dados)
    }).catch(err => console.log(err))
  }, [url])

  function proximaPagina() {
    setUrl(pokeDados.next)
  }

  function paginaAnterior() {
    setUrl(pokeDados.previous)
  }

  return (
    <div>{pokeDados && (
      <ContainerHome>
        {pokeDados && (
          pokeDados.results.map(dados => (
            <PokeContainer key={dados.name} pokeName={dados.name}/>
          ))
        )}
     </ContainerHome>
    )}
      <div className={style.btns}>
        {pokeDados && <Botao acao={paginaAnterior} text='🠔 Anterior'/>}
        <Botao acao={proximaPagina} text='Proximo 🠖'/>
      </div>
    </div>
  )
}

export default Home