import React from 'react';
import './css/style.css';

function Transaksi({ closeTransaksi, transHandler}){
    return(
      <div className="modal-closetransaksi-background">
        <h2>Tutup Transaksi</h2>
        <p>Apakah anda yakin menutup transaksi ini?</p>
        {
          //empty cart's items by reducing all items quantity to 0 and close "menyelesaikan transaksi" modal (endTrans.js)
        }
        <button onClick={() => {transHandler(); closeTransaksi();}} style={{color: "white", backgroundColor: "red", width: "100%", marginTop: "8px"}}>Tutup Transaksi X</button>
        {
          //close "menyelesaikan transaksi" modal (endTrans.js)
        }
        <button onClick={() => closeTransaksi(false)} style={{color: "white", backgroundColor: "black", width: "100%", marginTop: "8px"}}>Batal</button>
      </div>
    );
  }

  export default Transaksi;