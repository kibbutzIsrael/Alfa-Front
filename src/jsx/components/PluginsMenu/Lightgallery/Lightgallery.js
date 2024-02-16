import React from "react";
//import SimpleReactLightbox from 'simple-react-lightbox';
//import {SRLWrapper} from 'simple-react-lightbox';
import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import big1 from "../../../../images/big/1.JPG";
import big2 from "../../../../images/big/2.jpg";
import big3 from "../../../../images/big/3.jpg";
import big4 from "../../../../images/big/4.jpg";
import big5 from "../../../../images/big/5.jpg";
import big6 from "../../../../images/big/6.jpg";
import big7 from "../../../../images/big/7.jpg";
import big8 from "../../../../images/big/8.jpg";
import big9 from "../../../../images/big/9.jpg";
import big10 from "../../../../images/big/10.jpg";
import big11 from "../../../../images/big/11.JPG";
import big12 from "../../../../images/big/12.JPG";
import big13 from "../../../../images/big/13.JPG";
import big14 from "../../../../images/big/14.JPG";
import big15 from "../../../../images/big/15.JPG";
import big16 from "../../../../images/big/16.JPG";
import big17 from "../../../../images/big/17.JPG";
import big18 from "../../../../images/big/18.jpeg";
import big19 from "../../../../images/big/19.jpeg";
import big20 from "../../../../images/big/20.jpeg";
import big21 from "../../../../images/big/21.jpeg";
import big22 from "../../../../images/big/22.jpeg";
import big23 from "../../../../images/big/23.jpeg";
import big24 from "../../../../images/big/24.jpeg";
import big25 from "../../../../images/big/25.jpeg";
import big26 from "../../../../images/big/26.jpeg";
import big27 from "../../../../images/big/27.jpeg";
import big28 from "../../../../images/big/28.jpeg";
import big29 from "../../../../images/big/29.jpg";
import big30 from "../../../../images/big/30.JPG";

const lightGallery = [
  { large: big1, thumb: big1 },
  { large: big2, thumb: big2 },
  // { large: big3, thumb: big3 },
  { large: big4, thumb: big4 },
  { large: big5, thumb: big5 },
  // { large: big6, thumb: big6 },
  // { large: big7, thumb: big7 },
  { large: big8, thumb: big8 },
  { large: big9, thumb: big9 },
  { large: big10, thumb: big10 },
  { large: big11, thumb: big11 },
  // { large: big12, thumb: big12 },
  { large: big13, thumb: big13 },
  { large: big14, thumb: big14 },
  { large: big15, thumb: big15 },
  // { large: big16, thumb: big16 },
  { large: big17, thumb: big17 },
  { large: big18, thumb: big18 },
  { large: big19, thumb: big19 },
  { large: big20, thumb: big20 },
  { large: big21, thumb: big21 },
  { large: big22, thumb: big22 },
  { large: big23, thumb: big23 },
  { large: big24, thumb: big24 },
  { large: big25, thumb: big25 },
  { large: big26, thumb: big26 },
  { large: big27, thumb: big27 },
  { large: big28, thumb: big28 },
  { large: big29, thumb: big29 },
  { large: big30, thumb: big30 },
];

const Lightgallery = () => {
  const onInit = () => {
    //   console.log('lightGallery has been initialized');
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Light Gallery</h4>
            </div>

            <div className="card-body pb-1">
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="row"
              >
                {lightGallery.map((item, index) => (
                  <div
                    data-src={item.thumb}
                    className="col-lg-3 col-md-6 mb-4"
                    key={index}
                  >
                    <img
                      src={item.thumb}
                      style={{ width: "100%" }}
                      alt="gallery"
                      className="cursor-pointer"
                    />
                  </div>
                ))}
              </LightGallery>
            </div>
          </div>
          {/* <!-- /# card --> */}
        </div>
      </div>
    </>
  );
};
export default Lightgallery;
