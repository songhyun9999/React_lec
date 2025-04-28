    // 현재 19버전 사용방법 (전달되는 인자 초기화를 default 값을 지정하여 사용함)
function Body4({name,location,favorList=[]}){
    console.log('body4:',name,location,favorList)
    return(
        <div>
            <h2>body4~~~~~~~~~~~~~~~~~!@#$</h2>
            <h3>{name}은(는) {location}에 거주함.</h3>
            {favorList.length}개의 음식을 좋아합니다.
        </div>
    )

}

// 이전 버전에서 사용방법
// Body4.defaultProps = {
//     favorList: []
// }



export default Body4;