import React from "react";
import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Online Experiences"
          description="Uniqe activities we can do 
                together , led by a world of hosts."
        />
        <Card
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Uniqe stays"
          description="Spaces that are more than 
                just a place to sleep."
        />
        <Card
          src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Entire home"
          description="Comfortable private places with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="$350/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunnig view of the beachside in Sunny Bournemouth"
          price="$130/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1560200353-ce0a76b1d438?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="$70/night"
        />
      </div>
    </div>
  );
}

export default Home;
