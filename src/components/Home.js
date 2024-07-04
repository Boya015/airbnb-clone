import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
import { listingList } from "../actions/listingActions";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listingList());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="home_section">
          {listings.map((listing) => (
            <Card
              src={listing.img}
              title={listing.title}
              description={listing.description}
              price={listing.price}
            />
          ))}
        </div>
      )}
      {/* <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/570fdbed-9720-44b8-b4c1-7370054ab77c.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activites we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/2b7ec246-1b30-4ea6-9445-ef5ee59f8d68.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activites we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-851868134001572631/original/68649a73-b86a-4be9-8f0b-0a0fd8d032b1.jpeg?im_w=720"
          title="Online Experiences"
          description="Unique activites we can do together, led by a world of hosts."
        />
      </div> */}

      {/* <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-685550443824818589/original/a94b06dd-733e-40b5-875e-a26d71254170.jpeg?im_w=720"
          title="Online Experiences"
          description="Unique activites we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/e350da80-7cb4-4574-a53f-2e484debec35.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activites we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/6a1e2e1e-b159-4a0f-b10b-0957fbb69f8b.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activites we can do together, led by a world of hosts."
        />
      </div> */}
    </div>
  );
};

export default Home;
