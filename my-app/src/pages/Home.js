// import '../styles/main.css';

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function IndividualIntervalsExample() {
  return ( 
    <div style={{ display: 'block', width: 700, padding: 30 }}> 
      <Carousel> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          /> 
          <Carousel.Caption> 
            <h3>Label for first slide</h3> 
            <p>Sample Text for Image One</p> 
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
          <img 
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          /> 
          <Carousel.Caption> 
            <h3>Label for second slide</h3> 
            <p>Sample Text for Image Two</p> 
          </Carousel.Caption> 
        </Carousel.Item> 
      </Carousel> 
    </div> 
  ); 
}

function Home() {
  return (
    <div className="Main" >
        <h2> Cornell Entertainment Engineering & Design Club</h2>
        <h4> Welcome to CEEDC!</h4>
        <p> <b>Cornell Entertainment Engineering & Design Club</b> 
            is Cornell's premier club devoted to the newest technology in entertainment</p>
        <b>Our Mission</b>
        <p>The mission of <b>CEEDC</b> is to inspire the next generation of entertainment innovators through our three pillars.</p>
        <b>CEEDC's Three Pillars</b>
        <ul>
            <li> Industry Education </li>
            <li> Community Projects</li>
            <li> Interdisiplinary Collaboration</li>
        </ul>

        <IndividualIntervalsExample/>


    </div>
  )
}

export default Home;
