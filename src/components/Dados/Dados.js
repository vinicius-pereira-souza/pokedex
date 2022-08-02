import style from './Dados.module.css'

function Dados({titulo, valor}) {
  return (
    <div className={style.container}>
      <div className={style.titulo}>
        <h1>{titulo}</h1>
        <div>
          <p>{valor}</p>
        </div>
      </div>
    </div>
  )
}

export default Dados