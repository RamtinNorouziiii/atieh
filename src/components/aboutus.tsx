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
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export function AboutUs() {
  return (
    <>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid
          flexDirection="row-reverse"
          columns={{ base: 1, md: 2 }}
          spacing={10}
        >
          <Flex justifyContent="center">
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={"/assets/sarmayeh.jpg"}
              objectFit={"cover"}
            />
          </Flex>

          <Stack spacing={4}>
            <Text fontSize={"2xl"}>تاریخچه</Text>
            <Text color={"gray.500"} fontSize={"md"}>
              شرکت مدیریت سرمایه آتیه خواهان در تاریخ 01/08/1389 به صورت شرکت
              سهامی و به منظور امکان سرمایه گذاری در بخش های مختلف اقتصادی طی
              شماره 387808 مورخ 01/08/1389 در اداره ثبت شرکت‌ها و مالکیت صنعتی
              تهران تاسیس و به ثبت رسیده است. مرکز اصلی شرکت در تهران به آدرس،
              خیابان مطهری، خیابان مفتح شمالی، خیابان شهید نقدی، پلاک 36، طبقه 5
              واقع است.{" "}
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text fontSize={"2xl"} >فلسفۀ وجودی شرکت</Text>
            <Text color={"gray.500"} fontSize={"md"}>
              در سال 1389 پس از بررسی‌های کارشناسی لازم برای بهبود بخشیدن به
              وضعیت صندوق و بهره‌وری مناسب‌تر از منابع و اطمینان بخشیدن به
              مدیریت بانک برای کمک‌های بیشتر به صندوق، بر اساس نتایج حاصل از
              مطالعات کارشناسان و مشاورین و مدیران ذیربط در معاونت منابع انسانی
              بانک، برای تامین انتظارات، تشکیل شرکت مدیریت سرمایه آتیه خواهان و
              به‌تبع آن شرکت تعاونی معین آتیه خواهان به‌عنوان بازوان اجرائی
              صندوق جهت انجام و مدیریت سرمایه‌گذاری‌های صندوق در بخش‌های مختلف
              اقتصادی، در دستور کار قرار گرفت. لذا در این راستا، کسب درآمد
              حداکثری با استفاده از منابع مازاد صندوق تامین آتیه کارکنان بانک
              ملت، به‌منظور ارتقاء سطح درآمدهای موازی با حقوق و مزایای پرسنلی
              برای دستیابی به رفاه بیشتر کارکنان شاغل و بارنشسته بانک ملت،
              به‌عنوان هدف اصلی شرکت مدیریت سرمایه آتیه خواهان می‌باشد.
            </Text>
          </Stack>
          <Flex justifyContent="center">
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={"/assets/sarmayeh.jpg"}
              objectFit={"cover"}
            />
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
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={"/assets/sarmayeh.jpg"}
              objectFit={"cover"}
            />
          </Flex>

          <Stack spacing={4}>
            <Text fontSize={"2xl"}>رسالت و ماموریت</Text>
            <Text color={"gray.500"} fontSize={"md"}>
              شرکت مدیریت سرمایه آتیه خواهان به عنوان بازوی اجرائی صندوق تامین
              آتیه کارکنان بانک ملت ماموریت دارد با خلق ارزش و سودآوری به منظور
              افزایش منافع سهامداران شرکت از طریق سرمایه گذاری های مستقیم و با
              واسطه، مشارکت در طرح های سرمایه گذاری و حمایت از کسب و کارهای نوپا
              در حوزه های متنوع در جهت حداکثر کردن ثروت سهامداران اهتمام ورزد.{" "}
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}
