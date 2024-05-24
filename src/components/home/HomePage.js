import videoHomePage from '../../assets/hompagevideo.webm';

const HomePage = () => {
  return (
    <div className={"homepage-container"}>
      {/*<video autoPlay muted loop>*/}
      {/*  <source src={videoHomePage} type="video/webm" />*/}
      {/*</video>*/}
      <div className="homepage-content">This is Home page</div>
    </div>
  );
};

export default HomePage;