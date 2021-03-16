import { useState } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slick from 'react-slick';

const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Header = styled.header`
  position: relative;
  height: 44px;
  background: #fff;
  padding: 0;
  text-align: center;

  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }

  & button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    border: none;
    background: transparent;
    line-height: 14px;
    cursor: pointer;
  }
`;

const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`;

const ImgWrapper = styled.div`
  padding: 32px;
  text-align: center;

  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

const Indicator = styled.div`
  text-align: center;

  & > div {
    display: inline-block;
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    text-align: center;
    color: #fff;
    font-size: 15px;
  } 
`;

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Overlay>
      <Header>
        <h1>상세 이미지</h1>
        <button onClick={onClose}>X</button>
      </Header>
      <SlickWrapper>
        <div>
          <Slick 
            initialSlide={0}
            afterChange={(slide)=>{setCurrentSlide(slide)}}
            infinite
            arrows={false}
            slidesToScroll={1}
          >
            {images.map((v, index) => (
              <ImgWrapper key={index}>
                <img src={v.src} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slick>
        </div>
      </SlickWrapper>
    </Overlay>
  )
}

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired
}

export default ImagesZoom;
