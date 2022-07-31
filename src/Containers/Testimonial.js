import React, { useEffect, useState } from 'react';
import { Testimonial, Highlight } from '../Components';
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function TestimonialContainer() {
    const [ testimonies, setTestimonies ] = useState(null)

    useEffect( () => {
        let isApiSubscribed = true;
        axios.get('https://wknd-take-home-challenge-api.herokuapp.com/testimonial')
        .then(function (response) {
            // handle success
            if (isApiSubscribed) {
                setTestimonies(response.data)
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });

        return () => {
            // cancel the subscription
            isApiSubscribed = false;
        };
    }, [])

    let testi = <p style={{color: '#fff', fontSize: '60px'}}>loading</p>

    if(testimonies){
        testi = testimonies.map((item) => (
            <SwiperSlide key={item.id}>
                <Testimonial.Title>{item.by}</Testimonial.Title>
                <Testimonial.Content>
                    {item.testimony}
                </Testimonial.Content>
            </SwiperSlide>
        ))
    }

    return (
        <Testimonial>
            <Highlight.Title>Testimonial</Highlight.Title>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                scrollbar={{ draggable: true }}
                className="mySwiper"
            >
                {testi}   
            </Swiper>
        </Testimonial>
    );
}

export default TestimonialContainer