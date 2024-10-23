function clickFunction(){
    console.log("Hello!")
    // alert("the button get clicked");

}
function c(){
    setTimeout(clickFunction,1000);
}

export default  function ClickEvent(){
    return (
        <>
            <button onClick={c}>click me</button>
        </>
    )
}