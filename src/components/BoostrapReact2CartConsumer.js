import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bootstrapchanger2.css';

class BootstrapReact2CartConsumer extends Component{
    constructor(props){
        super(props)
        this.state = {
            namaKonsumen: '',
            emailKonsumen: '',
            alamatPengiriman: '',
            tipeTransaksi: 'pilih'
        }
        this.namaKonsumenHandler = this.namaKonsumenHandler.bind(this);
        this.alamatPengirimanHandler = this.alamatPengirimanHandler.bind(this);
        this.tipeTransaksiHandler = this.tipeTransaksiHandler.bind(this);
        this.emptyConsumerDetail = this.emptyConsumerDetail.bind(this);
    }
    namaKonsumenHandler(e){
        this.setState({
            namaKonsumen: e.target.value
        })
    }
    emailKonsumenHandler = (e) =>{
        this.setState({
            emailKonsumen: e.target.value
        })
    }
    alamatPengirimanHandler(e){
        this.setState({
            alamatPengiriman: e.target.value
        })
    }
    tipeTransaksiHandler(e){
        this.setState({
            tipeTransaksi: e.target.value
        })
    }
    emptyConsumerDetail(){
        this.setState({
            namaKonsumen: '',
            emailKonsumen: '',
            alamatPengiriman: '',
            tipeTransaksi: 'pilih'
        })
    }
    render(){
        return(
            <div className="d-flex flex-wrap">
                <div className="ms-3 me-5 py-3 d-flex flex-column">
                    <div className="mb-3">
                        <label htmlFor="namaKonsumen" className="form-label me-3">Nama Konsumen</label>
                        <input type="text" id="namaKonsumen" name="namaKonsumen" value={this.state.namaKonsumen} onChange={(e)=>{this.namaKonsumenHandler(e);this.props.namaKonsumenHandler(e.target.value)}} placeholder="Nama Konsumen"/>
                    </div>
                    <div>
                    <div className="input-group">
                        <label style={{marginRight: "40px"}} htmlFor="tipeTransaksi">Tipe Transaksi</label>
                        <select id="tipeTransaksi" name="tipeTransaksi" className="select-tipeTransaksi" value={this.state.tipeTransaksi} onChange={(e)=>{this.tipeTransaksiHandler(e);this.props.tipeTransaksiHandler(e.target.value)}} style={{background: "none", border: "1px solid gray", width: "208px"}}>
                            <option value="pilih">Pilih Tipe Transaksi...</option>
                            <option value="tunai">Tunai</option>
                            <option value="kredit">Kredit</option>
                        </select>
                    </div>

                    </div>
                </div>
                <div className="ms-3 py-3 d-flex flex-column">
                    <div className="mb-3">
                        <label htmlFor="emailKonsumen" className="form-label" style={{marginRight: "32px"}}>Email Konsumen</label>
                        <input type="email" id="emailKonsumen" name="emailKonsumen" value={this.state.emailKonsumen} onChange={(e)=>{this.emailKonsumenHandler(e);this.props.emailKonsumenHandler(e.target.value)}} placeholder="Email Konsumen"/>
                    </div>
                    <div>
                        <label htmlFor="alamatPengiriman" className="form-label me-3">Alamat Pengiriman</label>
                        <input type="text" id="alamatPengiriman" name="alamatPengiriman" value={this.state.alamatPengiriman} onChange={(e)=>{this.alamatPengirimanHandler(e);this.props.alamatPengirimanHandler(e.target.value)}} placeholder="Alamat Pengiriman"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BootstrapReact2CartConsumer;