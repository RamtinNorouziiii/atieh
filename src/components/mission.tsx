import { Box, Text } from "@chakra-ui/react"

export const MissionComp = () => {
    return (
        <Box py={20} borderRadius="8px" bgGradient='linear(to-b, #d9d9d9, #e8e8e8)' my={85} id="missions">
            <Box w="100%" textAlign="center" >
                <Text fontSize="lg" my={14} color="#223843" >
                شعار شرکت
                </Text>
                <Text fontSize="sm" color="#555555" >
                قرار گیری در میان برترین شرکت های سرمایه گذاری در کشور
                </Text>
            </Box>
        </Box>
    )
}