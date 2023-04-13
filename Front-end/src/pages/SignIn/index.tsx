import { PageContainer, PageTitle } from "../../components/MainComponents";
import { PageArea } from "./styled";

const SignIn = () => {
  return (
    <PageContainer>
        <PageTitle>Login</PageTitle>
        <PageArea>
            <form>
                <label className="area">
                    <div className="area--title">E-mail</div>
                    <div className="area--input">
                        <input type="email" />
                    </div>
                </label>
                <label className="area">
                    <div className="area--title">Senha</div>
                    <div className="area--input">
                        <input type="password" />
                    </div>
                </label>
                <label className="area">
                    <div className="area--title">Lembrar senha</div>
                    <div className="area--input">
                        <input type="checkbox"  className="check"/>
                    </div>
                </label>
                <label className="area">
                    <div className="area--title"></div>
                    <div className="area--input">
                        <button>Fazer Login</button>
                    </div>
                </label>
            </form>
        </PageArea>
    </PageContainer>
  )
}

export default SignIn;