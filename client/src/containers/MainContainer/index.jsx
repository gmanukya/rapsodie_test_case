import React, { Component } from 'react'

import Header from '../../components/Header'

/*
 * Container component for all routes to render the header
 */
class MainContainer extends Component {
    render() {
        return (
            <div className="flex flex-col">
                <Header />
                <div className="w-full">{this.props.children}</div>
            </div>
        )
    }
}

export default MainContainer
