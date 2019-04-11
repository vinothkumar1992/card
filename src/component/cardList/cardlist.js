import React from "react";
//import ListItem from "@material-ui/core/ListItem";
//import { Grid, GridList } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
const CardList = props => {
  if (props.cardList.length === 0) {
    return null;
  } else {
    const { cardList } = props;
    const listItems = cardList.map(number => number.cardList);
    const ListItemValues = listItems.map((data, idx) => (
      <Row className="justify-content-md-center">
        <Col xs={6} md={4}>
          Person{idx}
        </Col>
        <Col xs={12} md={8}>
          {data.map(res => res + ",")}
        </Col>
      </Row>
    ));
    return (
      <div>
        <Container>{ListItemValues}</Container>
      </div>
    );
  }
};
export default CardList;
