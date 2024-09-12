import "./Product.css";

import Price from "./Price";
function Product({title,idx}){
    const oldPrice = ["73,200","49,000","10,000","80,000"];
    const newPrice = ["65,000","30,000","6,000","75,000"]

    const description = ["8gb RAM","high performance","mostly Used","very good"]
    return (
        <div className="Product">
            <h3>title: {title}</h3>
            <h5>desc: {description[idx]}</h5>
            
            <Price oldPrice= {oldPrice[idx]} newPrice= {newPrice[idx]}/>
        </div>
    )
}

export default Product;