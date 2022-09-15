import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bootstrapchanger2.css';
import AddModal from './BootstrapReact2AddModal'
import CloseModal from './BootstrapReact2CloseModal'
import EndModal from './BootstrapReact2EndModal'
import addtocart from '../images/add-to-cart.png'
import handshake from '../images/hand-shake.png'
import trashcan from '../images/trash-can.png'
import keyicon from '../images/key.png'
import transfer from '../images/transfer.png'

class BootstrapReact2Features extends Component{
    constructor(props){
        super(props)
        this.state = {
            add: false,
            close: false,
            end: false
        }
        this.addModalHandler = this.addModalHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
        this.endModalHandler = this.endModalHandler.bind(this);
    }
    addModalHandler(props){
        this.setState({
            add: props
        })
    }
    closeModalHandler(props){
        this.setState({
            close: props
        })
    }
    endModalHandler(props){
        this.setState({
            end: props
        })
    }
    render(){
        return(
            <div className="features">
                <div className="d-grid gap-3 mx-2">
                    <button className="btn btn-primary" onClick={() => this.addModalHandler(true)} style={{color: 'white'}} type="button"><img src={addtocart} alt="addtocart" className="position-relative" style={{width: "20px", bottom: "2px", right: "5px", filter: "invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%)"} }/>Menambahkan Barang ke Keranjang</button>
                    <button className="btn btn-danger" onClick={() => this.closeModalHandler(true)} type="button"><img src={trashcan} alt="trashcan" className="position-relative" style={{width: "20px", bottom: "2px", right: "5px"} }/>Tutup Transaksi</button>
                    <button className="btn btn-success" onClick={() => this.endModalHandler(true)} type="button"><img src={handshake} alt="handshake" className="position-relative" style={{width: "20px", bottom: "2px", right: "5px"} }/>Menyelesaikan Transaksi</button>
                    <button className="btn btn-warning disabled" style={{color: 'white'}} type="button"><img src={keyicon} alt="keyicon" className="position-relative" style={{width: "20px", bottom: "2px", right: "5px"} }/>Beri Akses Kasir kepada Staff</button>
                    <button className="btn btn-info disabled" style={{color: 'white'}} type="button"><img src={transfer} alt="transfer" className="position-relative" style={{width: "20px", bottom: "2px", right: "5px"} }/>Transaksi Hari Ini</button>
                </div>
                {this.state.add && <AddModal addModalHandler={this.addModalHandler} cartDetailHandler={this.props.cartDetailHandler} />}
                {this.state.close && <CloseModal closeModalHandler={this.closeModalHandler} closeCartDetail={this.props.closeCartDetail} 
                    handleEmptyConsumer={this.props.handleEmptyConsumer} emptyConsumerDetail={this.props.emptyConsumerDetail}
                />}
                {this.state.end && <EndModal cartItems={this.props.cartItems} endModalHandler={this.endModalHandler} 
                    closeCartDetail={this.props.closeCartDetail} namaKonsumen={this.props.namaKonsumen}
                    emailKonsumen={this.props.emailKonsumen} alamatPengiriman={this.props.alamatPengiriman}
                    tipeTransaksi={this.props.tipeTransaksi} handleEmptyConsumer={this.props.handleEmptyConsumer}
                    emptyConsumerDetail={this.props.emptyConsumerDetail}
                />
                }
            </div>
        )
    }
}

export default BootstrapReact2Features;