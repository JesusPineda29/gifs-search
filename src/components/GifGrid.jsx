import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";
import GifItem from "./GifItem";


export const GifGrid = ({ category }) => { 

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }


    useEffect(() => {
        getImages();
    }, []);


    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {
                    images.map(image => (
                        <GifItem
                            key={image.id}
                            title={image.title}
                            url={image.url}

                        />

                    ))
                }
            </div>

        </>
    )
}
