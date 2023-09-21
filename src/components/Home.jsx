import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './pages.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';


export default function Home() {
    useEffect(() => {
      AOS.init ({
        duration: 1000, 
      })
      let birds = document.getElementById('birds');
      let boats = document.getElementById('boats');
  
      // Define the reveal function inside the useEffect
      function reveal() {
        var reveals = document.querySelectorAll('.features');
  
        for (var i = 0; i < reveals.length; i++) {
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 300;
  
          if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
          }
        }
      }
//animation for the birds and boat
      window.addEventListener('scroll', () => {
        let value = window.scrollY;
  
        if (birds && boats) {
          birds.style.left = value * 1 + 'px';
          boats.style.left = value * -0.5 + 'px';
        }
  
        // Call the reveal function on scroll
        reveal();
      });
  
      // Cleanup function for removing the scroll event listener
      return () => {
        window.removeEventListener('scroll', reveal);
      };
    }, []); 
    
//home page
  return (
    <div className="front-page">
    <div className="parallax">
       <img src="./src/components/images/boat.png" id="boats"/>
       <img src="./src/components/images/birds.png" id="birds"/>
       <img src="./src/components/images/waters.png" id="waters" />
     <div className="cover">
        <p className="name">Solace</p>
        <p className="motto">A virtual sanctuary of cherished memories</p>
     </div>
    </div>

     <div className="mission">
       <h1 data-aos="fade-up">Our Mission</h1>
       <p data-aos="fade-up" className = "problem">Homesickness is an emotional experience that many individuals face when they are 
       separated from their familiar surroundings and loved ones. It is often associated with 
       feelings of sadness, loneliness, and longing for the comforts of home. The severity of 
       homesickness can vary from person to person, but it can significantly impact one's mental and emotional well-being.
       This experience is common among students, expatriates, and individuals living far away from their families.
       Research conducted by the American College Health Association indicates that over 60% of college 
       students in the United States experience homesickness during their college years. </p> {'\n'}

       <p data-aos="fade-up"className = "background">Connecting with family members and immersing oneself in multiple cultures can play a crucial 
       role in alleviating homesickness. Family serves as a support system and a source of comfort, 
       helping individuals feel connected even when they are physically distant. Additionally, immersing
       oneself in different cultures can provide a sense of belonging and expand horizons, which 
       can counteract feelings of isolation. Embracing diverse cuisines and traditions can create a 
       sense of connection to one's heritage and offer a bridge to cultural identity. </p> {'\n'}{'\n'}

       <p data-aos="fade-up" className = "solacemission">Solace's mission is to address homesickness and comfort its users by surrounding them with their
       most familiar memories, consisting of their culture, friends and families. Solace is a platform that 
       features recipes from various cultures and allows users to upload photos. Users can also plan events 
       with Google Calendar to reconnect with their families.  </p>
     </div>
       
     <div className="features">
       <h1 data-aos="fade-up" data-aos-duration="1000">Features</h1>
       <div data-aos="fade-up" data-aos-duratoin="2000" className = "feature-containers">
         <div className ="feature1-container">
           <img src="./src/components/images/computer.jpg" className="features-image1"/>
           <p>Feel connected with family members at all times with your personal homeboard.</p> {'\n'}
         </div>

         <div className ="feature2-container">
           <img src="./src/components/images/google.jpg"className="features-image2" />
           <p>Create events with Google Calendar to set reminders to reconnect with family and friends.</p> {'\n'}
         </div>

         <div className ="feature3-container">
           <img src="./src/components/images/cooking.jpg"className="features-image3" />
           <p>Explore thousands of recipes at your fingertips to connect with your heritage and immerse yourself in a variety of cultures.</p>
         </div>
       </div>
     </div>

     <div className="end">
       <div className="signup">
         <h3 data-aos="fade-up"><strong> Start reconnecting!</strong></h3>
         <Link to="/Register"><button data-aos="fade-down" className="button">Sign up</button></Link>
         <Link to="/Login"><button data-aos="fade-down" className="button">Login</button></Link>
         <img src="./src/components/images/corgi.png" data-aos="fade-left" className ="endpics"/>
         <img src="./src/components/images/friends.png" data-aos="fade-right" className ="endpics2" />
         <p> All features are <strong>FREE!</strong></p>
      </div>

       <div className="imagecredits">
         <p>Images from Freepik</p>
        </div>
     </div>

   </div>
  )}

 