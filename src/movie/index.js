import React, { Component } from 'react'
import Seat from './seat'
import Header from './header'
import Show from './show'
import Footer from './footer'

export default class SeatMovie extends Component {
    render() {
        return (
            <div>
                <h1>Movie Seat Selection</h1>
                <div className='container'>
                    <div className="w3ls-reg">
                        <Header />
                        <Seat />
                        <Show/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
