import { GET_ARTIST_STATS } from '../graphql/queries'
import React from 'react'
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

/*
 * Query loading and errors are not handled since this is a simple test case
 */
const Stats = ({ artistId, timeframe }) => {
    const [title, setTitle] = useState("Bénéfices du jour")
    const { data } = useQuery(GET_ARTIST_STATS, {
        variables: { id: artistId, timeframe },
    });

    useEffect(() => {
        if (timeframe === 1) {
            setTitle("Bénéfices du jour")
        } else if (timeframe === 7) {
            setTitle("Bénéfices de la semaine")
        } else if (timeframe === 30) {
            setTitle("Bénéfices du mois")
        }
    }, [timeframe]);

    return (
        <div>
            {data && data.artistStats && (
                <div className="cursor-default">
                    <div className="font-bold opacity-60 mb-4">{title}</div>
                    <div className="font-black text-4xl lg:text-4xl md:text-lg">{data.artistStats.benefs}€</div>
                    {data.artistStats.benefsDelta && (
                        <div className={`font-bold text-xl lg:text-xl md:text-sm ${data.artistStats.benefsDelta >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {data.artistStats.benefsDelta >=0 ? "+" : ""}{data.artistStats.benefsDelta}€ ({data.artistStats.benefsProg}%)
                        </div>
                    )}
                    <div className="flex items-center mb-2 mt-10">
                        <div className="flex justify-center items-center rounded-lg w-10 h-10 bg-orange-400 text-white font-black text-lg opacity-50 mr-3">R</div>
                        <div className="flex justify-between w-full font-bold opacity-60">
                            <div>Revenues</div>
                            <div>{data.artistStats.revenues}€</div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex justify-center items-center rounded-lg w-10 h-10 bg-cyan-400 text-white font-black text-lg opacity-50 mr-3">S</div>
                        <div className="flex justify-between w-full font-bold opacity-60">
                            <div>Salaire</div>
                            <div>{data.artistStats.salaries}€</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Stats