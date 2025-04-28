function FruitList({fruits}){
    return(
        <ul>
            {fruits.map((fruits,index)=>(
                <li key={index}>{fruits}</li>
            ))}
        </ul>
    )
}

export default FruitList;