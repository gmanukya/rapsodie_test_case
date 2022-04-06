import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const redirectHome = (artistId) => {
        navigate('/');
    };

    return (
        <div className="z-10 w-screen flex-col h-28 px-8 py-6">
            <div className="flex justify-between">
                <div className="cursor-pointer font-mono text-4xl font-black" onClick={redirectHome}>Rapsodie</div>
                <div className="flex mt-3">
                    <div className="cursor-default rounded-3xl p-2 px-4 mr-2 bg-gray-200 font-mono font-black text-sm">78.1k</div>
                    <div className="cursor-default rounded-full p-2 px-4 bg-cyan-400 bg-opacity-50 font-mono font-black text-sm">Ti</div>
                </div>
            </div>
            <div className="flex">
                <div className="font-sans cursor-default text-md font-bold opacity-50">RapsoligueDuFeu</div>
            </div>
        </div>
    )
}

export default Header
