// const Body2 = (props) => {
//     console.log(props)
//     return(
//         <div>
//             <h2>body2!!!!</h2>
//             <h3>{props.name}은(는) {props.location}에 거주합니다.</h3>
//         </div>
//     )
// }

const Body2 = ({name,location}) => {
    console.log('body2:',name,location)
    return(
        <div>
            <h2>body2!!!!</h2>
            <h3>{name}은(는) {location}에 거주합니다.</h3>
        </div>
    )
}

export default Body2;