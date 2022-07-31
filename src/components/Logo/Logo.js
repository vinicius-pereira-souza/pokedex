import logo from '../../img/pokedex.svg'
import style from './Logo.module.css'
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className={style.logo}>
      <Link to="/">
        <img src={logo} alt="imagem do logo" />
      </Link>
    </div>
  )
}

export default Logo