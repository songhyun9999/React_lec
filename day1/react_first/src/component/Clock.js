import './Clock.css';

function Clock(){
    let dateA = new Date()
    return (
        <div style = {{backgroundColor:'yellow',color:'red'}}>
            <h1 className='clocktitle'>시간 태그</h1>
            <h2>현재 날짜:{dateA.getFullYear()}년 {dateA.getMonth()+1}월 {dateA.getDate()}일</h2>
        </div>
    )

}

export default Clock