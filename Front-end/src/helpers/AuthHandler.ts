//Arquivo de autenticação de usuario ligado na tela, então vai usar a lib js-cookie para colocar um cookie no usuario e fazer a verificação do estado do mesmo , vendo se ele esta logado no sistema , ira deslogar o usuario , e logar o usuario .

//Importando cookies da lib
import Cookies from "js-cookie";

// Fazendo uma função para verificar se o usuario esta na tela. cria uma variavel chamada token usando o get para pegar o token , e no final ele retorna true  ou false. E com o retorno, onde for usar , voce cria uma variavel e nela salva o boolean true ou false, então la onde voce quer usar voce pode passar o retorno desta função para uma variavel ,  se tiver o token tiver true , ele mostra algumas coisas na tela, se o token for false ele mostrara outras coisas na tela, dependendo do true ou false que esta função retornar.
export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
}