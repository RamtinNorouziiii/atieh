import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,

  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { instance } from "../utils/axios";



export function AboutUs() {
  const [data, setData] = useState<any>()
  useEffect(() => {
    instance.get("/aboutus").then((res) => {
      setData(res.data[0])
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  console.log(data)
  return (
    <Container width="100%" maxW={"100%"}
   
    backgroundImage="url('/assets/back.jpg')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    backgroundAttachment="fixed"
     opacity="0.8"
    >
      <Container width="100%" maxW={"100%"} py={20} mx={0}
     
      >
        <SimpleGrid
          flexDirection="row-reverse"
          columns={{ base: 1, md: 2 }}
          spacing={10}
         
        >
          <Flex justifyContent="center">
            {/* <Image
              rounded={"md"}
              alt={"feature image"}
              src={"/assets/back.jfif"}
              objectFit={"cover"}
            /> */}
          </Flex>

          <Stack spacing={4}>
            <Text fontSize={"2xl"}   >{data && data.title1}</Text>
            <Text color={"black"} fontSize={"md"}>
              {data && data.description1}
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text fontSize={"2xl" }  color="white" >  {data && data.title2}</Text>
            <Text color={"white"} fontSize={"md"}>
              {data && data.description2}
            </Text>
          </Stack>
          <Flex justifyContent="center">
            {/* <Image
              rounded={"md"}
              alt={"feature image"}
              src={"/assets/sarmayeh.jpg"}
              objectFit={"cover"}
            /> */}
          </Flex>
        </SimpleGrid>
      </Container>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid
          flexDirection="row-reverse"
          columns={{ base: 1, md: 2 }}
          spacing={10}
        >
          <Flex justifyContent="center">
            {/* <Image
              rounded={"md"}
              alt={"feature image"}
              src={"/assets/sarmayeh.jpg"}
              objectFit={"cover"}
            /> */}
          </Flex>

          <Stack spacing={4}>
            <Text fontSize={"2xl"} color="white" >  {data && data.title3}</Text>
            <Text color={"white"} fontSize={"md"}>
              {data && data.description3}
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Container>
  );
}
