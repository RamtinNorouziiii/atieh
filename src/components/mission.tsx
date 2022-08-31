import { Box, Text } from "@chakra-ui/react"

export const MissionComp = () => {
    return (
        <Box py={20} borderRadius="8px" bgGradient='linear(to-b, #d9d9d9, #e8e8e8)' my={85} id="missions">
            <Box w="100%" textAlign="center" >
                <Text fontSize="lg" my={14} color="#223843" >
                    !ماموریت آتیه خواهان تامین آتیه شماست
                </Text>
                <Text fontSize="sm" color="#555555" >
                    سرمایه اصلی ما اعتماد شماست
                </Text>
            </Box>
        </Box>
    )
}