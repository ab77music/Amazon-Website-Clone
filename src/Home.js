import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321346"
            title="
            Charging Station for iPhone Apple Watch 5/4/3/2, 2 in 1 Universal Desktop Stand Holder for iPhone 11/11 Pro Max/XR/XS Max/Xs/X/8 (Upgraded)"
            price={11.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71n9nVXDUWL._AC_SX679_.jpg"
          />
          <Product
            id="49538094"
            title="
            New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage"
            price={1659.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71KR2i6-WaL._AC_SL1500_.jpg"
          />


        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Nubia Alpha Global Bluetooth International 4.01" AMOLED Foldable Flexible Wraparound Smartwatch with AIR Interaction Gesture Control Aperature Camera with Heart Rate Sensor
            price={199.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41PQBj9CecL._AC_.jpg"
          />
          <Product
            id="23445930"
            title="LyxPro 39 inch Electric Guitar Kit Bundle with 20w Amplifier, All Accessories, Digital Clip On Tuner, Six Strings, Two Picks, Tremolo Bar, Shoulder Strap, Case Bag Starter kit Full Size - Red"
            price={179.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81riv7R07GL._AC_SX679_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="3255854365"
            title="Video Camera Camcorder 2.7K Ultra HD 36MP YouTube Camera for Vlogging, IR Night Vision 16X Digital Zoom Camera Recorder with Microphone Lens Hood Handheld..."
            price={100.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/714Z%2BLSofOL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="
            SAMSUNG LC32HG70QQN, C32HG70 32 HDR QLED 144Hz 1ms Curved Gaming Monitor with Freesync, Dark Blue BlackMatt"
            price={700.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81829CS%2B4uL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row2">
          <Product
            id="4903850"
            title="
            Computer Speakers, HTRise 10W PC Speakers RGB Gaming with Enhanced Stereo Bass Colorful LED Light, USB Powered for Desktop Laptop Tablet Smartphones."
            price={24.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Xjm0m%2BofL._AC_SL1195_.jpg"
          />
          <Product
            id="23445930"
            title="
            Ninja Hot and Cold Brewed System, Auto-iQ Tea and Coffee Maker with 6 Brew Sizes, 5 Brew Styles, Frother, Coffee & Tea Baskets with Glass Carafe (CP301)..."
            price={199.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81Uo1BtvxAL._AC_SL1500_.jpg"
          />

        </div>
      </div>
    </div>
  )
}

export default Home
