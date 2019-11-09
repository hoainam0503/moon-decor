import React, { Component } from 'react';
import * as img14 from '../item/image/img14.jpg';
import * as img15 from '../item/image/img15.jpg';
import * as img17 from '../item/image/img17.jpg';

class HomeImmerslide extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="page_container">
            <div id="immersive_slider">
              <div className="slide" data-blurred={img14}>
                <div className="content">
                  <h2><a href="http://www.bucketlistly.com" >BucketListly</a></h2>
                  <p>It’s never been easier to watch YouTube on the big screen
              Send your favorite YouTube videos from your Android phone or tablet to TV with the touch of a button. It’s easy. No wires, no setup, no nothing. Find out more here.</p>
                </div>
                <div className="image">
                  <a href="http://www.bucketlistly.com" >
                    <img src={img14} alt="Slider 1" />
                  </a>
                </div>
              </div>
              <div className="slide" data-blurred={img15}>
                <div className="content">
                  <h2>BucketListly Apps</h2>
                  <p>It’s never been easier to watch YouTube on the big screen
              Send your favorite YouTube videos from your Android phone or tablet to TV with the touch of a button. It’s easy. No wires, no setup, no nothing. Find out more here.</p>
                </div>
                <div className="image">
                  <img src={img15} alt="Slider 1" />
                </div>
              </div>
              <div className="slide" data-blurred={img17}>
                <div className="content">
                  <h2>The Pete Design</h2>
                  <p>It’s never been easier to watch YouTube on the big screen
              Send your favorite YouTube videos from your Android phone or tablet to TV with the touch of a button. It’s easy. No wires, no setup, no nothing. Find out more here.</p>
                </div>
                <div className="image">
                  <img src={img17} alt="Slider 1" />
                </div>
              </div>
              <a href="/#" className="is-prev">«</a>
              <a href="/#" className="is-next">»</a> 
            </div>
          </div>
        </div>
        <div className="benefits">
          <div className="page_container">
          </div>
        </div>
      </div>
    );
  }
}

export default HomeImmerslide;