import React, { Component } from 'react';
import * as backgroundimg from '../item/image/background.jpg';
import * as img2 from '../item/image/img2.png';
import * as img3 from '../item/image/img3.jpg';
import * as img4 from '../item/image/img4.jpg';
import * as img5 from '../item/image/img5.jpg';
import * as img6 from '../item/image/img6.jpg';
import * as img7 from '../item/image/img7.jpg';
import * as img8 from '../item/image/img8.jpg';
import * as img9 from '../item/image/img9.png';
import * as img10 from '../item/image/img10.jpg';
import * as img11 from '../item/image/img11.png';
import * as img12 from '../item/image/img12.jpg';
import * as img13 from '../item/image/img13.jpg';
import * as iconTknt from '../item/Icon/08.thietkenoithat.png';
import * as iconTc from '../item/Icon/09.thicong.png';
import * as iconCtxd from '../item/Icon/10.caitao.png';
import HomeImmerslide from './HomeImmersilde';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="purple-square-container">
            <img src={backgroundimg} id="background" className="img-fluid img-reponsive" alt="Background" />
            {/* <div className="btn-group btn-search" style={{ width: '50%' }}>
              <input type="text" className="form-control" name="inputSearch" aria-describedby="helpId" placeholder="Enter your e-mail address" />
              <button className="btn search">SEARCH</button>
            </div> */}
          </div>
          <div className="container mt-4">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <h5>BẠN CÓ CĂN HỘ CẦN ĐƯỢC TƯ VẤN GIẢI PHÁP THIẾT KẾ NỘI THẨT</h5>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 btn-group">
                <img src={iconTknt} className="editIcon" alt="imagecap" />
                <h5 className="editText">Thiết kế nội thất</h5>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 btn-group">
                <img src={iconTc} className="editIcon" alt="imagecap" />
                <h5 className="editText">Thi công nội thất</h5>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 btn-group">
                <img src={iconCtxd} className="editIcon" alt="imagecap" />
                <h5 className="editText">Cải tạo xây dựng</h5>
              </div>
            </div>
            <div className="row mt-4 col-12">
              <div className="card col-lg-3 col-sm-4 col-xs-2 editImage mt-4">
                <div className="col-12 img">
                  <div style={{ backgroundImage: `url(${img2})` }} className="hovereffect">
                    <div className="overlay">
                      <div className="content-hover">
                        <h2>CENTRAL PREMIUM - SẮC VÀNG ẤN TƯỢNG</h2>
                        <p>Tông màu vàng luôn đem lại cho người nhìn cảm nhận về niềm vui,..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-lg-3 col-sm-4 col-xs-2 editImage  mt-4">
                <div className="col-12 img">
                  <div style={{ backgroundImage: `url(${img3})` }} className="hovereffect">
                    <div className="overlay">
                      <div className="content-hover">
                        <h2>CENTRAL PREMIUM - SẮC VÀNG ẤN TƯỢNG</h2>
                        <p>Tông màu vàng luôn đem lại cho người nhìn cảm nhận về niềm vui,..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-lg-3 col-sm-4 col-xs-2 editImage  mt-4">
                <div className="col-12 img">
                  <div style={{ backgroundImage: `url(${img4})` }} className="hovereffect">
                    <div className="overlay">
                      <div className="content-hover">
                        <h2>CENTRAL PREMIUM - SẮC VÀNG ẤN TƯỢNG</h2>
                        <p>Tông màu vàng luôn đem lại cho người nhìn cảm nhận về niềm vui,..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-lg-3 col-sm-4 col-xs-2 editImage  mt-4">
                <div className="col-12 img">
                  <div style={{ backgroundImage: `url(${img5})` }} className="hovereffect">
                    <div className="overlay">
                      <div className="content-hover">
                        <h2>CENTRAL PREMIUM - SẮC VÀNG ẤN TƯỢNG</h2>
                        <p>Tông màu vàng luôn đem lại cho người nhìn cảm nhận về niềm vui,..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-lg-3 col-sm-4 col-xs-2 editImage mt-4">
                <div className="col-12 img">
                  <div style={{ backgroundImage: `url(${img6})` }} className="hovereffect">
                    <div className="overlay">
                      <div className="content-hover">
                        <h2>CENTRAL PREMIUM - SẮC VÀNG ẤN TƯỢNG</h2>
                        <p>Tông màu vàng luôn đem lại cho người nhìn cảm nhận về niềm vui,..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-lg-3 col-sm-4 col-xs-2 editImage mt-4">
                <div className="col-12 img">
                  <div style={{ backgroundImage: `url(${img7})` }} className="hovereffect">
                    <div className="overlay">
                      <div className="content-hover">
                        <h2>CENTRAL PREMIUM - SẮC VÀNG ẤN TƯỢNG</h2>
                        <p>Tông màu vàng luôn đem lại cho người nhìn cảm nhận về niềm vui,..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-lg-3 col-sm-4 col-xs-2 editImage mt-4">
                <div className="col-12 img">
                  <div style={{ backgroundImage: `url(${img8})` }} className="hovereffect">
                    <div className="overlay">
                      <div className="content-hover">
                        <h2>CENTRAL PREMIUM - SẮC VÀNG ẤN TƯỢNG</h2>
                        <p>Tông màu vàng luôn đem lại cho người nhìn cảm nhận về niềm vui,..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-lg-3 col-sm-4 col-xs-2 editImage mt-4">
                <div className="col-12 img">
                  <div style={{ backgroundImage: `url(${img9})` }} className="hovereffect">
                    <div className="overlay">
                      <div className="content-hover">
                        <h2>CENTRAL PREMIUM - SẮC VÀNG ẤN TƯỢNG</h2>
                        <p>Tông màu vàng luôn đem lại cho người nhìn cảm nhận về niềm vui,..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-lg-3 col-sm-4 col-xs-2 editImage mt-4">
                <div className="col-12 img">
                  <div style={{ backgroundImage: `url(${img10})` }} className="hovereffect">
                    <div className="overlay">
                      <div className="content-hover">
                        <h2>CENTRAL PREMIUM - SẮC VÀNG ẤN TƯỢNG</h2>
                        <p>Tông màu vàng luôn đem lại cho người nhìn cảm nhận về niềm vui,..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-lg-3 col-sm-4 col-xs-2 editImage mt-4">
                <div className="col-12 img">
                  <div style={{ backgroundImage: `url(${img11})` }} className="hovereffect">
                    <div className="overlay">
                      <div className="content-hover">
                        <h2>CENTRAL PREMIUM - SẮC VÀNG ẤN TƯỢNG</h2>
                        <p>Tông màu vàng luôn đem lại cho người nhìn cảm nhận về niềm vui,..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-lg-3 col-sm-4 col-xs-2 editImage mt-4">
                <div className="col-12 img">
                  <div style={{ backgroundImage: `url(${img12})` }} className="hovereffect">
                    <div className="overlay">
                      <div className="content-hover">
                        <h2>CENTRAL PREMIUM - SẮC VÀNG ẤN TƯỢNG</h2>
                        <p>Tông màu vàng luôn đem lại cho người nhìn cảm nhận về niềm vui,..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-lg-3 col-sm-4 col-xs-2 editImage mt-4">
                <div className="col-12 img">
                  <div style={{ backgroundImage: `url(${img13})` }} className="hovereffect">
                    <div className="overlay">
                      <div className="content-hover">
                        <h2>CENTRAL PREMIUM - SẮC VÀNG ẤN TƯỢNG</h2>
                        <p>Tông màu vàng luôn đem lại cho người nhìn cảm nhận về niềm vui,..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="editTitle">MOON DECOR</h3>
              <p>Kiến tạo không gian hoàn hảo</p>
              <div className="d-flex justify-content-center detailText">
                <div className="col-6 d-flex justify-content-around">
                  <div className="text-center col-md-3 col-sm-6 col-xs-6">
                    <h1 className="counter">20</h1>
                    <p>Đối tác</p>
                  </div>
                  <div className="text-center col-md-3 col-sm-6 col-xs-6">
                    <h1 className="counter">125</h1>
                    <p>Kiến trúc sư</p>
                  </div>
                  <div className="text-center col-md-3 col-sm-6 col-xs-6">
                    <h1 className="counter ">350</h1>
                    <p>Dự án</p>
                  </div>
                  <div className="text-center col-md-3 col-sm-6 col-xs-6">
                    <h1 className="counter">630</h1>
                    <p>Khách hàng hài lòng</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4 detailTextTop">
                <div className="col-6">
                  <p>Top 10 công ty thành công trong lĩnh vực thiết kế cùng đội ngũ kiến trúc sư trẻ đầy sáng tạo và nhiệt huyết
            sẽ đem đến những không gian tuyệt vời cho ngôi nhà của bạn </p>
                </div>
              </div>
              <div className="d-flex  flex-row-reverse mt-4">
                <div className="col-8">
                  <button className="btn viewMore">Xem thêm</button>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4 detailText">
                <h3>CÁC BÀI VIẾT HAY NHẤT</h3>
              </div>
            </div>
          </div>
        </div>
        <HomeImmerslide />
      </div>
    );
  }
}

export default Home;