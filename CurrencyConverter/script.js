const droplist = document.querySelectorAll(".drop-list select")
let getbutton = document.querySelector("form button")

let fromCurrency = document.querySelector(".from select")
let toCurrency = document.querySelector(".To select")

for(let i = 0; i < droplist.length; i++){
     for(currency_code in country_code){

     // select USD and BDT by default
      let selelcted;
      if(i == 0){
         selelcted = currency_code == "USD" ? "selected" : "";
      }
      else if(i == 1){
         selelcted = currency_code == "BDT" ? "selected" : "";
      }

      //new option tag passing currency code as text and value using inner html
        let optionTag = `<option value="${currency_code}" ${selelcted}>${currency_code}</option>`;

      //Inserted option tag insiode select tag
        droplist[i].insertAdjacentHTML("beforeend", optionTag)
     }
}

getbutton.addEventListener("click", e=>{
   e.preventDefault();
   getExchangeRate();
});

function getExchangeRate(){
   const amount = document.querySelector(".amount input");
   let amountVal = amount.value;

   if(amountVal == "" || amountVal == "0"){
      amountVal.value = "1";
      amountVal = 1;
   }

  let url = `https://v6.exchangerate-api.com/v6/1d9fd73bcae08e66248df0e1/latest/USD ${fromCurrency.value}`;
  fetch(url).then(response =>response.json()).then(result => {
      let exchangeRate = result.conversion_rates[toCurrency.value];
     console.log(exchangeRate);
  })


//   fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_iqpuBVcqoEk7IgxkV426xLBWX515Xd3ug58znGVM ${fromCurrency.value}").then(response =>response.json()).then(result => {
//      console.log(result);
//   })
   
}

