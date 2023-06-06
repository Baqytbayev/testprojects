import React, {useEffect, useState} from "react";
import './randomGet.css'
import {useDispatch, useSelector} from "react-redux";
import {getRandom} from "../../store/randomSlice";
import Random from "./random/random";


const RandomGet = () => {
    const randoms = useSelector(state => state.random.random.results)
    console.log(randoms)
    const [find, setFind] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRandom())
    }, [])
    const handleRefresh = () => {
        dispatch(getRandom());
    };
    const handleFind = (event) => {
        setFind(event.target.value)
    }
    const findRandom = randoms.filter((random) => random.name.first.toLowerCase().includes(find.toLowerCase()))
    return (
        <div className={'info'}>
            <form onChange={handleFind}>
                <input
                    className={'input'}
                    type={'text'}
                    value={find}
                    placeholder={'find by name'}
                />
                <button className={'findButton'}>Find</button>
            </form>
            <button className={'button'} onClick={handleRefresh}>Refresh</button>
            {findRandom.map((random, i) => (
                <Random
                    key={i}
                    image={random.picture.large}
                    text={random.name.first}
                />
            ))}
        </div>
    )
}
export default RandomGet