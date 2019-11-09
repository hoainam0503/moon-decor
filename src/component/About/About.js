import React, { Component } from "react";
import * as background from "../item/image/img1.jpg";
import * as process from "../item/Iconabout/process.png";
import * as conversation from "../item/Iconabout/conversation.png";
import * as vuottroi from "../item/Iconabout/vuottroi.png";
import * as key from "../item/Iconabout/key.png";
import * as tantam from "../item/Iconabout/handshake.png";
import * as trian from "../item/Iconabout/trian.png";
import * as num1 from "../item/Iconabout/1.png";
import * as num2 from "../item/Iconabout/2.png";
import * as num3 from "../item/Iconabout/3.png";
import * as speech from "../item/Iconabout/speech-bubble.png";
import * as coin from "../item/Iconabout/coin.png";
import * as barChart from "../item/Iconabout/bar-chart.png";
import * as house from "../item/Iconabout/house.png";

class About extends Component {
  render() {
    return (
      <div>
        <div className="card text-white layoutBackground">
          <img src={background} className="card-img" alt="Background" />
          <div className="card-img-overlay titleAbout">
            <h5 className="card-title">ABOUT US</h5>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center valueText">
              <p>Các góa trị cốt lõi của chúng tôi</p>
            </div>
            <div className="body">
              <div className="card-deck body1">
                <div className="card">
                  <img src={process} className="card-img-top" alt="process" />
                  <div className="card-body">
                    <h5 className="card-title">Hệ thống </h5>
                    <p className="card-text">
                      Chúng tôi có một hệ thống quy trình làm việc chuẩn mực,
                      liên kết chặt chẽ các bộ phận để đạt kết quả tốt nhất cho
                      khách hàng
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src={conversation}
                    className="card-img-top"
                    alt="conversation"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Chính trực</h5>
                    <p className="card-text">
                      Luôn nói sự thật, trung thực không nói điều không chắc
                      chắn,... Là các nguyên tắc chuẩn mực đạo đức trong kinh
                      doanh của chúng tôi.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={vuottroi} className="card-img-top" alt="vuottroi" />
                  <div className="card-body">
                    <h5 className="card-title">Vượt trội</h5>
                    <p className="card-text">
                      Chúng tôi không ngừng thôi thúc mình cải tiến và sáng tạo
                      để mang đến những sản phẩm vượt trội hơn sản phẩm ngày hôm
                      qua
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-deck body1">
                <div className="card editImage">
                  <img
                    src={key}
                    className="card-img-top"
                    alt="key"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Cam kết</h5>
                    <p className="card-text">
                      Cam kết luôn gắn bó với khách hàng, mang lại cho khách
                      hàng những sản phẩm thiết kế và thi công chất lượng nhất.
                      Đặc biệt với dịch vụ “chìa khoá trao tay” uy tín nhất.
                    </p>
                  </div>
                </div>
                <div className="card editImage">
                  <img src={tantam} className="card-img-top" alt="tantam" />
                  <div className="card-body">
                    <h5 className="card-title">Tận tâm</h5>
                    <p className="card-text">
                      Bằng sự tử tế và tận tâm, chúng tôi không cho phép mình lơ
                      là các vấn đề ảnh hưởng đến của khách hàng cũng như đối
                      tác, tất cả phải được giải đáp cụ thể và minh bạch.{" "}
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={trian} className="card-img-top" alt="trian" />
                  <div className="card-body">
                    <h5 className="card-title">Tri ân</h5>
                    <p className="card-text">
                      Chúng tôi biết ơn khách hàng đã cho chúng tôi cơ hội làm
                      công việc mình đam mê, tán dương và sử dụng các sản phẩm
                      của chúng tôi mang lại bằng sự hài lòng và tin tưởng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-center valueText">
              <p>Qui trình làm việc</p>
            </div>
            <div className="workingProcess">
              <div className="col-3">
                <img src={num1} alt="num1" width="80px" height="80px" />
                <h3>Phác thảo thiết kế</h3>
                <p>
                  Sau khi trao đổi và nắm được nhu cầu của khách hàng, chúng tôi
                  sẽ nghiên cứu và phác thảo bản vẽ sơ phác ý tưởng thiết kế.
                </p>
              </div>
              <div className="crossBar"></div>
              <div className="col-3">
                <img src={num2} alt="num1" width="80px" height="80px" />
                <h3>Phối cảnh 3D</h3>
                <p>
                  Nếu hài lòng với phác thảo, Moon Decor tiến hành kí hợp đồng
                  thiết kế và lên phối cảnh 3D chi tiết, giúp bạn hình dung về
                  ngôi nhà.
                </p>
              </div>
              <div className="crossBar"></div>
              <div className="col-3">
                <img src={num3} alt="num1" width="80px" height="80px" />
                <h3>Thi công sản phẩm</h3>
                <p>
                  Sau khi thống nhất bản vẽ 3D với khách hàng, chúng tôi tiến
                  hành lập dự toán thi công và đảm bảo chi phí được kiểm soát
                  chặt chẽ
                </p>
              </div>
            </div>
            <div className="col-12 text-center valueText">Cam kết dịch vụ</div>
            <div className="body2 mt-3">
              <div className="card-deck">
                <div className="card">
                  <img src={speech} className="card-img-top" alt="speech" />
                  <div className="card-body">
                    <h5 className="card-title">Tư vấn chi tiết</h5>
                  </div>
                </div>
                <div className="card">
                  <img src={coin} className="card-img-top" alt="speech" />
                  <div className="card-body">
                    <h5 className="card-title">Chi phí tiết kiệm</h5>
                  </div>
                </div>
                <div className="card">
                  <img src={barChart} className="card-img-top" alt=".speech." />
                  <div className="card-body">
                    <h5 className="card-title">Dự toán chặt chẽ</h5>
                  </div>
                </div>
                <div className="card">
                  <img src={house} className="card-img-top" alt=".speech." />
                  <div className="card-body">
                    <h5 className="card-title">Thiết kế thiết thực</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-center valueText">
              ĐỘI NGŨ CỦA CHÚNG TÔI
            </div>
            <div className="col-12 text-center groupText">
            Công ty Moon-Decor chuyên thiết kế - thi công với hơn 2 năm kinh nghiệm. Với đội ngũ kiến trúc sư và kĩ sư trẻ, chúng tôi luôn muốn mang lại cho khách hang những không gian kiến trúc không chỉ đẹp về thẩm mỹ và còn tối ưu về không gian.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
