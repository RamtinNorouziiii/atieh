import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Lazy} from "swiper";
import { Box, Image,Text } from "@chakra-ui/react";

export const News = ()=>{
    return(
        <Box borderRadius="28px" bgGradient='linear(to-t, #d9d9d9, #e8e8e8)'  m={"20px auto "}>
         <Text id="news" my={"60px"}  fontSize={25} textAlign="center" >
                خبرها
            </Text>
        <Swiper 
        style={{paddingBottom:"80px"}}
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
          <SwiperSlide>
            <Box mx={5} boxShadow="2xl" p="6" rounded="lg" bg="white">
              <Box flexShrink={0}>
                <Image
                  borderRadius="lg"
                  src="./assets/4.jpg"
                  w="100%"
                  alt="Woman paying for a purchase"
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
                  رشد 16.40 درصدی تراکنش‌های پایانه‌های «به‌پرداخت ملت» در نیمه
                  اول فروردین‌ماه سال جاری در مقایسه با مدت مشابه سال قبل
                </Text>

                <Text mt={2} color="gray.500">
                  تراکنش‌های مربوط به پایانه‌های شرکت به‌پرداخت ملت در
                  فروردین‌ماه امسال نسبت به مقطع زمانی مشابه در سال 1400 با رشد
                  16.4 درصدی مواجه شد. ...
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Box mx={5} boxShadow="2xl" p="6" rounded="lg" bg="white">
              <Box flexShrink={0}>
                <Image
                  borderRadius="lg"
                  src="./assets/8.jpg"
                  w="100%"
                  alt="Woman paying for a purchase"
                />
              </Box>
              <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} pt={5} > 
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="sm"
                  letterSpacing="wide"
                  color="teal.600"
                >
                  رشد 16.40 درصدی تراکنش‌های پایانه‌های «به‌پرداخت ملت» در نیمه
                  اول فروردین‌ماه سال جاری در مقایسه با مدت مشابه سال قبل
                </Text>

                <Text mt={2} color="gray.500">
                  تراکنش‌های مربوط به پایانه‌های شرکت به‌پرداخت ملت در
                  فروردین‌ماه امسال نسبت به مقطع زمانی مشابه در سال 1400 با رشد
                  16.4 درصدی مواجه شد. ...
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Box mx={5} boxShadow="2xl" p="6" rounded="lg" bg="white">
              <Box flexShrink={0}>
                <Image
                  borderRadius="lg"
                  src="./assets/9.jpg"
                  w="100%"
                  alt="Woman paying for a purchase"
                />
              </Box>
              <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} pt={5} > 
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="sm"
                  letterSpacing="wide"
                  color="teal.600"
                >
                  رشد 16.40 درصدی تراکنش‌های پایانه‌های «به‌پرداخت ملت» در نیمه
                  اول فروردین‌ماه سال جاری در مقایسه با مدت مشابه سال قبل
                </Text>

                <Text mt={2} color="gray.500">
                  تراکنش‌های مربوط به پایانه‌های شرکت به‌پرداخت ملت در
                  فروردین‌ماه امسال نسبت به مقطع زمانی مشابه در سال 1400 با رشد
                  16.4 درصدی مواجه شد. ...
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Box mx={5} boxShadow="2xl" p="6" rounded="lg" bg="white">
              <Box flexShrink={0}>
                <Image
                  borderRadius="lg"
                  src="./assets/5.jpg"
                  w="100%"
                  alt="Woman paying for a purchase"
                />
              </Box>
              <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} pt={5} > 
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="sm"
                  letterSpacing="wide"
                  color="teal.600"
                >
                  رشد 16.40 درصدی تراکنش‌های پایانه‌های «به‌پرداخت ملت» در نیمه
                  اول فروردین‌ماه سال جاری در مقایسه با مدت مشابه سال قبل
                </Text>

                <Text mt={2} color="gray.500">
                  تراکنش‌های مربوط به پایانه‌های شرکت به‌پرداخت ملت در
                  فروردین‌ماه امسال نسبت به مقطع زمانی مشابه در سال 1400 با رشد
                  16.4 درصدی مواجه شد. ...
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Box mx={5} boxShadow="2xl" p="6" rounded="lg" bg="white">
              <Box flexShrink={0}>
                <Image
                  borderRadius="lg"
                  src="./assets/6.jpg"
                  w="100%"
                  alt="Woman paying for a purchase"
                />
              </Box>
              <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} pt={5} > 
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="sm"
                  letterSpacing="wide"
                  color="teal.600"
                >
                  رشد 16.40 درصدی تراکنش‌های پایانه‌های «به‌پرداخت ملت» در نیمه
                  اول فروردین‌ماه سال جاری در مقایسه با مدت مشابه سال قبل
                </Text>

                <Text mt={2} color="gray.500">
                  تراکنش‌های مربوط به پایانه‌های شرکت به‌پرداخت ملت در
                  فروردین‌ماه امسال نسبت به مقطع زمانی مشابه در سال 1400 با رشد
                  16.4 درصدی مواجه شد. ...
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box mx={5} boxShadow="2xl" p="6" rounded="lg" bg="white">
              <Box flexShrink={0}>
                <Image
                  borderRadius="lg"
                  src="./assets/7.jpg"
                  w="100%"
                  alt="Woman paying for a purchase"
                />
              </Box>
              <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} pt={5} > 
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="sm"
                  letterSpacing="wide"
                  color="teal.600"
                >
                  رشد 16.40 درصدی تراکنش‌های پایانه‌های «به‌پرداخت ملت» در نیمه
                  اول فروردین‌ماه سال جاری در مقایسه با مدت مشابه سال قبل
                </Text>

                <Text mt={2} color="gray.500">
                  تراکنش‌های مربوط به پایانه‌های شرکت به‌پرداخت ملت در
                  فروردین‌ماه امسال نسبت به مقطع زمانی مشابه در سال 1400 با رشد
                  16.4 درصدی مواجه شد. ...
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    )
}