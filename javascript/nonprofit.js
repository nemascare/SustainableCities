let button = document.querySelector("#submit");
let mode = true;
button.onclick = function () {
  let nameFirst = document.querySelector("#first-name");
  let nameLast = document.querySelector("#last-name");
   let nameFirstValue = nameFirst.value;
  let nameLastValue = nameLast.value;
   let charity = document.querySelector("#select");
  let money = document.querySelector("#payment");
  let moneyValue = money.value;
    let charityValue = charity.value;
      let date = document.querySelector("#calender");
      let dateValue = date.value;
      let array = [nameFirstValue,nameLastValue,moneyValue,charityValue,dateValue]
  alert(
    "Thank you " +
      nameFirstValue +
      " " +
      nameLastValue +
      " for your generous donation of $" +
      moneyValue +
      " to  " +
      charityValue +
      " on " +
      dateValue +
      "."
  )
  for (let x = 0; x < array.length; x++) {
          array[x].value = ""
  }

  // let nameFirst = document.querySelector("#first-name");
  // let nameLast = document.querySelector("#last-name");
  // let date = document.querySelector("#calender");
  // let charity = document.querySelector("#select");
  // let mail = document.querySelector("#email");
  // let phone = document.querySelector("#cell");
  // let money = document.querySelector("#payment");
  // let nameFirstValue = nameFirst.value;
  // let nameLastValue = nameLast.value;
  // let dateValue = date.value;
  // let charityValue = charity.value;
  // let mailValue = mail.value;
  // let phoneValue = phone.value;
  // let moneyValue = money.value;
  // let array = [
  //   nameFirstValue,
  //   nameLastValue,
  //   dateValue,
  //   charityValue,
  //   mailValue,
  //   phoneValue,
  //   moneyValue,
  // ];
  // let array2 = [nameFirst, nameLast, date, charity, mail, phone, money];
  // for (let x = 0; x < array.length; x++) {
  //   if (array[x] == "") {
  //     mode = false;
  //     alert("Please fill in all required information.");
  //     break;
  //   }
  // }
  // if (mode) {
  //   if (
  //     confirm(
  //       nameFirstValue +
  //         " " +
  //         nameLastValue +
  //         " is all of the provided infromation correct?"
  //     )
  //   ) {
  //     alert(
  //       "Thank you " +
  //         nameFirstValue +
  //         " " +
  //         nameLastValue +
  //         " for your generous donation of $" +
  //         moneyValue +
  //         " to  " +
  //         charityValue +
  //         " on " +
  //         dateValue +
  //         "."
  //     );
  //     for (let x = 0; x < array2.length; x++) {
  //       array2[x].value = "";
  //     }
  //   } else {
  //     alert("Please confirm all your information.");
  //   }
  // }
};
