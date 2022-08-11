import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.footerContainer}>
      <p>Feito por Vinicius <a href="https://github.com/vinicius-pereira-souza">Link para o GitHub</a></p>
    </div>
  )
}

export default Footer