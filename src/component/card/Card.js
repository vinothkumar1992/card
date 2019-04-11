import React, { Component } from "react";
import "./../../App.css";
import TextField from "@material-ui/core/TextField";
import CardData from "../../services/personcard";
import CardList from "../cardList/cardlist";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personCount: "",
      personCountError: "",
      cardList: []
    };
    // this.handlerChange = this.handlerChange.bind(this);
    // this.handlerSubmit = this.handlerSubmit.bind(this);
  }
  handlerChange = event => {
    let count = event.target.value;
    let message = "Input value does not exist";
    if (isNaN(count)) {
      // If the Given Value is Not Number Then It Will Return True and This Part Will Execute.
      this.setState({
        personCountError: message
      });
    } else if (count === "0") {
      // If the Given Value is Number = 0 Then this Part Will Execute.
      this.setState({
        personCountError: message
      });
    } else {
      // If the Given Value is Number > 0 Then this Part Will Execute.
      this.setState({
        personCount: count,
        personCountError: "",
        cardList: ""
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
    const { personCount, personCountError } = this.state;
    return (
      <div>
        <header className="App-header">
          <form className="card" onSubmit={this.handlerSubmit}>
            <TextField
              id="filled-with-placeholder"
              label="No of Person"
              margin="normal"
              variant="filled"
              name="personCount"
              placeholder="Enter Person Count"
              value={personCount}
              onChange={this.handlerChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>{personCountError}</div>
          </form>
          <CardList cardList={this.state.cardList} />
        </header>
      </div>
    );
  }
}
export default Card;
