import Product from "./Product.jsx";

function ProductCard(){
    let styles  = {
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"20px"
       

    };
    return (
        
        <div style={styles} >
            <Product title = "MacBook Aor m1" idx={0}/>
            <Product title="I-Pad" idx={1}/>
            <Product title="Apple Watch" idx={2}/>
            <Product title="I Phone" idx={3}/>

        </div>
    )
}

export default ProductCard;