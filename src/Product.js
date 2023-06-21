import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Product(){
    const [data, setData] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        fetch('http://localhost:3001/scates/' + id)
        .then(res => res.json())
        .then(res => setData(res))
    }, [])

   
  
    
    
    return(
        <div className="thisProduct">
            <div className="thisProductImg">
                <img src={data.img} />
            </div>
            <div className="thisProductText">
                <h1 className="txt"><del>{data.oldprice}$</del> </h1>
                <h1 className="txt">{data.newprice}$</h1>
                <h3 className="txt">{data.brand}</h3>
                <h5 className="txt">{data.name}</h5>
                <p className="txt">{data.about}</p>

            </div>
        </div>
    )
}