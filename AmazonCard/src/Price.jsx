function Price({oldPrice,newPrice}){
    let styles={
        backgroundColor:"yellow",
        borderRadius:"30px",
        padding:"2px",
        marginBottom:"5px"
    }
    return(
        <div style={styles}>
            <p> oldPrice= {oldPrice}</p>
            <p> newPrice= {newPrice}</p>
        </div>
    )
}

export default Price