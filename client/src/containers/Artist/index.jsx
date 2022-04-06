import React, { useState } from 'react'

import { GET_ARTIST } from '../../graphql/queries'
import Stats from '../../components/Stats'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

/*
 * Query loading and errors are not handled since this is a simple test case
 */
const Artist = () => {
    let { artistId } = useParams();
    const [timeframe, setTimeframe] = useState(1)
    const { data } = useQuery(GET_ARTIST, {
        variables: { id: artistId },
    });

    const onInstagramClicked = () => {
        document.location.href = `https://www.instagram.com/${data.artist.instagramId}`
    }

    const onTwitterClicked = () => {
        document.location.href = `https://www.twitter.com/${data.artist.twitterId}`
    }

    const onSpotifyClicked = () => {
        document.location.href = data.artist.spotifyUrl
    }
    
    return (
        <div>
            {data && data.artist && (
                <div className="flex flex-col relative">  
                    <img className="md:w-3/5" src={data.artist.image}/>
                    <div className="md:absolute md:w-[80%] h-full right-0 md:bg-gradient-to-l via-[#F6F6FA] from-[#F6F6FA]">
                        <div className="md:absolute left-1/2 px-6 py-8 md:w-1/2 md:pb-20">
                            <div className="text-6xl lg:text-6xl md:text-4xl font-black">{data.artist.name}</div>
                            <div className="flex h-9 gap-4 mt-6">
                                {data.artist.instagramId && <img onClick={onInstagramClicked} className="cursor-pointer object-fit" src={require("../../images/instagram.png")}/>}
                                {data.artist.twitterId && <img onClick={onTwitterClicked} className="cursor-pointer" src={require("../../images/twitter.png")}/>}
                                {data.artist.spotifyUrl && <img onClick={onSpotifyClicked} className="cursor-pointer" src={require("../../images/spotify.png")}/>}
                            </div>
                            <div className="flex w-full flex-grow justify-between py-10 font-mono font-black text-xs text-center">
                                <div className={`cursor-pointer rounded-lg p-2 w-1/3 mr-2 ${timeframe === 1 ? 'bg-cyan-200' : 'bg-gray-200 hover:opacity-70'}`}onClick={() => { setTimeframe(1) }}>
                                    Jour
                                </div>
                                <div className={`cursor-pointer rounded-lg p-2 w-1/3 mr-2 ${timeframe === 7 ? 'bg-cyan-200' : 'bg-gray-200 hover:opacity-70'}`} onClick={() => { setTimeframe(7) }}>
                                    Semaine
                                </div>
                                <div className={`cursor-pointer rounded-lg p-2 w-1/3 mr-2 ${timeframe === 30 ? 'bg-cyan-200' : 'bg-gray-200 hover:opacity-70'}`} onClick={() => { setTimeframe(30) }}>
                                    Mois
                                </div>
                            </div>
                            <Stats artistId={artistId} timeframe={timeframe}/>
                        </div>
                    </div>
                </div>  
            )}  
        </div>
    )
}

export default Artist
