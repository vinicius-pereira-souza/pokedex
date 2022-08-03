import style from './Footer.module.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={style.footerContainer}>
      <p>Feito pro Vinicius <Link to="https://github.com/vinicius-pereira-souza">Link para o GitHub</Link></p>
    </div>
  )
}

export default Footer