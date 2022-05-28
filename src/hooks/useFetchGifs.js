import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria)=>{
    const [state, setState] = useState({
        data: [],
        loanding: true
    })

    useEffect(()=>{
        getGifs(categoria)
        .then(img =>{
            setState({
                data: img,
                loanding: false
            })
        })

    }, [categoria])
    return state  //el state no es mas que el resultado del state es decir {data[], loanding: true}
}