import style from './Botao.module.css'

function Botao({text, acao}) {
  return <button className={style.btn} onClick={acao}>{text}</button>
}

export default Botao