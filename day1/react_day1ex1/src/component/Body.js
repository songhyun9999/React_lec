function Body(props){
    console.log(props)
    console.log(props.name)
    return(
        <div>
            <h1>body tag</h1>
            <h2>전달된 이름 : {props.name}</h2>
        </div>
    );
}

export default Body;