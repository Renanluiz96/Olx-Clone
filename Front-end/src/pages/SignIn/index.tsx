import { useState } from "react";
import { PageContainer, PageTitle, ErrorMessage} from "../../components/MainComponents";
import { PageArea } from "./styled";
import { doLogin } from "../../helpers/AuthHandler";
import useApi from "../../helpers/OlxApi";

const SignIn = () => {

    const api = useApi()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberPassword, setRememberPassword] = useState< boolean>(false)
    const [ disabled, setDisabled] = useState<boolean>(false)
    const [error , setError] = useState<string>('')

    //Função que sera acionada ao envio do formulario.
    const handleSubmit = async (e: any) => {
        //Prevenir o comportamento padrão de um formulario
        e.preventDefault()
        // Setar todos os campos de input como disabled true pra congelar os campos.
        setDisabled(true)

        //Agora faz a consulta de login no hook que voce crio da api.
        const json = await api.login(email, password);

        if(json.error) {
            setError(json.error)
        } else {
            //Se caso vir o token , então executa uma função que vai fazer o login e voce manda o token que vai vir la do webservice de login e o remember password
            doLogin(json.token, rememberPassword) //Esse processo ele vai salvar o cookie. 

            //Depois de pegar os dados vai dar uma atualizada na pagina, mandando o usuario para a pagina inicial.
            window.location.href = '/';

        }

    }

  return (
    <PageContainer>
        <PageTitle>Login</PageTitle>
        <PageArea>
            {error && 
               <ErrorMessage>{error}</ErrorMessage>
            }

            <form onSubmit={handleSubmit}>
                <label className="area">
                    <div className="area--title">E-mail</div>
                    <div className="area--input">
                        <input 
                           type="email" 
                           disabled={disabled}
                           value={email}
                           onChange={e=>setEmail(e.target.value)}
                           required
                        />
                    </div>
                </label>
                <label className="area">
                    <div className="area--title">Senha</div>
                    <div className="area--input">
                        <input 
                           type="password" 
                           disabled={disabled}
                           value={password}
                           onChange={e=>setPassword(e.target.value)}
                           required
                        />
                    </div>
                </label>
                <label className="area">
                    <div className="area--title">Lembrar senha</div>
                    <div className="area--input">
                        <input 
                           type="checkbox"  
                           className="check" 
                           disabled={disabled}
                           checked={rememberPassword}
                           onChange={()=>setRememberPassword(!rememberPassword)}
                        />
                    </div>
                </label>
                <label className="area">
                    <div className="area--title"></div>
                    <div className="area--input">
                        <button disabled={disabled}>Fazer Login</button>
                    </div>
                </label>
            </form>
        </PageArea>
    </PageContainer>
  )
}

export default SignIn;