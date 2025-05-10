import "./Product.css";
import Price from "./Price.jsx";

function Product({title, idx}) {
            
          let oldPrice = ["12,495", "11,900", "1,599", "599"];
          let newPrice = ["8,999", "9,199", "899", "278"];

          let Description = [
                     ["8,000 DPI", "5 Programmable button"],
                     ["intiutive Surface", "designed for iPad Pro"],
                     ["designed for iPad Pro", "inituitive Surface"],
                     ["wireless", "optical orientation"],
          ];

          return (

               <div className="product">
               <h3> {title} </h3>
               <p>{Description [idx] [0]} </p>
               <p>{Description [idx] [1]} </p>
               <Price oldPrice = {oldPrice [idx]} newPrice = {newPrice[idx]} />
          </div>
          );
     } 

export default Product;