import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bootstrapchanger2.css';
import shoppingcart from '../images/shopping-cart.png'

class BootstrapReact2CloseModal extends Component{
    buttonAble = () => {
        let valid = true;

        if(this.props.namaKonsumen === ''){
            valid = false;
        }
        if(this.props.alamatPengiriman === ''){
            valid = false;
        }
        if((!String(this.props.emailKonsumen).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))){
            valid = false;
        }
        if(this.props.tipeTransaksi === 'pilih'){
            valid = false;
        }
        return valid;
    }
    consumerValidator = () => {
        let valid = true;
        let notifContainer = [];

        if(this.props.namaKonsumen === ''){
            valid = false;
            notifContainer.push("Nama harus diisi!");
        }
        if(this.props.alamatPengiriman === ''){
            valid = false;
            notifContainer.push("alamat harus diisi!");
        }
        if((!String(this.props.emailKonsumen).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))){
            valid = false;
            notifContainer.push('Email konsumen tidak valid. Harus berformat "alamat@domain.com"!');
        }
        if(this.props.tipeTransaksi === 'pilih'){
            valid = false;
            notifContainer.push('Tipe transaksi harus dipilih!');
        }
        if(valid === true){
            return true;
        }
        return(
            <div className="consumerDetail_validation">
                <h5>Tidak Dapat Menyelesaikan Transaksi</h5>
                <ul>
                {notifContainer.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
                </ul>
            </div>
        )
    }
    render(){
        let total = 0;
        (this.props.cartItems.filter((item) => item.quantity > 0).map( (filteredItem, index) => (
            total = total + (filteredItem.quantity*filteredItem.sellPrice)
        )))
        return ReactDOM.createPortal(
            <div>
                <div className="modal_background">
                </div>
                <div className="end_modal_background d-flex justify-content-center align-items-center position-absolute">
                    <div className="end_modal_container pt-4 ps-4">
                        <h4 style={{fontWeight: '600'}}>Menyelesaikan Transaksi</h4>
                        <br></br>
                        <div>
                            <div className="table-responsive" style={{height: "200px"}}>
                                <table className="table table-bordered" style={{overflow: "auto"}}>
                                    <thead className="table-secondary">
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Nama Barang</th>
                                            <th scope="col">Harga</th>
                                            <th scope="col">Kuantitas</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                    this.props.cartItems.length > 0 ?
                                    (this.props.cartItems.filter((item) => item.quantity > 0).map( (filteredItem, index) => (
                                        <tr key={filteredItem.stockItemId}>
                                            <td>{index+1}</td>
                                            <td>{filteredItem.stockItemTitle}</td>
                                            <td>{filteredItem.sellPrice}</td>
                                            <td>{filteredItem.quantity}</td>
                                            <td>Rp. {filteredItem.sellPrice*filteredItem.quantity}</td>
                                        </tr>
                                    ))) : (
                                        <tr>
                                            <td colSpan="5" className="text-center">
                                            {
                                                <h2>
                                                    <img src={shoppingcart} alt="shopping-cart" className="position-relative" style={{width: "30px", bottom: "3px", right: "10px"}}/>
                                                    Keranjang Kosong
                                                </h2>
                                            }
                                            </td>
                                        </tr>
                                    )
                                    }   
                                        <tr className="table-secondary">
                                            <td colSpan="2" className="text-start">
                                                <h5>Total Harga</h5>
                                            </td>
                                            <td colSpan="3" className="text-end">
                                                <h5 className="position-relative" style={{marginRight: "40px"}}>Rp. {total}</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {this.consumerValidator()}
                        <div className="d-flex justify-content-end position-relative">
                            <button className="btn btn-dark" onClick={()=>this.props.endModalHandler(false)}>Tutup</button>
                            <button className={this.buttonAble()? "btn btn-success ms-2":'btn btn-success ms-2 disabled'} 
                                onClick={()=>{this.props.emptyConsumerDetail();this.props.handleEmptyConsumer();
                                this.props.closeCartDetail(); this.props.endModalHandler(false);}}
                                >Menyelesaikan Transaksi</button>
                        </div>
                    </div>
                </div>
            </div>,
            document.getElementById('portal-root')
        )
    }
}

export default BootstrapReact2CloseModal;