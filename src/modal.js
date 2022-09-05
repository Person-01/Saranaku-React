import React, { useState } from 'react';
import './css/style.css';
import Data from "./json/data.json"

function Modal({ closeModal, featureHandler}){
    //store input from search box (modal.js) in items useState
    const [items, setItems] = useState("");   
    //store all items from "./json/data.json" in var DataObjects
    var DataObjects = Data.data[0].stockItemResponses;
    //handle input changes (searchbox)
    const handleChange = (e) => {
      e.preventDefault();
      setItems(e.target.value);
    };
    //if input in search box length > 0 letter
    if(items.length>0){
      //iterate through items from json
      DataObjects = DataObjects.filter((i) => {
        //turn item names and search input text to lowercase letters
        //if item names contain input letters then return matched items
        return i.stockItemTitle.toLowerCase().match(items.toLowerCase());
      })
    }
    return(
      <div className="modal-background">
        <h2>Tambahkan Barang ke Keranjang</h2>
        <input type="text" onChange={handleChange} value={items} id="emailkonsumen" name="emailkonsumen" placeholder="Cari Nama Barang..." />
        <div className="modal-add-table">
          <table>
            <tbody>
              <tr>
                <th>Nama Barang</th>
                <th>Harga</th>
                <th>Stok Tersisa</th>
                <th>Aksi</th>
              </tr>
                {
                //iterate through DataObjects array and show each of element's detail
                DataObjects.map(data => {
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
                        <button onClick={() => featureHandler({data})}>+ Tambahkan ke Keranjang</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        {
          //close modal
        }
        <button onClick={() => closeModal(false)} style={{color: "white", backgroundColor: "black", width: "100%", marginTop: "8px"}}>Tutup</button>
      </div>
    );
  }

  export default Modal;