import React, {useEffect, useState} from "react";
import './randomGet.css'
import {useDispatch, useSelector} from "react-redux";
import {getRandom} from "../../store/randomSlice";
import Random from "./random/random";


const RandomGet = () => {
    const randoms = useSelector(state => state.random.random.results)
    console.log(randoms)
    const [find, setFind] = useState('')
    const [sort, setSort] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRandom())
    }, [dispatch])
    const handleRefresh = () => {
        dispatch(getRandom());
    };
    const handleFind = (event) => {
        setFind(event.target.value)
    }
    const handleSort = () => {
        setSort(!sort)
    }
    let findRandom = randoms.filter((random) =>
        random.name.first.toLowerCase().includes(find.toLowerCase())
    );
    if (sort) {
        findRandom = findRandom.sort((a, b) =>
            a.name.first.localeCompare(b.name.first)
        );
    }

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
            <div className={'divOfButton'}>
                <button className={'button'} onClick={handleSort}>Sort</button>
                <button className={'button'} onClick={handleRefresh}>Refresh</button>
            </div>
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