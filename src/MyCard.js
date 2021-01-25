import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaBirthdayCake,
} from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card className="mycard">
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h1>
            <span className="pr-2">{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
          <p style={{ fontSize: "20px" }}>
            <FaMapMarkedAlt />
            {details.location?.city}
          </p>
          <p style={{ fontStyle: "italic", fontSize: "13.5px" }}>
            <span className="pr-4">
              <FaEnvelope />
              {details.email}
            </span>
            <span className="pr-4">
              <FaBirthdayCake />
              {details.dob?.age}
            </span>
            <span className="pr-4">
              <FaPhone />
              {details.phone}
            </span>
          </p>
        </CardText>
      </CardBody>
    </Card>
  );
};
export default MyCard;
