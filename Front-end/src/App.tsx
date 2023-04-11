import './App.css'
import { connect } from 'react-redux'
import { MainRoutes } from './routes/routes';

const mapStateToProps = (state:any) => {
  return {user:state.user};
}

const mapDispatchToProps = (dispatch:any) => {
  return {};
}

const App = (props:any) => {
  return (
    <div>
      <h1>Titulo da pagina</h1>
      <MainRoutes />
    </div>
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(App);


