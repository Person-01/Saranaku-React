import React, { useState } from 'react';
import './css/style.css';
import Data from "./json/data.json"

console.log();
console.log(Data.data[0].stockItemResponses.length)
function App() {
  return (
    <div>
      <Header />
      <Cart />
    </div>
  );
}

function Header(){
  return(
    <div>
      <div className="header-1">
          <h1 className="title">Saranaku Cashier</h1>
      </div>
      <div className="header-2">
          {DisplayDates()}
      </div>
    </div>
  ) 
}
function DisplayDates(){
  let time = new Date().toLocaleString("id-ID");
  const [currentTime, setCurrentTime] = useState(time);
  
  function updateTime(){
    let time = new Date().toLocaleString("id-ID");
    setCurrentTime(time);
  }
  
  setInterval(updateTime, 1000);
  // setInterval(updateTime, 1000);
  
  var dateObj = new Date();
  var dateObj2 = new Date().toLocaleString("id-ID");
  var todayDate = dateObj.getDate()+'/'+(dateObj.getMonth()+1)+'/'+dateObj.getFullYear();
  var stringDate = dateObj.toDateString();
  var displayTime = dateObj.getHours()+':'+dateObj.getMinutes()+':'+dateObj.getSeconds();
  return(
    <div>
      {currentTime}
    </div>
  )
}
function Cart(){
  return(
    <div className="cart">
      <div className="container-items">
        <div className="container-info">
          <div className="container-left">
            <div className="container-nama-konsumen">
              <label htmlFor="namakonsumen">Nama Konsumen</label>
              <input type="text" id="namakonsumen" name="namakonsumen" placeholder="Nama Konsumen"/>
            </div>
            <div className="container-transaksi">    
              <label htmlFor="transaksi">Tipe Transaksi</label>
              <select id="transaksi" name="transaksi">
                  <option value="tunai">Tunai</option>
                  <option value="kredit">Kredit</option>
              </select>
            </div>
          </div>
          <div className="container-right">
              <div className="container-email-konsumen">
                  <label htmlFor="emailkonsumen">Email Konsumen</label>
                  <input type="text" id="emailkonsumen" name="emailkonsumen" placeholder="Email Konsumen" />
              </div>
              <div className="container-alamat-konsumen">
                  <label htmlFor="alamatkonsumen">Alamat Konsumen</label>
                  <input type="text" id="alamatkonsumen" name="alamatkonsumen" placeholder="Alamat Konsumen" />
              </div>
          </div>
        </div>
      <div className="container-display">
        <table>
          <tbody>
            <tr>
              <th>Kode Barang</th>
              <th>Nama Barang</th>
              <th>Harga</th>
              <th>Kuantitas</th>
              <th>Subtotal</th>
              <th>Aksi</th>
            </tr>
          </tbody>
        </table> 
      </div>
      </div>
      <div>
      </div>
      <Features />
    </div>
  )
}

function Features(){
  const [openModal, setOpenModal] = useState(false)

  return(
      <div className="features">
        <button className="add" onClick={() => {setOpenModal(true);}}>
            Menambahkan Barang ke Keranjang
        </button>
        <button className="close">
            Tutup Transaksi
        </button>
        <button className="complete">
            Menyelesaikan Transaksi
        </button>
        <button className="access">
            Beri Akses Kasir kepada Staff
        </button>
        <button className="history">
            Transaksi Hari Ini
        </button>
      {openModal && <Modal closeModal={setOpenModal} />}
      </div>
  )
}

function Modal({ closeModal }){
  var count = 0;
  var datas = Data.data[0].stockItemResponses[count];
  console.log(datas);
  return(
    <div className="modal-background">
      <h2>Tambahkan Barang ke Keranjang</h2>
      <input type="text" id="emailkonsumen" name="emailkonsumen" placeholder="Cari Nama Barang..." />
      <table>
        <tbody>
          <tr>
            <th>Nama Barang</th>
            <th>Harga</th>
            <th>Stok Tersisa</th>
            <th>Aksi</th>
          </tr>
            {Data.data[0].stockItemResponses.slice(0, 10).map(data => {
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
                    <button>+ Tambahkan ke Keranjang</button>
                  </td>
                </tr>
              )
            })
            }
        </tbody>
      </table>
      <button class="close-button" onClick={() => closeModal(false)} style={{color: "white", backgroundColor: "black", width: "100px", position: "relative", left: "90%"}}>Tutup</button>
    </div>
  );
}

export default App;
