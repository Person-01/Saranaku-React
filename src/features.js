import React, { useState } from 'react';
import './css/style.css';
import Modal from "./modal"
import CloseTrans from "./closetrans"
import EndTrans from "./endTrans"

function Features(props){
    //store props sent from cart.js
    const [openModal, setOpenModal] = useState(false)
    const [openTransaksi, setOpenTransaksi] = useState(false)
    const [openEndTransaksi, setOpenEndTransaksi] = useState(false)
    return(
        <div className="features">
          <button className="add" onClick={() => {setOpenModal(true)}}>
              Menambahkan Barang ke Keranjang
          </button>
          <button className="close" onClick={() => {setOpenTransaksi(true)}}>
              Tutup Transaksi
          </button>
          <button className="complete" onClick={() => {setOpenEndTransaksi(true)}}>
              Menyelesaikan Transaksi
          </button>
          <button className="access">
              Beri Akses Kasir kepada Staff
          </button>
          <button className="history">
              Transaksi Hari Ini
          </button>
        {
            //if openModal is true AND closeModal is true (setOpenModal hook) then open modal in modal.js and send props
            openModal && <Modal closeModal={setOpenModal} featureHandler={props.cartHandler}/>
        }
        {openTransaksi && <CloseTrans closeTransaksi={setOpenTransaksi} transHandler={props.cartCloser}/>}
        {openEndTransaksi && <EndTrans closeEndTransaksi={setOpenEndTransaksi} cartEnderProps={props.cartEnderProps} transHandler={props.cartCloser} nama={props.nama} email={props.email} alamat={props.alamat} tipe={props.tipe}/>}
        </div>
    )
  }

export default Features;