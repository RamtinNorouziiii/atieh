import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Lazy, Navigation } from "swiper";
import { Box, Image, Spinner } from "@chakra-ui/react";

export const StarterBanner = ({ banner }: any) => {
  return banner && banner.loading ? (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      m={"25% 50%"}
    />
  ) : (
    <Swiper
      style={{
        //@ts-ignore
        "--swiper-pagination-color": "#000",

        //@ts-ignore
        "--swiper-navigation-color": "#000",
        paddingTop: "45px",
        paddingBottom: "45px",
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
      {banner &&
        banner.data.map((res: any, index: any) => {
          return (
            <SwiperSlide key={index}>
              <Box mx={20}>
                <Image
                  className="checkImage"
                  borderRadius={40}
                  w={"100%"}
                  src={
                    res && `http://localhost:8000/api/v1/${res && res.image}`
                  }
                  h={{ base: "300px", md: "500px",lg:"700px" }}
                />
              </Box>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
