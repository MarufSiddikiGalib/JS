class Product{
      constructor(name, price, discount, productCode){
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
      }


}

let airpod = new Product('Airpod', 2000, '10%', 123);

const Product1 = class Product{
    constructor(name, price, discount, productCode){
      this.name = name;
      this.price = price;
      this.discount = discount;
      this.productCode = productCode;
    }
      get getDiscount(){
          return this.discount;
      }

      set setDiscount(value){
           this.discount = value;
      }
       discountValue(){
         return this.discount * this.price / 100;
       }

}
let speaker = new Product1('KO7', 1200, 10, 1234);
