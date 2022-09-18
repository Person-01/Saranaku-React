import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bootstrapchanger2.css';
import Header from './BootstrapReact2Header'
import Cart from './BootstrapReact2CartContainer'
import Features from './BootstrapReact2Features'

class BootstrapReact2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            cartDetail: [],
            namaKonsumen: '',
            emailKonsumen: '',
            alamatPengiriman: '',
            tipeTransaksi: 'pilih',
        }
        this.namaKonsumenHandler = this.namaKonsumenHandler.bind(this);
        this.emailKonsumenHandler = this.emailKonsumenHandler.bind(this);
        this.alamatPengirimanHandler = this.alamatPengirimanHandler.bind(this);
        this.tipeTransaksiHandler = this.tipeTransaksiHandler.bind(this);
        this.cartDetailHandler = this.cartDetailHandler.bind(this);
        this.closeCartDetail = this.closeCartDetail.bind(this);
        this.addItem = this.addItem.bind(this);
        this.decreaseItem = this.decreaseItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.child = React.createRef();
    }
    namaKonsumenHandler(props){
        this.setState({
            namaKonsumen: props
        })
    }
    emailKonsumenHandler(props){
        this.setState({
            emailKonsumen: props
        })
    }
    alamatPengirimanHandler(props){
        this.setState({
            alamatPengiriman: props
        })
    }
    tipeTransaksiHandler(props){
        this.setState({
            tipeTransaksi: props
        })
    }
    closeConsumerHandler(props){
        this.setState({
            closeConsumer: props
        })
    }
    cartDetailHandler(props){
        let exist = false;
        let items = [...this.state.cartDetail];
        let item = props;
        for(let i = 0; i<=this.state.cartDetail.length-1; i++){
            if(this.state.cartDetail[i].stockItemTitle === props.stockItemTitle){
                items = [...this.state.cartDetail]
                item = {...items[i]}
                item.quantity = item.quantity + 1;
                console.log(item.quantity)
                items[i] = item;
                exist = true;
                console.log(items)
            }
        }
        this.setState({
            cartDetail: items
        });
        if(exist){
            return;
        }
        item = props;
        item.quantity = 1;
        this.setState({
            cartDetail: [...this.state.cartDetail, item]
        })
    }
    addItem(props){
        let index = 0;
        console.log(`increase: ${props.stockItemTitle}`)
        for(let i = 0; i<=this.state.cartDetail.length-1; i++){
            if(this.state.cartDetail[i].stockItemTitle === props.stockItemTitle){
                index = i;
                console.log(`index-increased: ${this.state.cartDetail[i].stockItemTitle}`)
            }
        }
        let temp = [...this.state.cartDetail];
        temp[index].quantity = temp[index].quantity+1;
        this.setState({
            cartDetail: temp
        })
    }
    decreaseItem(props){
        let index = 0;
        console.log(`decrease ${props.stockItemTitle}`)
        for(let i = 0; i<=this.state.cartDetail.length-1; i++){
            if(this.state.cartDetail[i].stockItemTitle === props.stockItemTitle){
                index = i;
            }
        }
        console.log(`index-decreased: ${this.state.cartDetail[index].stockItemTitle}`)
        let temp = [...this.state.cartDetail];
        temp[index].quantity = temp[index].quantity-1;
        this.setState({
            cartDetail: temp
        })
    }
    deleteItem(props){
        let index = 0;
        for(let i = 0; i<=this.state.cartDetail.length-1; i++){
            if(this.state.cartDetail[i].stockItemTitle === props.stockItemTitle){
                index = i;
            }
        }
        let temp = [...this.state.cartDetail];
        temp[index].quantity = temp[index].quantity-temp[index].quantity;
        this.setState({
            cartDetail: temp
        })
    }
    closeCartDetail(){
        this.setState({
            cartDetail: [] 
        })
    }
    emptyConsumerDetail = () =>{
        this.setState({
            cartDetail: [],
            namaKonsumen: '',
            emailKonsumen: '',
            alamatPengiriman: '',
            tipeTransaksi: 'pilih',
        })
    }
    handleEmptyConsumer = () => {
        this.child.current.handleEmptyConsumer();
    }
    render(){
        return(
            <div className="bg-dark" style={{minHeight: "100vh"}}>
                <Header />
                <div className="d-flex flex-wrap">
                    <Cart cartItems={this.state.cartDetail} ref={this.child}
                        addItem={this.addItem}  decreaseItem={this.decreaseItem} 
                        deleteItem={this.deleteItem} namaKonsumenHandler={this.namaKonsumenHandler} 
                        emailKonsumenHandler={this.emailKonsumenHandler} alamatPengirimanHandler={this.alamatPengirimanHandler} 
                        tipeTransaksiHandler={this.tipeTransaksiHandler} closeConsumerHandler={this.closeConsumerHandler}
                    />
                    <Features cartItems={this.state.cartDetail}  cartDetailHandler={this.cartDetailHandler} 
                        closeCartDetail={this.closeCartDetail} namaKonsumen={this.state.namaKonsumen}
                        emailKonsumen={this.state.emailKonsumen} alamatPengiriman={this.state.alamatPengiriman}
                        tipeTransaksi={this.state.tipeTransaksi} handleEmptyConsumer={this.handleEmptyConsumer}
                        emptyConsumerDetail={this.emptyConsumerDetail}
                    />
                </div>
            </div>
        )
    }
}

export default BootstrapReact2;