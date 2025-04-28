function Comment({commentDict}){
    return(
        <div style = {{backgroundColor:'Orange'}}>
            <h1>{commentDict.name}</h1>
            <h3>{commentDict.comment}</h3>
        </div>
    )
    
}

export default Comment