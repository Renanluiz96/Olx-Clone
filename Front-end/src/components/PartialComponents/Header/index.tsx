
import { Link } from 'react-router-dom'
import { HeaderArea } from './styled'

import { isLogged } from '../../../helpers/AuthHandler'

const Header = () => {

  //Criando uma variavel para verificar o estado se o usuario tiver logado ou não , usando a função para validação do token por cookies, e depender do retorno desta função se for true ou false , mostrarei ou alguns botões no header caso for true, e caso for false eu mostro outros.
  let logged = isLogged()

  return (
    <HeaderArea>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <span className="logo-1">O</span>
              <span className="logo-2">L</span>
              <span className="logo-3">X</span>
            </Link>
          </div>
          <nav>
            <ul>
              {logged &&
                <>
                  <li>
                    <Link to="/my-account">Minha Conta</Link>
                  </li>
                  <li>
                    <Link to="/logout">Sair</Link>
                  </li>
                  <li>
                    <Link to="/post-an-ad" className='button'>Poste um anúncio</Link>
                  </li>
                </>
              
              }

              {!logged &&
                <>
                  <li>
                    <Link to="/signin">Login</Link>
                  </li>
                  <li>
                    <Link to="signup">Cadastrar</Link>
                  </li>
                  <li>
                    <Link to="/signin" className='button'>Poste um anúncio</Link>
                  </li>
                </>
              }
              
              
            </ul>
          </nav>
        </div>
    </HeaderArea>
  )
}

export default Header