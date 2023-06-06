import React, {useEffect} from "react";
import './randomGet.css'
import {useDispatch, useSelector} from "react-redux";
import {getRandom} from "../../store/randomSlice";


const RandomGet = () => {
    const randoms = useSelector(state => state.random.random)
    console.log(randoms)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRandom())
    }, [])
    return (
        <div>
            Hello
        </div>
    )
}
export default RandomGet