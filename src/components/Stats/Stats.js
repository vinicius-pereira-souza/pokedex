import style from './Stats.module.css'

function Stats({arrStat}) {
  return (
    <div className={style.container}>
      <h1>Estatísticas</h1>
      <div className={style.containerFlex}>
        <div className={style.titles}>
          <span>Hp: </span>
          <span>Ataque: </span>
          <span>Defesa: </span>
          <span>Ataque-Especial: </span>
          <span>Defesa-Especial: </span>
          <span>Velocidade: </span>
        </div>
        <div className={style.progress}>
          <progress max="100" value={arrStat[0].base_stat}></progress>
          <progress max="100" value={arrStat[1].base_stat}></progress>
          <progress max="100" value={arrStat[2].base_stat}></progress>
          <progress max="100" value={arrStat[3].base_stat}></progress>
          <progress max="100" value={arrStat[4].base_stat}></progress>
          <progress max="100" value={arrStat[5].base_stat}></progress>
        </div>
      </div>
    </div>
  )
}

export default Stats