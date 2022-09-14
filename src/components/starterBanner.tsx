import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Lazy, Navigation } from "swiper";
import {Box, Image} from "@chakra-ui/react";

export const StarterBanner = ({banner}:any)=>{
  
    return(
        <Swiper
        style={{
          //@ts-ignore
          "--swiper-pagination-color": "#000",

          //@ts-ignore
          "--swiper-navigation-color": "#000",
          paddingTop:"45px",
          paddingBottom:"45px"
        }}
        modules={[Autoplay, Pagination, Lazy, Navigation]}
        slidesPerView={1}
       
        navigation
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        lazy={{
          enabled: true,
          loadPrevNext: false,
          loadOnTransitionStart: true,
        }}
        preloadImages={false}
      >
        <SwiperSlide  >
          <Box mx={20}  >
          <Image className="checkImage" borderRadius={40}  w={"100%"}   src="./assets/header.jpg" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box mx={20}>
          <Image className="checkImage" borderRadius={40}  w={"100%"}   src="./assets/header.jpg" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box mx={20}>
          <Image className="checkImage" borderRadius={40}  w={"100%"}   src="./assets/header.jpg" />
          </Box>        </SwiperSlide>
      </Swiper>
    )
}