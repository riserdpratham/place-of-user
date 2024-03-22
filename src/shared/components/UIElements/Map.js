import React, { useRef, useEffect } from "react";

import "./Map.css";
const Map = (props) => {
  const mapRef = useRef();
  const { center, zoom, title } = props;
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({
      map: map,
      position: center,
      title: title,
    });
  }, [center, zoom, title]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
