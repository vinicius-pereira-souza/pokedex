import style from './Stats.module.css'

function Stats({dadasObj}) {
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
          <progress max="100" value="35"></progress>
          <progress max="100" value="45"></progress>
          <progress max="100" value="160"></progress>
          <progress max="100" value="30"></progress>
          <progress max="100" value="45"></progress>
          <progress max="100" value="70"></progress>
        </div>
      </div>
    </div>
  )
}

export default Stats