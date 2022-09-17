import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

export default function AliasPage({ data }: any) {
  const params = useParams();
  const [loading,setLoading]=useState(true)
  const SpecificData = data.data.filter(function (creature: any) {
    return creature._id === params.id;
  });
  console.log(SpecificData)
  return (
   <Box  >
   {
    SpecificData.length===0 ? 
 
      <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
    m={"25% 50%"}
  />
     :<Container maxW={"7xl"}> <SimpleGrid
    columns={{ base: 1, lg: 2 }}
    spacing={{ base: 8, md: 10 }}
    py={{ base: 18, md: 24 }}
  >
    <Flex>
      <Image
        rounded={"md"}
        alt={"product image"}
        src={
          SpecificData &&
          `http://localhost:8000/api/v1/${
            SpecificData[0] && SpecificData[0].image
          }`
        }
        fit={"contain"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%", sm: "400px", lg: "500px" }}
      />
     
    </Flex>
    <Stack spacing={{ base: 6, md: 10 }}>
      <Box as={"header"}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
        >
          {SpecificData[0] && SpecificData[0].title}
        </Heading>
      </Box>

      <Stack
        spacing={{ base: 4, sm: 6 }}
        direction={"column"}
        divider={
          <StackDivider
            borderColor={"gray"}
          />
        }
      >
        <VStack spacing={{ base: 4, sm: 6 }}>
          <Text fontSize={"lg"} whiteSpace="pre-line" dir="rtl">
            {SpecificData[0] && SpecificData[0].description}
          </Text>
        </VStack>
      </Stack>
    </Stack>
  </SimpleGrid>
  <Box>
          <Text
            fontSize={{ base: "16px", lg: "18px" }}
            color={"#848404"}
            fontWeight={"500"}
            textTransform={"uppercase"}
            mb={"4"}
          >
            اعضا
          </Text>

          <TableContainer>
            <Table variant="simple" dir="rtl" >
              <TableCaption>
                <a href={SpecificData[0] && SpecificData[0].webLink}>
                  {SpecificData[0] && SpecificData[0].webLink}
                </a>
              </TableCaption>
              <Thead>
                <Tr>
                  <Th fontSize="lg" >تاریخ تعیین سمت</Th>
                  <Th fontSize="lg">تام و نام خانوادگی</Th>
                  <Th fontSize="lg">سمت</Th>
                  <Th fontSize="lg">نماینده</Th>
                </Tr>
              </Thead>
              <Tbody>
                { SpecificData[0] && JSON.parse(SpecificData[0].members).map((res: any, index: any) => {
                      return (
                        <Tr key={index}>
                          <Td>{res.date || "-"}</Td>
                          <Td>{res.name|| "-"}</Td>
                          <Td>{res.role|| "-"}</Td>
                          <Td>{res.agent|| "-"}</Td>
                        </Tr>
                      );
                    })
}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        </Container>
   }
   </Box>
  );
}
