import React, { Component } from 'react'

export default class Sanpham extends Component {
    render() {
        const { shoes, getDetailShoes } = this.props;
        return (
            <div className="col-sm-4">
                <div className="card">
                    <img className="card-img-top" src={shoes.image} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{shoes.name}</h4>
                        <h3>{shoes.price} $</h3>
                        <button className="btn btn-dark" onClick={() => {
                            getDetailShoes(shoes);
                        }}>Chi tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
