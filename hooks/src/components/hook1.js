import React,{useState} from 'react'

const Hook1 = () =>{
    const [count,setcount] = useState(0);
    return (
        <div>
            {count}
            <button onClick={() => setcount(count+1)}>click me</button>
        </div>
    )
}

export default Hook1
