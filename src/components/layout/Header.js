import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./Header.css";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const [guestCount, setGuestCount] = useState(1);
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const popupRef = useRef(null);

  const handleGuestChange = (operation) => {
    setGuestCount((prevCount) => {
      const newCount =
        operation === "increment" ? prevCount + 1 : prevCount - 1;
      return Math.max(1, Math.min(20, newCount));
    });
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowGuestPopup(false);
    }
  };

  useEffect(() => {
    if (showGuestPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showGuestPopup]);

  return (
    <div className="header">
      <div className="top-header">
        <img
          src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
          className="header-logo"
          alt="logo"
        />
        <div className="header-text">
          <p>Stays</p>
          <p>Experiences</p>
        </div>
        <div className="header-links">
          <p>Airbnb your home</p>
          <LanguageIcon className="language-icon" />
          <div className="profile-menu-icons">
            <MenuIcon className="menu-icon" />
            <AccountCircleIcon className="account-icon" />
          </div>
        </div>
      </div>

      <div className="banner-search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner-search-button"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>

      {showSearch && (
        <div className="header-bottom">
          <div className="header-search">
            <div className="search-where">
              <p>Where</p>
              <div className="search-input">
                <input type="text" placeholder="Search destinations" />
              </div>
            </div>
            <div className="search-checkin">
              <p>Check In</p>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Select check-in date"
                className="date-picker"
              />
            </div>
            <div className="search-checkout">
              <p>Check Out</p>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Select check-out date"
                className="date-picker"
              />
            </div>
            <div className="search-who">
              <p>Who</p>
              <button
                className="search-button"
                onClick={() => setShowGuestPopup(true)}
              >
                {guestCount > 0
                  ? `${guestCount} Guests`
                  : `${guestCount} Guest`}
              </button>

              {showGuestPopup && (
                <div className="guest-popup" ref={popupRef}>
                  <div className="guest-selector">
                    <button
                      className="guest-button"
                      onClick={() => handleGuestChange("decrement")}
                    >
                      <RemoveIcon />
                    </button>
                    <input
                      type="number"
                      value={guestCount}
                      readOnly
                      className="guest-input"
                    />
                    <button
                      className="guest-button"
                      onClick={() => handleGuestChange("increment")}
                    >
                      <AddIcon />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <SearchIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
