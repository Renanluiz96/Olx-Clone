import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        Pagina inicial <br />
        <Link to="/sobre">
            Pagina Sobre
        </Link>
    </div>
  )
}
