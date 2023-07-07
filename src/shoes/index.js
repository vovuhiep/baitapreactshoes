import React, { Component } from 'react'
import Danhsachsanpham from './danhsachsanpham'
import data from './data.json'

export default class Shoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listShoes: data,
            shoes: data[0],
        }
    }

    handleDetailShoes = (shoes) => {
        this.setState({ shoes })
    }
    
    render() {
        return (
            <div>
                <h3 className="title"  style={{textAlign:'center', margin:'30px 40px'}}>Bài tập giỏ hàng giày</h3>

                <div className='container'>
                    <Danhsachsanpham 
                        listShoes={this.state.listShoes} 
                        getDetailShoes = {this.handleDetailShoes}
                    />
                    <div className="row">
                        <div className="col-sm-5">
                            <img className="img-fluid" src={this.state.shoes.image} alt="" />
                        </div>
                        <div className="col-sm-7">
                            <h3 style={{textAlign:'center', margin:'20px'}}>Thông số chi tiết</h3>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Price</td>
                                        <td>{this.state.shoes.price} $</td>
                                    </tr>
                                    <tr>
                                        <td>Quanlity</td>
                                        <td>{this.state.shoes.quantity}</td>
                                    </tr>
                                    <tr>
                                        <td>Description</td>
                                        <td>{this.state.shoes.description}</td>
                                    </tr>
                                    <tr>
                                        <td>Short Description</td>
                                        <td>{this.state.shoes.shortDescription}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
