import React, {useEffect} from "react";
import './randomGet.css'
import {useDispatch, useSelector} from "react-redux";
import {getRandom} from "../../store/randomSlice";
import Random from "./random/random";


const RandomGet = () => {
    const randoms = useSelector(state => state.random.random.results)
    console.log(randoms)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRandom())
    }, [])
    const handleRefresh = () => {
        dispatch(getRandom());
    };
    return (
        <div>
            <button onClick={handleRefresh}>Refresh</button>
            {Object.keys(randoms).map(key => {
                return <Random key={key}
                               image={randoms[key].picture.large}
                               text={randoms[key].name.first}/>

            })}
        </div>
    )
}
export default RandomGet