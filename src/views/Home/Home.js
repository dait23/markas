import React, { Component } from 'react';
import Slider from './Slider';
import Bar from './Bar';
import Produk from './Produk';
import Proses from './Proses';
import Why from './Why';
import Pers from './Pers';
import Blog from './Blog';
import Help from './Help';


class Home extends Component {
  render() {
    return (

    <div>
       <Slider />
       <Bar />
       <Produk />
       <Proses />
       <Why />
       <Pers />
       <Blog />
       <Help />
    </div>
    );
  }
}

export default Home;
