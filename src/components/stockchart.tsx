import { Box, Flex, Image, List, ListIcon, ListItem, Spinner, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { MdCheckCircle, MdSettings } from "react-icons/md";
export const StockChart = ({ stock }: any) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <Box
      mt="5"


    >
      <Box
        py={20}
        borderRadius="8px"
        color="white"
        width="100%" maxW={"100%"}
        backgroundImage="url('/assets/stockchart.jpg')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundAttachment="fixed"

      >
        <Text mb={"20px"} fontSize={30} textAlign="center" id="stocks">
          سرمایه و ترکیب سهامداران
        </Text>
        <Text fontWeight="bolder" textAlign="center" w={"50%"} m={"20px auto"}>
          سرمایه شرکت در بدو تاسیس مبلغ 100 میلیون ریال (شامل تعداد 100 سهم، به ارزش اسمی هر سهم 1،000،000 ریال) بوده که طی چند مرحله به مبلغ 6،600،000 میلیون ریال (شامل تعداد 6،600،000 سهم، به ارزش اسمی هر سهم 1،000،000 ریال) در پایان سال مالی منتهی به 29/12/1400 افزایش یافته است.
        </Text>
        <TableContainer m="0 auto" w={{ base: "100%", md: "75%" }} mt={20}  >
          <Table fontWeight="bolder" fontSize={18} variant="simple" dir="rtl"  >

            <Thead>
              <Tr>
                <Th fontSize="xl" color="white" > سهامداران </Th>
                <Th fontSize="xl" color="white">درصد سهام</Th>
              </Tr>
            </Thead>
            <Tbody>

              <Tr >
                <Td> خدماتی و بازرگانی همیار تامین آتیه </Td>
                <Td>91/56% </Td>

              </Tr>
              <Tr >
                <Td>  معین آتیه خواهان </Td>
                <Td>8/43%</Td>

              </Tr> <Tr >
                <Td> خدمات مسافرت هوایی جهانگردی و زیارتی معین گردشگری ملت </Td>
                <Td>0/004%</Td>

              </Tr> <Tr >
                <Td> خدمات بیمه ای آتیه نگر ما </Td>
                <Td>0/004%</Td>

              </Tr> <Tr >
                <Td> واسپاری آتی نگر افام </Td>
                <Td>0/001%</Td>

              </Tr>
              <Tr >
                <Td> جمع کل:</Td>
                <Td>100%</Td>

              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        py={20}
        mt="5"
        borderRadius="8px"
        width="100%" maxW={"100%"}

        backgroundImage="url('/assets/1b (1).jpg')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundAttachment="fixed"

      >
        <Text mb={"20px"} fontSize={30} textAlign="center" id="stocks">
          سرمایه گذاری ها
        </Text>
        <Text fontSize={18} w={"50%"} m={"20px auto"} dir="rtl">
          منابع شرکت طی مدت فعالیت به سرمایه گذاری در حوزه های ذیل اختصاص
          یافته است:
          <br />
          1- سرمایه گذاری در سهام شرکت های زیر مجموعه بانک ملت
          <br />
          2- سرمایه گذاری در شرکتهای بورسی
          <br />
          3- تاسیس شرکت های فرعی در حوزه های مختلف
        </Text>
        <Text w={"50%"} m={"20px auto"} fontSize={18} dir="rtl" my={20}>
          <Text mb={6} fontSize={20}>
            {" "}
            سرمایه گذاری در شرکت های زیر مجموعه بانک ملت{" "}
          </Text>
          پس از اخذ مصوبه حمایتی 3057 از مدیریت محترم بانک ملت، سهام 6 شرکت سود
          آور بانک به شرح ذیل به قیمت مناسب به این شرکت انتقال یافته است:
        </Text>
        <Flex w={"50%"} m={"20px auto"}>
          <Box display={{ md: "flex", base: "none" }}>
            {" "}
            <Image src="/assets/seke.png" alt="pic" />
          </Box>
          <Box w={{ md: "50%", base: "100%" }}>
            {
              stock && stock.loading ? <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
                m={"25% 50%"}
              /> : <List
                my={"25%"}
                alignItems="center"
                justifyContent="center"
                textAlign={"center"}
                spacing={10}

              >
                {stock &&
                  stock.data.map((res: any, index: any) => {
                    return (
                      <ListItem fontSize={20} textColor="#007e3e" key={index}>
                        <Text fontSize={20} display="inline-block" color="black">
                          {res.percent}%
                        </Text>{" "}
                        {res.title}
                      </ListItem>
                    );
                  })}
              </List>
            }
          </Box>
        </Flex>
        <Text w={"50%"} m={"20px auto"} fontSize="18" dir="rtl" my={20} >
          <Text mb={6} fontSize="20">
            {" "}
            سرمایه گذاری در سهام شرکت های بورسی
          </Text>
          ارزش سرمایه گذاری شرکت در سهام شرکت های پذیرفته در بورس بالغ بر
          12.912.604.495.833 میلیارد ریال می باشد که عمده ترین سهام بورسی موجود
          در پرتفوی شرکت عبارتند از:
          <br />
          - شرکت پالایش نفت اصفهان
          <br />
          -  شرکت تامین
          <br />
          -  سرمایه بانک ملت
          <br />
          -  شرکت مس شهید باهنر
          <br />
          و .......
        </Text>
      </Box>
    </Box>
  );
};
