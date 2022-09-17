import { ReactNode } from "react";
import { GoMailRead } from "react-icons/go";
import {
  Box,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const Logo = (props: any) => {
  return <Image src="/assets/atieh.png" />;
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function FooterComp({ data }: any) {
  return (
    <Box
      dir="rtl"
      bg={useColorModeValue("#333333", "gray.900")}
      color={useColorModeValue("gray.100", "gray.100")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "2fr 1fr", md: "2fr 2fr 3fr 3fr 1fr " }}
          spacing={8}
        >
          <Stack align={"center"}>
            <ListHeader>درباره ما</ListHeader>
            <Link href={"#"}>تاریخچه</Link>
            <Link href={"#"}>اهداف و ماموریت</Link>
            <Link href={"/joboffers"}>فرصت های شغلی</Link>
          </Stack>
          <Stack align={"center"}>
            <ListHeader>شرکتهای تابعه</ListHeader>
            {data &&
              data.data.map((res: any, index: any) => {
                return <Link  key={index} href={res.webLink}>{res.title} </Link>;
              })}
          </Stack>

          <Stack align={"center"}>
            <ListHeader>تماس با ما</ListHeader>
            <Link href={"#"}>
              {" "}
              021-88506155 <PhoneIcon />{" "}
            </Link>
            <Link href={"#"}>
              1587996111 <GoMailRead style={{ display: "inline-block" }} />
            </Link>
            <Link href={"#"}>
              sample@gmail.com <EmailIcon />
            </Link>
          </Stack>
          <Stack align={"center"}>
            <ListHeader>
              <Link
                href={
                  "https://www.google.com/maps/place/%D8%B4%D8%B1%DA%A9%D8%AA+%D9%85%D8%AF%DB%8C%D8%B1%DB%8C%D8%AA+%D8%B3%D8%B1%D9%85%D8%A7%DB%8C%D9%87+%D8%A2%D8%AA%DB%8C%D9%87+%D8%AE%D9%88%D8%A7%D9%87%D8%A7%D9%86%E2%80%AD/@35.7250874,51.4297916,17z/data=!3m1!4b1!4m5!3m4!1s0x3f8e015f9846dc3f:0x25c74de863129633!8m2!3d35.7250275!4d51.4297947"
                }
              >
                مکان یابی
              </Link>{" "}
            </ListHeader>
          </Stack>
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize={"sm"}>
              کلیه حقوق این وب سایت متعلق به هلدینگ آتیه خواهان می‌باشد
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
