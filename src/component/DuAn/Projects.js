import React, { Component } from "react";
import * as iDienTich from "../item/Icon/11dientich.png";
import * as iPhong from "../item/Icon/sophong.png";
import * as iPhongCach from "../item/Icon/13.phongcach.png";
import * as iBadroom from "../item/Icon/14.bathroom.png";


class Projects extends Component {
  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="title text-center col-12 mt-4">
            CENTRAL PREMIUM – SẮC VÀNG ẤN TƯỢNG
            </div>
            <div className="projectInfo col-10 offset-1 mt-4">
            <div className="acreage">
              <img src={iDienTich} alt="project" width="50px" height="50px"/>
              <p className="projectText">Diện tích thiết kế: 74m2</p>
            </div>
            <div className="acreage">
              <img src={iPhong} alt="project" width="50px" height="50px"/>
              <p className="projectText">Số phòng: 2 phòng ngủ</p>
            </div>
            <div className="acreage">
              <img src={iPhongCach} alt="project" width="50px" height="50px"/>
              <p className="projectText">Phong cách: Hiện đại</p>
            </div>
            </div>
            <div className="sapo col-8 offset-2 text-center mt-4">
            Không đâu cho ta cảm giác bình yên bằng ở nhà. Khi bước vào “nhà mình” và bỏ lại những bộn bề đằng sau cánh cửa, về một không gian nơi bạn và gia đình có thể êm ấm quây quần bên nhau.
            </div>
            <div className="iconRooms col-10 offset-1 mt-4">
            <img src={iBadroom} alt="project" width="100px" height="70px"/>
            <img src={iBadroom} alt="project" width="100px" height="70px"/>
            <img src={iBadroom} alt="project" width="100px" height="70px"/>
            <img src={iBadroom} alt="project" width="100px" height="70px"/>
            <img src={iBadroom} alt="project" width="100px" height="70px"/>
            </div>
            <div className="">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
