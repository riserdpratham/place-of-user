import React, { useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";
import Modal from "../../shared/components/UIElements/Modal";
import Button from "../../shared/components/FormElements/Button";

const PlaceItem = (props) => {
  const [showmap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  const contentOfFooter = <Button onClick={closeMapHandler}>Close</Button>;
  return (
    <React.Fragment>
      <Modal
        show={showmap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={contentOfFooter}
      >
        <div className="map-container">MAP is laoding soon....</div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p> {props.description}</p>
          </div>
          <hr className="separator-line" />
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              View On Map
            </Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
