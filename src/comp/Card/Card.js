import { useState } from "react";

const ReadMore = ({ text, maxLength }) => {
    const [isTruncated, setIsTruncated] = useState(true);

    const toggleTruncate = () => {
        setIsTruncated(!isTruncated);
    };

    const displayText = isTruncated ? text.split(' ').slice(0, maxLength).join(' ') : text;

    return (
        <div>
            <p style={{ color: 'white' }}>{displayText}</p>
            {text.split(' ').length >= maxLength && (
                <button onClick={toggleTruncate} className='text-white'>
                    {isTruncated ? 'Read More' : 'Read Less'}
                </button>
            )}
        </div>
    );
};


const ResponsibilityCard = ({ title, description, imageUrl }) => {
    
    return (
        <div className="bg-opacity-80 block rounded-lg border shadow-xl border-gray-800 p-4 sm:p-6 m-2 hover:scale-105 duration-150 transform cursor-pointer transition hover:border-pink-500/10 hover:shadow-pink-500/10" id="res">
            <img className="w-36 sm:w-40 h-32 sm:h-36 object-fill mx-auto mb-4" src={imageUrl} alt={title} />
            <h2 className="text-xl sm:text-2xl text-white font-semibold mb-2"><b>{title}</b></h2>

            <ReadMore text={description} maxLength={10} />
        </div>
    );
};

export { ResponsibilityCard };