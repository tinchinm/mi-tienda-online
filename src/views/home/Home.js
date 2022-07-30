import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

const Home = () => {
  return (
    <div className='carousel'>
    <div className='carousel_cont'>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/fixit-store.appspot.com/o/Carousel%2Fserv-tec-1.jpg?alt=media&token=bd65938b-4c42-4996-8709-18bbc39654e1"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/fixit-store.appspot.com/o/Carousel%2Fserv-tec-2.jpg?alt=media&token=1392da5b-2a3d-437e-852b-6d2536ceed76"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/fixit-store.appspot.com/o/Carousel%2Fserv-tec-3.jpg?alt=media&token=9793adf5-6531-49c7-a7ea-c02dbfe2a05b"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}

export default Home