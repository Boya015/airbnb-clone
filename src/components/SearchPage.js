import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays . 26 augut to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/ba494712-9dca-4291-b394-a9b4b6d8714b.jpg?im_w=720"
        location="Private room in center of cape town"
        title="Stay at spacious Edwardian House"
        description="1 guest. 1 bedroom. 1 bed . wifi"
        star={4.73}
        price="R3500 / night"
        total="R7500"
      />
        <SearchResult
        img="https://a0.muscache.com/im/pictures/e350da80-7cb4-4574-a53f-2e484debec35.jpg?im_w=720"
        location="Hotel House in durban"
        title="Stay at spacious Ndlovu villa"
        description="2 guest. 3 bedroom. 2 bed . unlimited wifi"
        star={5.00}
        price="R5600 / night"
        total="R12500"
      />
        <SearchResult
        img="https://a0.muscache.com/im/pictures/5396b057-2c79-46b6-8a2d-ea780deb79c5.jpg?im_w=720"
        location="Holiday winter lodge"
        title="Jameson lodge"
        description="4 guest. 4 bedroom. 4 beds . wifi . "
        star={4.57}
        price="R5000 / night"
        total="R8300"
      />
    </div>
  );
};

export default SearchPage;
