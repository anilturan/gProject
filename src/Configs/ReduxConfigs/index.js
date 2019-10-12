import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../../Redux/RootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../../Redux/RootSaga'

export default () => {
    const middleWare = [];
    const sagaMiddleWare = createSagaMiddleware();
    middleWare.push(sagaMiddleWare);
    let store = createStore(rootReducer, applyMiddleware(...middleWare))
    sagaMiddleWare.run(rootSaga)
    return store
}