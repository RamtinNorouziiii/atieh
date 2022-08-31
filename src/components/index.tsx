import { Text } from "@chakra-ui/react"
import FooterComp from "./footer"
import { MissionComp } from "./mission"
import WithSubnavigation from "./navbar"
import { News } from "./news"
import { StarterBanner } from "./starterBanner"
import { StockChart } from "./stockchart"
import { SubCo } from "./subCo"

export const Components = () => {
    return (
        <>
            <StarterBanner />
           
            <News />
            <SubCo />
            
            <StockChart />
            <MissionComp />
            
        </>
    )
}