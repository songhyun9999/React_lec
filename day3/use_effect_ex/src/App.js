import './App.css';
import { useState, useEffect, useRef} from "react";
import Viewer from './component/Viewer';
import Controller from './component/Controller';


function App() {
  const [count,setCount] = useState(0)
  const [text,setText] = useState('')

  const handleSetCount = (value) => {
    setCount(count+value)
  }
  const handleChangeText = (e) => {
    setText(e.target.value);
  }
  const didMountRef = useRef(false)
  useEffect(()=>{
    if(!didMountRef.current){
      console.log('component mount')
      didMountRef.current = true
      return
    }
    console.log('component call')
  })

  // useEffect(()=>{console.log('use effect Count update call!!')},[count])
  // useEffect(()=>{console.log('use effect Text update call!!')},[text])
  // useEffect(()=>{console.log('component mount')},[])
  // useEffect(()=>{console.log('component call')})

  return (
    <div className="App">
    <h1>Simple Counter</h1>
    <section>
      <input value={text} onChange={handleChangeText}/>
    </section>
    <section>
      <Viewer count={count}/>
    </section>
    <section>
      <Controller handleSetCount={handleSetCount}/>
    </section>
    </div>
  );
}

export default App;
