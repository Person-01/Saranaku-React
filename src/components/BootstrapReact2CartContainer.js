import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bootstrapchanger2.css';
import Consumer from './BoostrapReact2CartConsumer'
import Detail from './BootstrapReact2CartDetails.js'

class BootstrapReact2CartContainer extends Component{
    constructor(props){
        super(props)
        this.child = React.createRef()
    }
    handleEmptyConsumer = () => {
        this.child.current.emptyConsumerDetail();
    }
    render(){
        return(
            <div className="cart_container flex-grow-1 mb-3">
                <Consumer namaKonsumenHandler={this.props.namaKonsumenHandler} emailKonsumenHandler={this.props.emailKonsumenHandler} 
                    alamatPengirimanHandler={this.props.alamatPengirimanHandler} tipeTransaksiHandler={this.props.tipeTransaksiHandler}
                    ref={this.child}
                />
                <Detail cartItems={this.props.cartItems} decreaseItem={this.props.decreaseItem} addItem={this.props.addItem} deleteItem={this.props.deleteItem}/>
            </div>
        )
    }
}

export default BootstrapReact2CartContainer;