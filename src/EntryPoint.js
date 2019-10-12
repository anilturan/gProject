import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Home from './Views/Home/index'
import gStore from './Configs/ReduxConfigs/index'

const store = gStore();

export default class EntryPoint extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        )
    }
}