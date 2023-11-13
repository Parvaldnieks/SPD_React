function Quote(props) {
    return (
    <>
    <div key={props.index} >

        <h2>{props.author} </h2>
        <p>{props.quote} </p>
        

        <br></br>
        
    </div>
    </>
    );
}

export default Quote;