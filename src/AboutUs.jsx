import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description"> 
           Welcome to Zack's Plant Nursery ! 
           <p style={{ fontStyle: 'italic' }}> Where Going Green Is Made Easy </p> 
          </p>
      <p className="about-us-content">
        Here at Zack's Plant Nursery, we bring nature closer to you than before. </p>
        
        <p> We aim to provide a wide range of high-quality plants to enhance the beauty of your surroundings and imrpove the healthier milleu
        while providing a more sustainable lifestyle. 
      </p>
       <br/>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
         From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast. 
         Our experts ensures that each plant that enters our store meets our strict standards of quality and care. 
        <br/> <br/>
        Whether you're a seasoned gardener or just starting out, we will support you every step of 
        the way. Feel free to explore our premium plant collection.         
        <br/> <br/> 
        Ask questions, and let us help you find the perfect plant for your home or office.
      </p>
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

      <p className="about-us-content">
        Join us in our mission to create a greener, healthier world. 
        <br/><br/>
        Visit Zack's Plant Nursery today to experience the power of Mother Nature at your doorstep.
      </p>
    </div>
  );
}

export default AboutUs;
