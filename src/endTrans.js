import React from 'react';
import './css/style.css';

function EndTransaksi({ closeEndTransaksi, cartEnderProps, transHandler, nama, email, alamat, tipe }){
    let total = 0;
    //iterate through items from cart
    //calculate the total prices of the items added in cart
    cartEnderProps.filter(item => item.data.qty > 0).map((filteredItem) => (
    total = total+(filteredItem.data.sellPrice*filteredItem.data.qty)
    ))
    //check if consumer details are filled in the input (cart.js)
    let namaCheck = (nama==="")? "Nama harus diisi":""
    let emailCheck = (email==="")? "Email harus diisi":""
    let alamatCheck = (alamat==="")? "Alamat harus diisi":""
    //check if email is valid
    let emailCheck2 = (String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))? "":"Email salah dan perlu diperbaiki";
    //check if there's at least an item in the cart
    let itemCheck = false;
    return(
      <div className="modal-transaksi-background">
        <h2>Menyelesaikan Transaksi</h2>
        <div className="container-display">
            <table>
                <tbody>
                    <tr>
                    <th>No</th>
                    <th>Nama Barang</th>
                    <th>Harga</th>
                    <th>Kuantitas</th>
                    <th>Total</th>
                    </tr>
                    {
                        //iterate though items from the cart
                        //show item's detail if the item's quantity added in the cart > 0
                        cartEnderProps.filter(item => item.data.qty > 0).map((filteredItem, index) => (
                            <tr key={index} className={filteredItem.data.qty>0? '':'d-none'}>
                                {itemCheck = true}
                                <td>{index+1}</td>
                                <td>{filteredItem.data.stockItemTitle}</td>
                                <td>Rp. {filteredItem.data.sellPrice}</td>
                                <td>{filteredItem.data.qty}</td>
                                <td>Rp. {filteredItem.data.sellPrice*filteredItem.data.qty}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td colSpan="3">Total Harga</td>
                        <td colSpan="2">Rp. {total}</td>
                    </tr>
                </tbody>
            </table>  
            {
                <div>
                    {
                        //shows message if consumer's detail is empty
                        //shows message if email is invalid
                        //shows message if item is not added yet into the cart / quantity of item added into the cart === 0
                    }
                    <p style={{color: "red"}}>{namaCheck}</p>
                    <p style={{color: "red"}}>{emailCheck}</p>
                    <p style={{color: "red"}} >{emailCheck2}</p>
                    <p style={{color: "red"}}>{alamatCheck}</p>
                    <p style={{color: "red"}}>{itemCheck? "":"Barang yang dipesan tidak boleh kosong, silakan menambahkan barang ke keranjang"}</p>
                </div>
            }
            {
                //empty consumer's details
                //empty cart by reducing all item's quantity in cart to 0
                //close endTrans.js modal
            }   
            <button onClick={() => {transHandler();closeEndTransaksi()}}style={{color: "white", backgroundColor: "green", width: "100%", marginTop: "8px"}}>Menyelesaikan Transaksi</button>
            {
                //close endTrans.js modal
            }
            <button onClick={() => closeEndTransaksi(false)} style={{color: "white", backgroundColor: "black", width: "100%", marginTop: "8px"}}>Batal</button>
        </div>
      </div>
    );
  }

  export default EndTransaksi;