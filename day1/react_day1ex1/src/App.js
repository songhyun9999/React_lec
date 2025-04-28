import './App.css';
import Body from './component/Body';
import Body2 from './component/Body2';
import Body3 from './component/Body3';
import Body4 from './component/Body4';
import FruitList from './component/FruitList';
import CommentList from './component/CommentList';
import Body5 from './component/Body5';
import Body6 from './component/Body6';


function ChildComp(){
  return <div>child component</div>
}

function App() {
  const name = '임가';
  const city = '서울';
  const BodyProps = {
    name:'최가',
    location:'인천'
  }
  const BodyProps2 = {
    name:'오가',
    location:'수원',
    // favorList:['파스타','빵','떡볶이']
  }
  const fruitList = ['apple','banana','mango']
  return (
    <div className="App">
      {/* <Body name = {name}/>
      <Body2 name = {name} location = {city} />
      <Body3 {...BodyProps}/>
      <Body4 {...BodyProps2}/> */}
      {/* <FruitList fruits={fruitList}/> */}
      {/* <CommentList/> */}
      <Body5>
        <ChildComp/>
      </Body5>
      <Body6/>
    </div>
  );
}
// ...BodyProps -> 스프레드 형식으로 여러 인자를 넘겨줄때 사용하는 방식
export default App;
