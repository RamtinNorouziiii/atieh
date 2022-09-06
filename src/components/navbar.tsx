import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import {GrPersonalComputer} from 'react-icons/gr'
  import {FaPlane,FaHandshake,FaRegAddressCard,FaRegMoneyBillAlt} from 'react-icons/fa'
  import {MdSupport} from 'react-icons/md'
import { useEffect, useState } from 'react';

  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();









    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
    
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(false); 
        } else if(window.scrollY===0){ // if scroll up show the navbar
          setShow(false);  
        }
        else{
          setShow(true);  
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
  
        // cleanup function
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);






console.log(show)
    return (
      <Box
      className={`active ${show && 'hidden'}`}
      // style={{opacity:window.window.scrollY===0 ?0.4 :1}}
      minW="100%"  dir='rtl' position="fixed" zIndex={900} >
        <Flex
        style={{transition:"1s all"}}
          bg={window.scrollY===0 ?'#ede6e6' :'#999696'}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'flex',lg:"none" }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
              mx={4}
              >
             <Link href='/' ><Image src="./assets/atieh.png" /></Link>
            </Text>
  
            <Flex display={{ base: 'none', md: 'none',lg:"flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            {/* <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button> */}
            <Button
              display={ 'inline-flex' }
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'black'}
             
              _hover={{
                bg: 'white',
                color:"black"
              }}>
              ورورد کاربران
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                 {navItem.label}
                
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel,icon }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
           <Box display="inline-block" ml={5} >{icon}</Box> {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ lg: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href,icon }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  <Box display="inline-block" ml={5} >{child.icon}</Box> {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
    icon?:any
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'صفحه اصلی',
      href: '/',
    },
    {
      label: 'درباره ما',
      href: '/aboutus',
    },
    {
      label: 'شرکت های تابعه',
     
            children: [
        {
          label:  `گروه مشاوره مدیریت IT آوین`,
          icon:<GrPersonalComputer />,
          href: 'https://www.avintech.net/',
        },
        {
          label: 'معین گردشگری ملت',
          icon:<FaPlane />,
          href: 'https://www.mellattravel.com/',
        },
        {
          label: "واسپاری (لیزینگ) آتی نگر افام",
          icon:<FaHandshake />,
          href: 'https://atinegarafam.ir/',
        },
        {
          label: "نیرو تامین آتیه خواهان",
          icon:<FaRegAddressCard />,
          href: 'https://www.acmgroup.ir/niroo.html',
        },
        {
          label: "گروه تجارت بین الملل آتیه",
          icon:<FaRegMoneyBillAlt />,
          href: 'https://www.acmgroup.ir/tejarat.html',
        },
        {
          label: "خدمات بیمه ای آتیه نگرما",
          icon:<MdSupport />,
          href: 'https://www.acmgroup.ir/bime.html',
        },
      ],

     
    },
    {
      label: 'سرمایه گذاری ها',
      href: '#stocks',
      // children: [
      //   {
      //     label: 'Explore Design Work',
      //     subLabel: 'Trending Design to inspire you',
      //     href: '#',
      //   },
      //   {
      //     label: 'New & Noteworthy',
      //     subLabel: 'Up-and-coming Designers',
      //     href: '#',
      //   },
      // ],
    },
    {
      label: 'ماموریت ها',
      href: '#missions',
      // children: [
      //   {
      //     label: 'Job Board',
      //     subLabel: 'Find your dream design job',
      //     href: '#',
      //   },
      //   {
      //     label: 'Freelance Projects',
      //     subLabel: 'An exclusive list for contract work',
      //     href: '#',
      //   },
      // ],
    },
    {
      label:  "خبر ها",
      href: '#news',
    },
   
    // {
    //   label:  'فرصت های شغلی',
    //   href: '/joboffers',
    // },

    {
      label:  'تماس با ما',
      href: '/contactus',
    },
   
  ];