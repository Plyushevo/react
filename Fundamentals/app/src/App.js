import React, {useState} from "react";
import Counter from "./Components/Counter";

function App() {
  const [likes, setLikes] = useState(5)
  const [value, setValue] = useState('text')

  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
