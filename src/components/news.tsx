import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Lazy } from "swiper";
import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import { data } from "dom7";

export const News = ({ news }: any) => {

  return (
   
     
     <Box borderRadius="28px" bgGradient='linear(to-t, #d9d9d9, #e8e8e8)' m={"5px auto "}
     width="100%" maxW={"100%"}
    
     backgroundImage="url('/assets/news.jpg')"
       backgroundRepeat="no-repeat"
       backgroundSize="cover"
     backgroundAttachment="fixed"
     
     >
    <Text py={20}  id="news"  fontSize={25} textAlign="center" >
      خبرها
    </Text>
    {
      news && news.loading ?(
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          m={"25% 50%"}
        />
      )  :    <Swiper
      style={{ paddingBottom: "80px" }}
      modules={[Pagination, Lazy, Autoplay]}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      breakpoints={{
        200: {
          slidesPerView: 1.5,
        },
        850: {
          slidesPerView: 3.5,
        },
        1050: {
          slidesPerView: 3.5,
        },
      }}
      slidesPerView={3}
      lazy={{
        enabled: true,
        loadPrevNext: false,
        loadOnTransitionStart: true,
      }}
      preloadImages={false}
    >
      {
        news && news.data.map((res: any, index: any) => {
          return (
            <SwiperSlide key={index} >
              <Box mx={5} boxShadow="2xl" p="6" rounded="lg" bg="white">
                <Box flexShrink={0}>
                  <Image
                    borderRadius="lg"
                    src={res &&`http://localhost:8000/api/v1/${res && res.image}`}
                    w="100%"
                    alt="news"
                    h={"150px"}
                  />
                </Box>
                <Box pt={5} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}  >
                  <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color="teal.600"
                  >
                    {res.title}
                  </Text>
                  <Text mt={2} color="gray.500">
                    {res.shortDesc}
                  </Text>
                </Box>
              </Box>
            </SwiperSlide>
          )
        })
      }
    </Swiper>

    }
  </Box>

  )
}