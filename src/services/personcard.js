import TestModel from "./test";

const CardData = personCount => {
  return new Promise((resolve, reject) => {
    fetch(`http://127.0.0.1:8080/api/card.php?personCount=` + personCount, {
      method: "GET"
    })
      .then(response => response.json())
      .then(res => {
        resolve((cardModel.cardlist = res));
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default CardData;
