import { GET_ALL_ARTISTS } from '../../graphql/queries'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';

/*
 * Query loading and errors are not handled since this is a simple test case
 */
const Home = () => {
    const { data } = useQuery(GET_ALL_ARTISTS);
    const navigate = useNavigate();

    const onArtistClick = (artistId) => {
        navigate('/artist/' + artistId);
    };

    return (
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 py-16 mx-16">
                {data && data.allArtists.map(artist => (  
                    <div className="cursor-pointer hover:opacity-80 hover:scale-[1.01] transition ease-in-out delay-50" key={artist.id}>  
                        <img className="h-5/6 w-full rounded-tl-2xl rounded-tr-2xl object-cover aspect-square" src={artist.image} onClick={() => onArtistClick(artist.id)}/> 
                        <div className="bg-gray-200 h-14 rounded-bl-2xl rounded-br-2xl font-sans subpixel-antialiased font-semibold flex items-center pl-4 cursor-default">
                            {artist.name}
                        </div>
                    </div>  
                ))} 
            </div> 
        </div>
    )
}

export default Home
