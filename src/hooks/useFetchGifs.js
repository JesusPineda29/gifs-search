import { useState, useEffect } from "react";
export default function useFetchGifs( category) {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }


    useEffect(() => {
        getImages();
    }, []);


    return {
        images: [],
        isLoading: true
    }
}


