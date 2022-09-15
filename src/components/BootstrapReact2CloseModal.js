import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bootstrapchanger2.css';

class BootstrapReact2CloseModal extends Component{
    render(){
        return ReactDOM.createPortal(
            <div>
                <div className="modal_background">
                </div>
                <div className="close_modal_background d-flex justify-content-center align-items-center position-absolute">
                    <div className="close_modal_container pt-4 ps-4">
                        <h4 style={{fontWeight: '600'}}>Tutup Transaksi</h4>
                        <br></br>
                        <p>Apakah anda yakin menutup transaksi ini?</p>
                        <br></br>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-dark" onClick={()=>this.props.closeModalHandler(false)}>Batal</button>
                            <button className="btn btn-danger ms-2" onClick={()=>{this.props.closeCartDetail();this.props.closeModalHandler(false);
                                this.props.handleEmptyConsumer();this.props.emptyConsumerDetail();
                            }}>Tutup Transaksi</button>
                        </div>
                    </div>
                </div>
            </div>,
            document.getElementById('portal-root')
        )
    }
}

export default BootstrapReact2CloseModal;