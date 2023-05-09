import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
export default function SwiperJs({children}: any) {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {children}
            </Swiper>
        </>
    )
}