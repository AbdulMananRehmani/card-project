import {createStore} from 'redux'
import rootreducer from './reducer/rootReducer'

const store=createStore(
    rootreducer
)

export default store
