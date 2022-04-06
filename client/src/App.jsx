import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { Component } from 'react'

import { ApolloProvider } from "@apollo/client";
import Artist from './containers/Artist'
import Home from './containers/Home'
import MainContainer from './containers/MainContainer'
import client from './ApolloClient'

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <MainContainer>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/artist/:artistId" element={<Artist />} />
                        </Routes>
                    </MainContainer>
                </BrowserRouter>
            </ApolloProvider>
        )
    }
}

export default App
