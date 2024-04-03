import { useEffect, useState } from "react";
import '../styles/custom-image.scss'; 

const CustomImage = ({ url }) => {
    const [status, setStatus] = useState(1);

    useEffect(() => {
        const image = new Image();

        image.onload = function(){
            setStatus(3);
        }

        image.onerror = function(){
            setStatus(2);
        }

        image.src = url;
    }, [url]); // Added url to the dependency array to re-run the effect when the URL changes

    if (status === 1) return <div className="image-loading-skeleton"></div>;

    if(status === 2) return <p>Loading Error</p>;

    return (
        <img src={url} width={200} alt="" />
    );
}

export default CustomImage;
