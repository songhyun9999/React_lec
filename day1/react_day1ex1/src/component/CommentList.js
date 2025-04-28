import Comment from "./Comment";

const comments = [
    {
        name:'임가',
        comment:'안녕하세요 임가입니다.'
    },
    {
        name:'최가',
        comment:'리엑트 재미있네요.'
    },
    {
        name:'오가',
        comment:'리엑트는 프론트에서 유용합니다.'
    }
];

function CommentList(){
    return(
        <div>
            {comments.map((comments,index)=>(
                <Comment key={index} commentDict={comments}/>
            ))}
        </div>
            
        
        
    )
}

export default CommentList
