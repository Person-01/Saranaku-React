import React from 'react';
import './css/style.css';
import Features from "./features"


class Cart extends React.Component{
    constructor(){
      super()
      //store added items from modal.js and consumer details
      this.state = {
        items: [],
        namaKonsumen: "",
        emailKonsumen: "",
        alamatKonsumen: "",
        tipeTransaksi: "Kredit"
      }
      //bind function to class
      this.displayCart = this.displayCart.bind(this);
      this.closeCart = this.closeCart.bind(this);
      this.addHandler = this.addHandler.bind(this);
      this.reduceHandler = this.reduceHandler.bind(this);
      this.removeHandler = this.removeHandler.bind(this);
      this.namaKonsumenHandler = this.namaKonsumenHandler.bind(this);
      this.emailKonsumenHandler = this.emailKonsumenHandler.bind(this);
      this.alamatKonsumenHandler = this.alamatKonsumenHandler.bind(this);
      this.tipeTransaksiHandler = this.tipeTransaksiHandler.bind(this);
    }
    //set new value to this.state when user input new value 
    namaKonsumenHandler(event){
      this.setState({
        namaKonsumen: event.target.value 
      })
    }
    emailKonsumenHandler(event){
      this.setState({
        emailKonsumen: event.target.value
      })
    }
    alamatKonsumenHandler(event){
      this.setState({
        alamatKonsumen: event.target.value
      })
    }
    tipeTransaksiHandler(event){
      this.setState({
        tipeTransaksi: event.target.value
      })
    }
    //display items added from modal.js
    //if the item.data.qty not added yet, add .qty = 1 to store current quantity
    //if the item already existed, increment current quantity of the item by 1
    displayCart(fromModal){
      if(fromModal.data.qty === undefined){
        fromModal.data.qty = 1;
        this.setState({
          items: [...this.state.items, fromModal]
        })
      }else{
        fromModal.data.qty = fromModal.data.qty+1
        this.setState({
          items: [...this.state.items]   
        })
      }
    }
    //reset consumer details to "" or 0 when user uses "menutup transasi" feature in closetrans.js  
    closeCart(){
      this.setState({
        namaKonsumen: "",
        emailKonsumen: "",
        alamatKonsumen: ""
      }
      )
      this.state.items.map((item) => (
        (item.data.qty = item.data.qty-item.data.qty,
        this.setState({
          items: [...this.state.items]
        }))
      ))
    }
    //add current quantity of item by 1 when user add item quantity directly from cart 
    addHandler(item){
      item.data.qty = item.data.qty+1;
      this.setState({
        items: [...this.state.items]   
      })
    }
    //decrement by 1 current quantity of item when user reduce the item quantity directly from cart
    //if the item reduced to 0 quantity, item is removed from cart
    reduceHandler(item){
      if(item.data.qty === 0){
        //copy current state array (cart)
        var array1 = [...this.state.items]
        //get index of the item in the array
        var index = array1.indexOf(item.target.value)
        //remove the item
        array1.splice(index, 1);
        this.setState({
          items: array1
        })
      }else{
        //decrement by 1 quantity of item
        item.data.qty = item.data.qty-1;
        this.setState({
          items: [...this.state.items]   
        })
      }
    }
    //remove item from the cart by reducing the item quantity to 0
    //the cart doesn't display item if quantity of the item is below 0 (check code line in render() in cart.js)
    removeHandler(item){
      item.data.qty = item.data.qty-item.data.qty;
      this.setState({
        items: [...this.state.items]   
      })
    }
    render(){
      return(
        <div className="cart">
          <div className="container-items">
            <div className="container-info">
              <div className="container-left">
                <div className="container-nama-konsumen">
                  <label htmlFor="namakonsumen">Nama Konsumen</label>
                  <input value={this.state.namaKonsumen} onChange={this.namaKonsumenHandler} type="text" id="namakonsumen" name="namakonsumen" placeholder="Nama Konsumen"/>
                </div>
                <div className="container-transaksi">    
                  <label htmlFor="transaksi">Tipe Transaksi</label>
                  <select value={this.state.tipeTransaksi} onChange={this.tipeTransaksiHandler} id="transaksi" name="transaksi">
                      <option value="kredit">Kredit</option>
                      <option value="tunai">Tunai</option>
                  </select>
                </div>
              </div>
              <div className="container-right">
                  <div className="container-email-konsumen">
                      <label htmlFor="emailkonsumen">Email Konsumen</label>
                      <input value={this.state.emailKonsumen} onChange={this.emailKonsumenHandler} type="text" id="emailkonsumen" name="emailkonsumen" placeholder="Email Konsumen" />
                  </div>
                  <div className="container-alamat-konsumen">
                      <label htmlFor="alamatkonsumen">Alamat Konsumen</label>
                      <input value={this.state.alamatKonsumen} onChange={this.alamatKonsumenHandler} type="text" id="alamatkonsumen" name="alamatkonsumen" placeholder="Alamat Konsumen" />
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
              {
                //iterate through each element in this.state.items array and display details of each element
                this.state.items.map((item, index) => (
                  <tr key={index} className={item.data.qty>0? '':'d-none'}>
                    <td>{item.data.stockItemId}</td>
                    <td>{item.data.stockItemTitle}</td>
                    <td>Rp. {item.data.sellPrice}</td>
                    <td>{item.data.qty}</td>
                    <td>Rp. {item.data.sellPrice*item.data.qty}</td>
                    <td>
                      <button className="bg-white" onClick={()=>this.addHandler(item)}>add</button>
                      <button className="bg-white" onClick={()=>this.reduceHandler(item)}>reduce</button>
                      <button className="bg-red text-white" onClick={()=>this.removeHandler(item)}>remove</button>
                    </td>
                  </tr>
                ))
              }
                </tbody>
              </table> 
              <div style={{height: "10px"}}></div>
            </div>
          </div>
        <div>
      </div>
      {
        //display features button, send references of cart.js methods, and pass props to features.js
      }
      <Features cartHandler={this.displayCart} cartCloser={this.closeCart} cartEnderProps={this.state.items} nama={this.state.namaKonsumen} email={this.state.emailKonsumen} alamat={this.state.alamatKonsumen} tipe={this.state.tipeTransaksi}/>
    </div>
      )
    }
  }

  export default Cart;