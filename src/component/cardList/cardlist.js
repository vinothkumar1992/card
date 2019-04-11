import React from "react";
//import ListItem from "@material-ui/core/ListItem";
//import { Grid, GridList } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
const CardList = props => {
  console.log(props);
  if (props.cardList[1] === undefined) {
    return null;
  } else {
    const { cardList } = props;
    const listItems = cardList.map(number => number.cardList);
    const ListItemValues = listItems.map(data => <Col>{data}</Col>);
    return (
      <Container>
        <Row>{ListItemValues}</Row>
      </Container>
    );
  }
};
export default CardList;
