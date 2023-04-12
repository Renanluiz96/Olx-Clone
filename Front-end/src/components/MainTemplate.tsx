import '../App.css'

import { MainRoutes } from "../routes/routes";

import { Template } from "./MainComponents";
import Header from "./PartialComponents/Header";
import Footer from "./PartialComponents/Footer";

const MainTemplate = () => {
  return (
    <Template>
        <Header />
        <MainRoutes />
        <Footer />
    </Template>

  )
}

export default MainTemplate;