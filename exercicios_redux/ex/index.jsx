import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
//createStore é para criar o Store, que é o estado unico da aplicação
import { Provider } from 'react-redux'

import Field from './field'

const reducers = combineReducers({
    field: () => ({ value: 'Opa'})
})

ReactDOM.render(
    <Provider store={createStore(reducers)}> 
    <Field initialValue='Teste'/>
    </Provider>
    , document.getElementById('app')) 