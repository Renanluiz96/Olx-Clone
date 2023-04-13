import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'user',
    initialState: {
        email: ''
    },
    //Aqui dentro do reducers colocamos nossas actions
    reducers: {
        //Cria uma action , primeiro parametro é o state que seria o initialstate ou seja o estado inicial que comeca o estado.
        setEmail: (state, action) => {
            //A informação que eu mandar quando for usar esta função a action dela vai ser setar o email, com o novo conteudo digitado, enviando o como payload. Trocando o estado inicial para o digitado . Ex = setEmail('novoemail@email.com') , este novo email, ele vai jogar no payload, que o payload seta o novo valor do email.
            state.email = action.payload;
        }
    }
})

export const { setEmail } = slice.actions
export default slice.reducer