import React, { useState } from "react";
function Counter(props){
    const [count,setCount] = useState(0);
    return(
        <div>
            <h2>Counter</h2>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1 )}>Increase</button>
        </div>
    )
}
export default Counter;