import React ,{useState} from "react";


function Counter(){
    let value = 0;
    const [newValue ,setvalue] = useState(value);
    
    const handleInc = () =>{
        let ans = newValue;
        ans++;
        setvalue(ans);
    }

    const handleDec = () =>{
        let ans  = newValue;
        ans--;
        setvalue(ans);
    }

    return(
        <div className="h-[200px] w-[200px] text-white text-center  rounded-md m-9">
            <h1 className="text-center  mb-7 text-[2rem]">Counter</h1>
            <div className=" flex gap-7 bg-fuchsia-900 justify-around items-center h-[100px] rounded-xl w-auto pl-10 pr-10">
                <button onClick={handleInc} className="text-white text-[2rem] border-r-[3px] border-red-500 pr-6"> + </button>
                <h1 className="text-white text-[1.5rem]">{newValue}</h1>
                <button onClick={handleDec} className="text-white text-[2rem] border-l-[3px] border-red-500 pl-6">-</button>
            </div>

        </div>
    );
}
export default Counter;