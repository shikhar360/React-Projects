import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Others from "./Others";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

function App() {
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [isCountry, setIsCountry] = React.useState("india");
  const [toggle, setToggle] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  console.log(isCountry);
  React.useEffect(
    function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const { latitude } = position.coords;
            const { longitude } = position.coords;

            setLatitude(latitude);
            setLongitude(longitude);
          },
          function () {
            alert("If you wont send me Location how will i find you Bro");
          }
        );
      }
    },
    [latitude, longitude, alert]
  );

  React.useEffect(() => {
    if (latitude && longitude) {
      fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      )
        .then((res) => res.json())
        .then((data) => {
          setIsCountry(data.countryName);
        });
    }
  }, [latitude, longitude]);

  React.useEffect(() => {
    if (isCountry) {
      fetch(
        `https://restcountries.com/v3.1/name/${isCountry.toLowerCase()}?fullText=true`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Country name is Wrong`);
          } else return res.json();
        })
        .then((data) => {
          setCountry(data);
        });
    }
  }, [isCountry]);

  function handleClick() {
    setToggle(!toggle);
  }

  const position = [latitude, longitude];

  function typeOfModal() {
    setModal(!modal);
  }

  return (
    <div className="app relative ">
      <div className="pass">
        <Navbar typeOfModal={typeOfModal} modal={modal} />
        {modal ? (
          <div className="  flex flex-col items-center justify-center bg-lime-400 sm:max-w-md max-w-sm text-white my-20 mx-auto font-mono px-10 py-10 rounded-md ">
            <h1 className="mb-10 font-bold text-xl text-center">
              Hii , My Name Is Shikhar
            </h1>
            <p className="font-medium text-lg text-center">
              I am currently in India , you can contact me on Twitter @shikkhar_
              , Hope you are liking this Project , I Made it with React and
              TailwindCSS{" "}
            </p>
          </div>
        ) : null}
        <Hero toggle={latitude} />
      </div>

      {latitude ? (
        <MapContainer
          style={{ height: "80vh", width: "80wh", margin: "5rem" }}
          center={position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Dont worry Bro , I have found you. -- Shikhar</Popup>
          </Marker>
        </MapContainer>
      ) : null}
      {latitude && longitude && (
        <Others
          handleClick={handleClick}
          myCountry={country[0]}
          toggle={toggle}
        />
      )}
    </div>
  );
}

export default App;
