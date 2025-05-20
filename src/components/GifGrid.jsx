import { useEffect, useState } from "react";

import GifItem from "./GifItem";
import { getGifs } from "../helpers/getGifs";
import useFetchGifs from "../hooks/useFetchGifs";




export const GifGrid = ({ category }) => { 




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
