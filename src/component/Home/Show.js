import React, { Component } from "react";
import * as iconTknt from "../item/Icon/08.thietkenoithat.png";
import * as iconTc from "../item/Icon/09.thicong.png";
import * as iconCtxd from "../item/Icon/10.caitao.png";
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

class Show extends Component {
  render() {
    return (
      <div className="section secondary-section " id="portfolio">
        <div className="container">
          <ul className="nav nav-pills">
            <li className="filter col-3 editAll" data-filter="all">
              <a href="#noAction" className="editAll">
                BẠN CÓ CĂN HỘ CẦN ĐƯỢC TƯ VẤN GIẢI PHÁP THIẾT KẾ NỘI THẨT
              </a>
            </li>
            <li className="filter col-3 filter1" data-filter="web">
              <a href="#noAction">
                <img src={iconTknt} className="editIcon" alt="imagecap" />
                Thi công nội thất
              </a>
            </li>
            <li className="filter col-3 filter1" data-filter="photo">
              <a href="#noAction">
                <img src={iconTc} className="editIcon" alt="imagecap" />
                Thi công nội thất
              </a>
            </li>
            <li className="filter col-3 filter1" data-filter="identity">
              <a href="#noAction">
                <img src={iconCtxd} className="editIcon" alt="imagecap" />
                Cải tạo xây dựng
              </a>
            </li>
          </ul>
          {/* Start details for portfolio project 1 */}
          <div id="single-project">
            <div id="slidingDiv" className="toggleDiv row-fluid single-project">
              <div className="span6">
                <img
                  src={img2}
                  alt="project 1"
                />
              </div>
              <div className="span6">
                <div className="project-description">
                  <div className="project-title clearfix">
                    <h3>Webste for Some Client</h3>
                    <span className="show_hide close">
                      <i className="fa fa-times" />
                    </span>
                  </div>
                  <div className="project-info">

                  </div>
                  <p>
                    Believe in yourself! Have faith in your abilities! Without a
                    humble but reasonable confidence in your own powers you
                    cannot be successful or happy.
                  </p>
                </div>
              </div>
            </div>
            {/* End details for portfolio project 1 */}
            {/* Start details for portfolio project 2 */}
            <div
              id="slidingDiv1"
              className="toggleDiv row-fluid single-project"
            >
              <div className="span6">
                <img
                  src={img3}
                  alt="project 2"
                />
              </div>
              <div className="span6">
                <div className="project-description">
                  <div className="project-title clearfix">
                    <h3>Webste for Some Client</h3>
                    <span className="show_hide close">
                      <i className="fa fa-times" />
                    </span>
                  </div>
                  <div className="project-info">

                  </div>
                  <p>
                    Life is a song - sing it. Life is a game - play it. Life is
                    a challenge - meet it. Life is a dream - realize it. Life is
                    a sacrifice - offer it. Life is love - enjoy it.
                  </p>
                </div>
              </div>
            </div>
            {/* End details for portfolio project 2 */}
            {/* Start details for portfolio project 3 */}
            <div
              id="slidingDiv2"
              className="toggleDiv row-fluid single-project"
            >
              <div className="span6">
                <img
                  src={img4}
                  alt="project 3"
                />
              </div>
              <div className="span6">
                <div className="project-description">
                  <div className="project-title clearfix">
                    <h3>Webste for Some Client</h3>
                    <span className="show_hide close">
                      <i className="fa fa-times" />
                    </span>
                  </div>
                  <div className="project-info">

                  </div>
                  <p>
                    How far you go in life depends on your being tender with the
                    young, compassionate with the aged, sympathetic with the
                    striving and tolerant of the weak and strong. Because
                    someday in your life you will have been all of these.
                  </p>
                </div>
              </div>
            </div>
            {/* End details for portfolio project 3 */}
            {/* Start details for portfolio project 4 */}
            <div
              id="slidingDiv3"
              className="toggleDiv row-fluid single-project"
            >
              <div className="span6">
                <img
                  src={img5}
                  alt="project 4"
                />
              </div>
              <div className="span6">
                <div className="project-description">
                  <div className="project-title clearfix">
                    <h3>Project for Some Client</h3>
                    <span className="show_hide close">
                      <i className="fa fa-times" />
                    </span>
                  </div>
                  <div className="project-info">

                  </div>
                  <p>
                    Life's but a walking shadow, a poor player, that struts and
                    frets his hour upon the stage, and then is heard no more; it
                    is a tale told by an idiot, full of sound and fury,
                    signifying nothing.
                  </p>
                </div>
              </div>
            </div>
            {/* End details for portfolio project 4 */}
            {/* Start details for portfolio project 5 */}
            <div
              id="slidingDiv4"
              className="toggleDiv row-fluid single-project"
            >
              <div className="span6">
                <img
                  src={img6}
                  alt="project 5"
                />
              </div>
              <div className="span6">
                <div className="project-description">
                  <div className="project-title clearfix">
                    <h3>Webste for Some Client</h3>
                    <span className="show_hide close">
                      <i className="fa fa-times" />
                    </span>
                  </div>
                  <div className="project-info">

                  </div>
                  <p>
                    We need to give each other the space to grow, to be
                    ourselves, to exercise our diversity. We need to give each
                    other space so that we may both give and receive such
                    beautiful things as ideas, openness, dignity, joy, healing,
                    and inclusion.
                  </p>
                </div>
              </div>
            </div>
            {/* End details for portfolio project 5 */}
            {/* Start details for portfolio project 6 */}
            <div
              id="slidingDiv5"
              className="toggleDiv row-fluid single-project"
            >
              <div className="span6">
                <img
                  src={img7}
                  alt="project 6"
                />
              </div>
              <div className="span6">
                <div className="project-description">
                  <div className="project-title clearfix">
                    <h3>Webste for Some Client</h3>
                    <span className="show_hide close">
                      <i className="fa fa-times" />
                    </span>
                  </div>
                  <div className="project-info">

                  </div>
                  <p>
                    I went to the woods because I wished to live deliberately,
                    to front only the essential facts of life, and see if I
                    could not learn what it had to teach, and not, when I came
                    to die, discover that I had not lived.
                  </p>
                </div>
              </div>
            </div>
            {/* End details for portfolio project 6 */}
            {/* Start details for portfolio project 7 */}
            <div
              id="slidingDiv6"
              className="toggleDiv row-fluid single-project"
            >
              <div className="span6">
                <img
                  src={img8}
                  alt="project 7"
                />
              </div>
              <div className="span6">
                <div className="project-description">
                  <div className="project-title clearfix">
                    <h3>Webste for Some Client</h3>
                    <span className="show_hide close">
                      <i className="fa fa-times" />
                    </span>
                  </div>
                  <div className="project-info">

                  </div>
                  <p>
                    Always continue the climb. It is possible for you to do
                    whatever you choose, if you first get to know who you are
                    and are willing to work with a power that is greater than
                    ourselves to do it.
                  </p>
                </div>
              </div>
            </div>
            {/* End details for portfolio project 7 */}
            {/* Start details for portfolio project 8 */}
            <div
              id="slidingDiv7"
              className="toggleDiv row-fluid single-project"
            >
              <div className="span6">
                <img
                  src={img9}
                  alt="project 8"
                />
              </div>
              <div className="span6">
                <div className="project-description">
                  <div className="project-title clearfix">
                    <h3>Webste for Some Client</h3>
                    <span className="show_hide close">
                      <i className="fa fa-times" />
                    </span>
                  </div>
                  <div className="project-info">

                  </div>
                  <p>
                    What if you gave someone a gift, and they neglected to thank
                    you for it - would you be likely to give them another? Life
                    is the same way. In order to attract more of the blessings
                    that life has to offer, you must truly appreciate what you
                    already have.
                  </p>
                </div>
              </div>
            </div>
            {/* End details for portfolio project 8 */}
            {/* Start details for portfolio project 9 */}
            <div
              id="slidingDiv8"
              className="toggleDiv row-fluid single-project"
            >
              <div className="span6">
                <img
                  src={img10}
                  alt="project 9"
                />
              </div>
              <div className="span6">
                <div className="project-description">
                  <div className="project-title clearfix">
                    <h3>Webste for Some Client</h3>
                    <span className="show_hide close">
                      <i className="fa fa-times" />
                    </span>
                  </div>
                  <div className="project-info">

                  </div>
                  <p>
                    I learned that we can do anything, but we can't do
                    everything... at least not at the same time. So think of
                    your priorities not in terms of what activities you do, but
                    when you do them. Timing is everything.
                  </p>
                </div>
              </div>
            </div>
            {/* End details for portfolio project 9 */}
            <ul id="portfolio-grid" className="thumbnails row">
              <li className="span4 mix web">
                <div className="thumbnail">
                  <img
                    src={img2}
                    alt="project 1"
                  />
                  <a
                    href="#single-project"
                    className="more show_hide"
                    rel="#slidingDiv"
                  >
                    <i className="fa fa-plus" />
                  </a>
                  <h3>Thumbnail label</h3>
                  <p>Thumbnail caption...</p>
                  <div className="mask" />
                </div>
              </li>
              <li className="span4 mix photo">
                <div className="thumbnail">
                  <img
                    src={img3}
                    alt="project 2"
                  />
                  <a
                    href="#single-project"
                    className="show_hide more"
                    rel="#slidingDiv1"
                  >
                    <i className="fa fa-plus" />
                  </a>
                  <h3>Thumbnail label</h3>
                  <p>Thumbnail caption...</p>
                  <div className="mask" />
                </div>
              </li>
              <li className="span4 mix identity">
                <div className="thumbnail">
                  <img
                    src={img4}
                    alt="project 3"
                  />
                  <a
                    href="#single-project"
                    className="more show_hide"
                    rel="#slidingDiv2"
                  >
                    <i className="fa fa-plus" />
                  </a>
                  <h3>Thumbnail label</h3>
                  <p>Thumbnail caption...</p>
                  <div className="mask" />
                </div>
              </li>
              <li className="span4 mix web">
                <div className="thumbnail">
                  <img
                    src={img5}
                    alt="project 4"
                  />
                  <a
                    href="#single-project"
                    className="show_hide more"
                    rel="#slidingDiv3"
                  >
                    <i className="fa fa-plus" />
                  </a>
                  <h3>Thumbnail label</h3>
                  <p>Thumbnail caption...</p>
                  <div className="mask" />
                </div>
              </li>
              <li className="span4 mix photo">
                <div className="thumbnail">
                  <img
                    src={img6}
                    alt="project 5"
                  />
                  <a
                    href="#single-project"
                    className="show_hide more"
                    rel="#slidingDiv4"
                  >
                    <i className="fa fa-plus" />
                  </a>
                  <h3>Thumbnail label</h3>
                  <p>Thumbnail caption...</p>
                  <div className="mask" />
                </div>
              </li>
              <li className="span4 mix identity">
                <div className="thumbnail">
                  <img
                    src={img7}
                    alt="project 6"
                  />
                  <a
                    href="#single-project"
                    className="show_hide more"
                    rel="#slidingDiv5"
                  >
                    <i className="fa fa-plus" />
                  </a>
                  <h3>Thumbnail label</h3>
                  <p>Thumbnail caption...</p>
                  <div className="mask" />
                </div>
              </li>
              <li className="span4 mix web">
                <div className="thumbnail">
                  <img
                    src={img5}
                    alt="project 7"
                  />
                  <a
                    href="#single-project"
                    className="show_hide more"
                    rel="#slidingDiv6"
                  >
                    <i className="fa fa-plus" />
                  </a>
                  <h3>Thumbnail label</h3>
                  <p>Thumbnail caption...</p>
                  <div className="mask" />
                </div>
              </li>
              <li className="span4 mix photo">
                <div className="thumbnail">
                  <img
                    src={img9}
                    alt="project 8"
                  />
                  <a
                    href="#single-project"
                    className="show_hide more"
                    rel="#slidingDiv7"
                  >
                    <i className="fa fa-plus" />
                  </a>
                  <h3>Thumbnail label</h3>
                  <p>Thumbnail caption...</p>
                  <div className="mask" />
                </div>
              </li>
              <li className="span4 mix identity">
                <div className="thumbnail">
                  <img
                    src={img10}
                    alt="project 9"
                  />
                  <a
                    href="#single-project"
                    className="show_hide more"
                    rel="#slidingDiv8"
                  >
                    <i className="fa fa-plus" />
                  </a>
                  <h3>Thumbnail label</h3>
                  <p>Thumbnail caption...</p>
                  <div className="mask" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
