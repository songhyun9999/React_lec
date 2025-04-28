function Body6(){
    function handleOnClick(e){
        console.log(e)
        console.log(e.target)
        console.log(e.target.name)
        alert('버튼 클릭!!!')
    }

    return (
        <div>
            <button name="btnA" onClick={handleOnClick}>click!!</button>
            <button name="btnB" onClick={handleOnClick}>click!!</button>
        </div>
    )
}

export default Body6