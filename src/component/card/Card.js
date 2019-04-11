import React, { Component } from "react";
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
    if (isNaN(count)) {
      // If the Given Value is Not Number Then It Will Return True and This Part Will Execute.
      this.setState({
        personCountError: "Input value does not exist"
      });
    } else {
      // If the Given Value is Number Then It Will Return False and This Part Will Execute.
      this.setState({
        personCount: count,
        personCountError: ""
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

  componentDidMount() {}
  render() {
    const { personCount, personCountError } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}
export default Card;
