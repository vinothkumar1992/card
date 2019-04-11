import React, { Component } from "react";
import "./../../App.css";
//import TextField from "@material-ui/core/TextField";
import CardData from "../../services/personcard";
import CardList from "../cardList/cardlist";
import { Form, Button } from "react-bootstrap";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personCount: "",
      cardList: [],
      validated: false
    };
    // this.handlerChange = this.handlerChange.bind(this);
    // this.handlerSubmit = this.handlerSubmit.bind(this);
  }
  handlerChange = event => {
    let count = event.target.value;
    if (isNaN(count)) {
      event.preventDefault();
      event.stopPropagation();
      // If the Given Value is Not Number Then It Will Return True and This Part Will Execute.
      this.setState({ validated: true });
    } else if (count === "0") {
      // If the Given Value is Number = 0 Then this Part Will Execute.
      this.setState({ validated: true });
    } else {
      // If the Given Value is Number > 0 Then this Part Will Execute.
      this.setState({
        personCount: count,
        cardList: "",
        validated: false
      });
    }
  };

  handlerSubmit = event => {
    let data = this.state.personCount;
    CardData(data).then(result => {
      let responseJson = result;
      console.log(responseJson);
      this.setState({
        cardList: responseJson
      });
    });
    event.preventDefault();
  };

  componentDidMount = () => {};
  render() {
    const { personCount, validated } = this.state;
    return (
      <div>
        <Form noValidate validated={validated} onSubmit={this.handlerSubmit}>
          <Form.Group md="3" controlId="validationCustom05">
            <Form.Label>Count</Form.Label>
            <Form.Control
              type="text"
              placeholder="Person Count"
              value={personCount}
              onChange={this.handlerChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Number.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <CardList cardList={this.state.cardList} />
      </div>
    );
  }
}
export default Card;
