import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Body2 from './component/Body2';
import Body3 from './component/Body3';
import Clock from './component/Clock';

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Body/>
//       <Body2/>
      
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Header/>
      <Body3/>
      <Clock/>
    </div>
  );
}

export default App; // export default 를 통해 함수 정의 -> 외부에서 접근할 수 있도록함
                    // import 구문을 통해 읽을 수 있게 하는 것
