import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.footerContainer}>
      <p>Feito por <a href="https://github.com/vinicius-pereira-souza" target="_blank">Vinicius</a></p>
    </div>
  )
}

export default Footer