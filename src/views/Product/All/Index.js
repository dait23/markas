import React, { Component } from 'react';
import Produk from '../../Home/Produk';
import Proses from '../../Home/Proses';
import Help from '../../Home/Help';


class Product extends Component {

  render() {
  		
    return (
    <div>
   
    <Produk />
    <Proses />
    <Help />
 </div>
    );
  }
}



export default Product

