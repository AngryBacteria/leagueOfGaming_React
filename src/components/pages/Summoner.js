import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import useFetch from "../scripts/useFetch";


const Summoner = () => {

    const {name} = useParams()
    const [summoner, setSummoner] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:8080/api/summoner/stats/name/${name}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setSummoner(data);
                setIsPending(false)
            })
    }, [])

    return (
        <div>
            {isPending &&
                <button className="btn btn-Secondary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            }
            {summoner && <p>{JSON.stringify(summoner, null, 4)}</p>}
        </div>
    );
};

export default Summoner;
