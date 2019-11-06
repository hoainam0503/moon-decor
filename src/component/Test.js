import React, { Component } from 'react';
import * as img11 from './item/image/img11.png';
import * as img12 from './item/image/img12.jpg';
import * as img13 from './item/image/img13.jpg';
class Test extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="page_container">
            <div id="immersive_slider">
              <div className="slide" data-blurred={img11}>
                <div className="content">
                  <h2><a href="http://www.bucketlistly.com" target="_blank">BucketListly</a></h2>
                  <p>It’s never been easier to watch YouTube on the big screen
              Send your favorite YouTube videos from your Android phone or tablet to TV with the touch of a button. It’s easy. No wires, no setup, no nothing. Find out more here.</p>
                </div>
                <div className="image">
                  <a href="http://www.bucketlistly.com" target="_blank">
                    <img src={img11} alt="Slider 1" />
                  </a>
                </div>
              </div>
              <div className="slide" data-blurred={img12}>
                <div className="content">
                  <h2><a href="http://www.bucketlistly.com/apps" target="_blank">BucketListly Apps</a></h2>
                  <p>It’s never been easier to watch YouTube on the big screen
              Send your favorite YouTube videos from your Android phone or tablet to TV with the touch of a button. It’s easy. No wires, no setup, no nothing. Find out more here.</p>
                </div>
                <div className="image">
                  <a href="http://www.bucketlistly.com/apps" target="_blank"> <img src={img12} alt="Slider 1" /></a>
                </div>
              </div>
              <div className="slide" data-blurred={img13}>
                <div className="content">
                  <h2><a href="http://www.thepetedesign.com" target="_blank">The Pete Design</a></h2>
                  <p>It’s never been easier to watch YouTube on the big screen
              Send your favorite YouTube videos from your Android phone or tablet to TV with the touch of a button. It’s easy. No wires, no setup, no nothing. Find out more here.</p>
                </div>
                <div className="image">
                  <a href="http://www.thepetedesign.com" target="_blank"><img src={img13} alt="Slider 1" /></a>
                </div>
              </div>
              <a href="#" className="is-prev">«</a>
              <a href="#" className="is-next">»</a>
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

export default Test;