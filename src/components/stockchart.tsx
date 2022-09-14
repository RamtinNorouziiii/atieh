import { Box, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { MdCheckCircle, MdSettings } from "react-icons/md";
export const StockChart = ({stock}:any) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <Box>
      <Box
        py={20}
        borderRadius="8px"
        bgGradient="linear(to-b, #d9d9d9, #e8e8e8)"
      >
        <Text mb={"20px"} fontSize={30} textAlign="center" id="stocks">
          سهامداران
        </Text>
        <Text
          fontWeight="bolder"
          
          textAlign="center"
          w={"50%"}
          m={"20px auto"}
          
        >
          صندوق تامين آتيه كاركنان بانك ملت و شركت تعاوني معين آتيه خواهان
        </Text>
      </Box>
      <Box
        py={20}
        borderRadius="8px"
        bgGradient="linear(to-b, #d9d9d9, #e8e8e8)"
      >
        <Text mb={"20px"} fontSize={30} textAlign="center" id="stocks">
          سرمایه گذاری ها
        </Text>
        <Text w={"50%"} m={"20px auto"} fontSize="sm">
          سرمایه گذاری ها : با اخذ مصوبه 3057 از مدیریت محترم بانک، سهام 7 شرکت
          سود آور بانک به قیمت مناسب به این شرکت انتقال یافت که بخش عمده و اصلی
          سود آوری شرکت از ناحیه این شرکتها میباشد
        </Text>
        <Flex w={"50%"} m={"20px auto"}>
          <Box  display={{ md: "flex",base:"none" }}>
            {" "}
            <img src="/assets/seke.png" alt="pic" />
          </Box>
          <Box  w={{md:"50%",base:"100%"}} >
          <List my={"25%"}  alignItems="center" justifyContent="center"   textAlign={"center"}   spacing={10}>
          {
            stock && stock.data.map((res:any,index:any)=>{
              return(
                <ListItem fontSize="20" textColor="#d77a61" key={index} >
            
                <Text display="inline-block" color="black" >{res.percent}%</Text> {res.title} 
                  </ListItem>
              )
            })
          }
          </List>
          </Box>
        </Flex>
        <Text w={"50%"} m={"30px auto"}>
          ارزش سرمایه گذاری شرکت در سهام شرکت های پذیرفته در بورس بالغ بر 700
          میلیارد ریال می باشد. سهامداران اصلی این شرکت : صندوق تامين آتيه
          كاركنان بانك ملت و شركت تعاوني معين آتيه خواهان میباشند
        </Text>
      </Box>
    </Box>
  );
};
