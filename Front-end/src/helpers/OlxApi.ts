// Criando um hook para fazer o uso da api de login onde quiser. 

//Cria um objeto que este objeto vai ter as funções  que vou precisar. Onde ja deixa pronto uma estrutura para ser usada pelo beck-end para fazer as consultas as api apenas por este objeto , sem alterar a estrutura no front-end, apenas alterando a estrutura deste objeto em si.
const OlxApi = {
    login: async () => {
        // Fazer consulta ao webservice

        return {} //Faz a consulta e retorna um objeto que seria um json.
    }
}

export default () => OlxApi; //Para poder exportar este objeto , tem que exportar como uma função que retorna um objeto, para poder usar como uma função em outros lugares.