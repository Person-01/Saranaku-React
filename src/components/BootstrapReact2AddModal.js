import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bootstrapchanger2.css';
import Data from '../json/data.json';

class BootstrapReact2AddModal extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchInput: '',
            products: {
                item : Data.data[0].stockItemResponses
            }
        }
        this.inputRef = React.createRef();
        this.inputHandler = this.inputHandler.bind(this);
    }
    componentDidMount(){
        this.inputRef.current.focus();
    }
    inputHandler(e){
        e.preventDefault();
        this.setState({
            searchInput: e.target.value
        })
    }
    render(){
        let temp = this.state.products;
        if(this.state.searchInput.length>0){
            //iterate through items from json
                temp.item =  temp.item.filter((i) => {
                    //turn item names and search input text to lowercase letters
                    //if item names contain input letters then return matched items
                    return i.stockItemTitle.toLowerCase().match(this.state.searchInput.toLowerCase());
                })
        }
        return ReactDOM.createPortal(
            <div>
                <div className="modal_background">
                </div>
                <div className="add_modal_background d-flex justify-content-center align-items-center position-absolute">
                    <div className="add_modal_container">
                        <h4 style={{fontWeight: "600"}}>Tambahkan Barang ke Keranjang</h4>
                        <input type="text" value={this.state.searchInput} ref={this.inputRef} onChange={this.inputHandler} />
                        <table className="table mt-2">
                            <thead className="table-secondary">
                                <tr>
                                    <th scope="col">Nama Barang</th>
                                    <th scope="col">Harga</th>
                                    <th scope="col">Stok Tersisa</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                        {
                            temp.item.map(data => {
                            return (
                                <tr  key={data.stockItemId}>
                                    <td>
                                        {data.stockItemTitle}
                                    </td>
                                    <td>
                                        Rp. {data.sellPrice}
                                    </td>
                                    <td>
                                        {data.stockItemCategoryResponse.currentQty} {data.stockItemCategoryResponse.metricType}
                                    </td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => this.props.cartDetailHandler(data)} >+ Tambahkan ke Keranjang</button>
                                    </td>
                                </tr>
                            )
                            })
                        }
                            </tbody>
                        </table>
                        <button className="btn btn-dark position-relative mb-2" onClick={() => this.props.addModalHandler(false)} style={{left: "88%"}}>Tutup</button>
                    </div>
                </div>
            </div>,
            document.getElementById('portal-root')
        )
    }
}

export default BootstrapReact2AddModal;