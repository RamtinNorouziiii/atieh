import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export  function AboutUs() {
    return (
<>
<Container maxW={'5xl'} py={12}>
        <SimpleGrid  
        flexDirection="row-reverse"
        
        columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex
        justifyContent="center"
        
        >
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'http://behpardakht.com/resources/images/Goals.png'
              }
              objectFit={'cover'}
            />
          </Flex>

          <Stack spacing={4}
          
          >
           
            <Heading>تاريخچه شرکت</Heading>
            <Text color={'gray.500'} fontSize={'md'}>
            شرکت به پرداخت ملت (سهامي عام) با هدف توسعه ابزارهاي پرداخت الکترونيکي فعاليت خود را از سال 1384 بعنوان ارائه دهنده خدمات پرداخت الکترونيکي (PSP(Payment Service Provider با اخذ مجوز رسمي از بانک مرکزي جمهوري اسلامي ايران آغاز نموده است، همچنين پس از تشکيل شرکت شاپرک در سال 1391 مجوزهاي لازم جهت ادامه فعاليت از شرکت مذکور اخذ گرديده است.

در اين راستا شرکت به پرداخت ملت مسئوليت ايجاد و پشتيباني شبکه پايانه‌هاي فروش و ساير ابزارهاي پرداخت با هدف گسترش نظام پرداخت الکترونيک به شبکه بانکي و بازارهاي مالي کشور را بر عهده گرفته است.            </Text>
           
          </Stack>
        </SimpleGrid>
        
      </Container>
      <Container maxW={'5xl'} py={12} >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        

          <Stack spacing={4}>
           
            <Heading>حوزه فعاليت</Heading>
            <Text color={'gray.500'} fontSize={'md'}>
            اين شرکت با برخورداري از دانش و تخصص روز دنيا، به عنوان يک گروه توانمند در ارائه خدمات الکترونيکي بصورت تخصصي در زمينه هاي ذيل فعاليت مي‌نمايد:

- ارائه خدمات پرداخت از طريق پايانه هاي فروشگاهي (EFT-POS)

- ارائه خدمات پرداخت از طريق شبکه پرداخت اينترنت (IPG)

- ارائه خدمات پرداخت از طريق سامانه پاسخ صوتي محاوره‌اي (IVR)

- ارائه خدمات پرداخت از طريق کد دستوري (#741*)

- ارائه خدمات پرداخت از طريق برنامه موبايلي (Mobile App)

- ارائه خدمات پرداخت و بانکي از طريق دستگاه خودپرداز (ATM)

- ارائه خدمات پرداخت و بانکي از طريق پايانه غير نقدي (Kiosk)

- ارائه خدمات پرداخت و بانکي از طريق پوز شعبه (PINPAD)

- ارائه خدمات پرداخت الکترونيکي بهاي سوخت  </Text>
           
          </Stack>
          <Flex justifyContent="center" >
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'http://behpardakht.com/resources/images/Activities.png'
              }
              objectFit={'cover'}
            
            />
          </Flex>
        </SimpleGrid>
        
      </Container>
</>
    );
  }