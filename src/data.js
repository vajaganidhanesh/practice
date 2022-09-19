// import { useRef } from "react";

function Data()
{

    // let [data,setData] = useState([])
        // let datas =useRef([])

   function dataclick()
   {
    fetch('../data.json')
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        // datas.current(data);
        // console.log(datas);
       
    })

    .catch((err)=>{
     console.log(err);
    })
   }


    return(
        <>
      
            <button onClick={dataclick}>click</button>

        </>
    )
}

export default Data