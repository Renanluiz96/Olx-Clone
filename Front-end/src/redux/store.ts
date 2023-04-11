import { configureStore } from '@reduxjs/toolkit' 
import userReducer from './reducers/userReducer'

export const store = configureStore({
    //Dentro da configuração da minha store, crio o objeto chamado reducer, e dentro dele eu coloco todos os reducers que eu tiver criado
    reducer: {
        user: userReducer
    }
})
//Export o type que ele é a junção de todos os types de todos os reducers que eu tiver na minha store. Feito isso para que quando for pegar as informação dos reducers desta store, ele pega por este type.
export type RootState  = ReturnType<typeof store.getState>;