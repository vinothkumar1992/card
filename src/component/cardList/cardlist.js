import React from "react";
//import ListItem from "@material-ui/core/ListItem";
//import { Grid, GridList } from "@material-ui/core";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./cardlist.css";
const CardList = props => {
  if (props.cardList.length === 0) {
    return null;
  } else {
    const { cardList } = props;
    const listItems = cardList.map(number => number.cardList);
    const ListItemValues = listItems.map((data, idx) => (
      <Row className="justify-content-md-center cardlisting">
        <Col xs={4} md={4} className="person-name">
          Person{idx}
        </Col>
        <Col xs={8} md={8} className="card-list">
          {data.map(res => res + ",")}
        </Col>
      </Row>
    ));
    return <Container className="container">{ListItemValues}</Container>;
  }
};
export default CardList;
