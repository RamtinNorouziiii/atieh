import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  SimpleGrid,
  List,
  ListItem,
} from '@chakra-ui/react';

export function ContactUs() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}
        direction={{ base: 'column',md:'column', lg: 'row' }}>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}

            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'contain'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                './assets/supp.png'
              }
            />
          </Box>
        </Flex>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>

          <Text fontSize="2xl" >
            ارتباط با ما
          </Text>

          <Text color={'gray.500'}>
            مرکز پاسخگویی به پرداخت ملت با ارائه خدمات در هفت روز هفته و بصورت بیست و چهار ساعت شبانه روز درجهت سهولت و دسترسی به اطلاعات فارغ از محدودیت‌ها بنا نهاده شده است.
          </Text>
          <SimpleGrid columns={2} spacing={10}>
            <List spacing={5}>
              <ListItem>021-27312731</ListItem>
              <ListItem>021-27312734</ListItem>{' '}
              <ListItem>021-27312731 داخلی 6</ListItem>
              <ListItem>	021-22770981, 021-22770987</ListItem>
              <ListItem>	19598-33551</ListItem>
              <ListItem>crm@behpardakht.com</ListItem>
              <ListItem>se@behpardakht.com</ListItem>
              <ListItem>customer.support@behpardakht.com</ListItem>
              <ListItem>تهران خیابان مفتح شمالی ، خیابان شهید نقدی ، پلاک 36 ،طبقه 5</ListItem>
            </List>
            <List spacing={5}>
              <ListItem>مرکز پاسخگویی مشتریان</ListItem>
              <ListItem>مرکز پشتیبانی پایانه‌های مجازی</ListItem>
              <ListItem>انتقادات، پیشنهادات و شکایات</ListItem>
              <ListItem>نمابر</ListItem>
              <ListItem>کد پستی</ListItem>
              <ListItem>پست الکترونیکی</ListItem>
              <ListItem>پست الکترونیکی نامه های قضائی</ListItem>
              <ListItem>بازرسی</ListItem>
              <ListItem>آدرس دفتر مرکزی</ListItem>

            </List>
          </SimpleGrid>

        </Stack>
      </Stack>
    </Container>
  );
}


export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};