import pizzaPlanetImage from '../images/PizzaPlanet.png';

function Home() {
  return (
    <div className="Home hero has-background-primary is-fullwidth has-shadow">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half is-flex is-flex-direction-column is-justify-content-center">
              <h1 className="title is-size-1 has-text-centered has-text-weight-bold has-text-white animate__animated animate__delay-1s animate__zoomIn">Welcome To Pizza Planet</h1>
              <hr className="animate__animated animate__delay-1s animate__fadeInLeft" />
              <p className="subtitle is-5 has-text-white animate__animated animate__delay-1s animate__jackInTheBox">Where every day is an adventure. And every slice is filled with magic.</p>
              <p className="subtitle is-5 has-text-white animate__animated animate__delay-1s animate__jackInTheBox">We are a family owned and operated business. We have been serving the community for over 30 years.</p>
              <p className="subtitle is-5 has-text-white animate__animated animate__delay-1s animate__jackInTheBox">We are located in the heart of the city. We are open 7 days a week.</p>
            </div>
            <div className="column is-half animate__animated animate__delay-1s animate__zoomInRight">
              <img src={pizzaPlanetImage} alt="Pizza Planet" className="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
