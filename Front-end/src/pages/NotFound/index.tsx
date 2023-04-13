import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>Pagina não encontrada</h1>
        <Link to="/">
            Voltar para pagina inicial
        </Link>
    </div>
  )
}

export default NotFound