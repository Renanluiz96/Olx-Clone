import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        Pagina inicial <br />
        <Link to="/sobre">
            Pagina Sobre
        </Link>
    </div>
  )
}
export default Home;