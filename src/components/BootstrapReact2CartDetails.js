import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bootstrapchanger2.css';
import shoppingcart from '../images/shopping-cart.png'

class BootstrapReact2CartDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            cartIsEmpty: true
        }
    }
    render(){
        return(
            <div>
                <div className="table-responsive">
                    <table className="table table-bordered" style={{overflow: "auto"}}>
                        <thead className="table-secondary">
                            <tr>
                                <th scope="col">Kode Barang</th>
                                <th scope="col">Nama Barang</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Kuantitas</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.cartItems.length > 0 ?
                            (this.props.cartItems.filter(item => item.quantity > 0).map( (filteredItem) => (
                                <tr key={filteredItem.stockItemId}>
                                    <td>{filteredItem.stockItemId}</td>
                                    <td>{filteredItem.stockItemTitle}</td>
                                    <td>Rp. {filteredItem.sellPrice}</td>
                                    <td>{filteredItem.quantity}</td>
                                    <td>Rp. {(filteredItem.sellPrice*filteredItem.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</td>
                                    <td>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-success" onClick={()=>this.props.addItem(filteredItem)}>Tambah</button>
                                        <button type="button" className="btn btn-warning" onClick={()=>this.props.decreaseItem(filteredItem)}>Kurang</button>
                                        <button type="button" className="btn btn-danger" onClick={()=>this.props.deleteItem(filteredItem)}>Hapus</button>
                                    </div>
                                    </td>
                                </tr>
                            ))) : (
                                <tr>
                                    <td colSpan="6" className="text-center">
                                    {
                                        <h2 className="position-relative" style={{top: "7px"}}>
                                            <img src={shoppingcart} alt="shopping-cart" className="position-relative" style={{width: "30px", bottom: "3px", right: "10px"}}/>
                                            Keranjang Kosong
                                        </h2>
                                    }
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default BootstrapReact2CartDetail;