import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Lazy } from "swiper";
import { ReactNode } from "react";
import {
  FaPlane,
  FaHandshake,
  FaRegAddressCard,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import { MdSupport } from "react-icons/md";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Link,
  Spinner,
} from "@chakra-ui/react";
import { GrPersonalComputer } from "react-icons/gr";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      zIndex={10000}
    
      // bg={useColorModeValue('white', 'gray.800')}
      backgroundColor="#efd9b0"
      boxShadow={"lg"}
      p={"12px"}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
     
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
  url,
}: {
  src: string;
  name: string;
  title: string;
  url?: string;
}) => {
  return (
    <Flex align={"center"} mt={"10px"} direction={"column"} zIndex={10}>
      <Link href={url}>
        <Avatar src={src} objectFit="contain" showBorder={false} size="2xl" />
      </Link>
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export function SubCo({ alias }: any) {
  //<FaPlane style={{ display: "inline-block", marginLeft: "10px", verticalAlign: "middle" }} />
  return (
    <Box bg="#e8e8e8">
      <Container maxW={"100%"} py={16} as={Stack} spacing={12}>
        <Stack align={"center"}>
          <Text fontSize={25} mt={13} mb={10}>
            {" "}
            تاسیس شرکت های فرعی در حوزه های مختلف
          </Text>

          {/* <Text   fontSize={25} mt={13} mb={10} > شرکتهای تابعه</Text>
          <Text w={"75%"} boxShadow="xl" p={20} rounded="lg" textAlign="justify" style={{textAlignLast:"end"}}   >
            شرکت مدیریت سرمایه آتیه خواهان به شماره ثبت 387808 مورخ 89/08/01 به
            عنوان بازوی اجرایی صندوق تامین آتیه کارکنان بانک ملت ماموریت دارد منابع
            مازاد صندوق را در بازارهای اقتصادی سودآور که اطمینان حاصل نماید بازده
            آنها با در نظر داشتن ریسک های موجود، به طور متوسط معادل نرخ سپرده های
            بلند مدت بانکی به علاوه حداقل 50 درصد نرخ مذکور به عنوان صرف ریسک است،
       بکار گرفته و از این طریق در جهت حداکثر کردن ثروت سهامداران اهتمام ورزد</Text> */}
        </Stack>
        <Stack display="bolck" direction={{ md: "row" }}>
          {alias && alias.loading ? (
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
              modules={[Pagination, Lazy, Autoplay]}
              dir="rtl"
              autoplay={{
                delay: 5000,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
              }}
              loop={true}
              onChangeDirection={() => {}}
              breakpoints={{
                200: {
                  slidesPerView: 1.3,
                },

                370: {
                  slidesPerView: 1.3,
                },
                850: {
                  slidesPerView: 2,
                },

                1000: {
                  slidesPerView: 4.3,
                },
                2000: {
                  slidesPerView: 4.3,
                },
              }}
              slidesPerView={4.3}
              lazy={{
                enabled: true,
                loadPrevNext: false,
                loadOnTransitionStart: true,
              }}
              preloadImages={false}
            >
              {alias &&
                alias.data.map((res: any, index: any) => {
                  return (
                    <SwiperSlide key={index}>
                      <Box mx={15}>
                        <Testimonial>
                          <TestimonialContent>
                            <Text fontSize={{ base: 18, lg: 16 }}>
                              {" "}
                              {res.title}
                            </Text>
                            <TestimonialText>
                              <Text textAlign="justify">
                                {res.description.slice(0, 150)}...
                              </Text>
                              <Link
                                mx={3}
                                href={`/alias/${res._id}`}
                                style={{ color: "black" }}
                              >
                                ادامه مطلب
                              </Link>
                            </TestimonialText>
                          </TestimonialContent>
                          <TestimonialAvatar
                            url={res.webLink}
                            src={
                              res &&
                              `http://localhost:8000/api/v1/${res && res.image}`
                            }
                            name={""}
                            title={""}
                          />
                        </Testimonial>
                      </Box>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          )}
        </Stack>
        <Stack
          display={{ base: "none", md: "block" }}
          direction={{ md: "row" }}
        >
          {alias && alias.loading ? (
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
              modules={[Pagination, Lazy, Autoplay]}
              autoplay={{
                delay: 5000,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
              }}
              loop={true}
              onChangeDirection={() => {}}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                },

                370: {
                  slidesPerView: 1,
                },
                850: {
                  slidesPerView: 2,
                },

                1000: {
                  slidesPerView: 4.3,
                },
                2000: {
                  slidesPerView: 4.3,
                },
              }}
              slidesPerView={4.3}
              lazy={{
                enabled: true,
                loadPrevNext: false,
                loadOnTransitionStart: true,
              }}
              preloadImages={false}
            >
              {alias &&
                alias.data.map((res: any, index: any) => {
                  return (
                    <SwiperSlide key={index}>
                      <Box mx={15}>
                        <Testimonial>
                          <TestimonialContent>
                            <Text fontSize={{ base: 18, lg: 16 }}>
                              {" "}
                              {res.title}
                            </Text>
                            <TestimonialText  >
                          <p dir="rtl" >

                          <Text textAlign="justify">
                                {res.description.slice(0, 150)}...
                              </Text>
                              <Link
                                mx={3}
                                href={`/alias/${res._id}`}
                                style={{ color: "black" }}
                              >
                                ادامه مطلب
                              </Link>
                          </p>
                            </TestimonialText>
                          </TestimonialContent>
                          <TestimonialAvatar
                            url={res.webLink}
                            src={
                              res &&
                              `http://localhost:8000/api/v1/${res && res.image}`
                            }
                            name={""}
                            title={""}
                          />
                        </Testimonial>
                      </Box>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
