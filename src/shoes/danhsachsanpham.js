import React, { Component } from 'react'
import Sanpham from './sanpham';

export default class Danhsachsanpham extends Component {
    renderListShoes = () => {
        const { listShoes, getDetailShoes } = this.props;
        return listShoes.map((shoes) => {
            return <Sanpham
                    shoes={shoes}
                    getDetailShoes={getDetailShoes}
            />
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderListShoes()}
                </div>
            </div>
        )
    }
}
