//Arquivo de autenticação de usuario ligado na tela, então vai usar a lib js-cookie para colocar um cookie no usuario e fazer a verificação do estado do mesmo , vendo se ele esta logado no sistema , ira deslogar o usuario , e logar o usuario .

//Importando cookies da lib
import Cookies from "js-cookie";

// Fazendo uma função para verificar se o usuario esta na tela. cria uma variavel chamada token usando o get para pegar o token , e no final ele retorna true  ou false. E com o retorno, onde for usar , voce cria uma variavel e nela salva o boolean true ou false, então la onde voce quer usar voce pode passar o retorno desta função para uma variavel ,  se tiver o token tiver true , ele mostra algumas coisas na tela, se o token for false ele mostrara outras coisas na tela, dependendo do true ou false que esta função retornar.
export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
}

//Fazer o login

export const doLogin = (token: any, rememberPassword = false) => {
    //Se tiver que mandar um cookie que não inspira assim que o usuario fechar a pagina
    if(rememberPassword) {
        //Seta o cookie por 999 dias 
        Cookies.set('token', token, {expires: 999})
    }else {
        //Aqui caso ele não setar por 999 dias, o cookie ira sumir na hora que o usuario fecha o navegador.
        Cookies.set('token', token);
    }
}