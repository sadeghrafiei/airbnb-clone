import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult/SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 august to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
        <SearchResult
          img="https://images.unsplash.com/photo-1567636788276-40a47795ba4d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          location="Private room in center of London"
          title="Stay at this spacious Edwardian House"
          description="1 guest . 1 bedroom . 1 bed , 1.5 shared . bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
          star={4.73}
          price="$30 /night"
          total="$117 total"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          location="Private room in center of London"
          title="Stay at this spacious Edwardian House"
          description="1 guest . 1 bedroom . 1 bed , 1.5 shared . bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
          star={4.8}
          price="$100 /night"
          total="$157 total"
        />
        <SearchResult
          img="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          location="Private room in center of London"
          title="Stay at this spacious Edwardian House"
          description="1 guest . 1 bedroom . 1 bed , 1.5 shared . bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
          star={4.01}
          price="$80 /night"
          total="$137 total"
        />
      </div>
    </div>
  );
}

export default SearchPage;
