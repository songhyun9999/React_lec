// function Body3(){
//     const num = 20;
//     return (
//         <>
//             <h2>
//                 {num}은(는) {num%2 == 0 ? "짝수":"홀수"}입니다
//             </h2>
//         </>
//     )
// }

function Body3(){
    const num = 21;

    if (num%20 === 0){
        return <div>{num}은 짝수입니다.</div>
    }else{
        return <div>{num}은 홀수입니다.</div>
    }
    return (
        <>
            <h2>
                {num}은(는) {num%2 == 0 ? "짝수":"홀수"}입니다
            </h2>
        </>
    )
}

export default Body3