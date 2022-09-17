import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DataReqAction } from "../redux/actions/data";
import { MissionComp } from "./mission";
import { News } from "./news";
import { StarterBanner } from "./starterBanner";
import { StockChart } from "./stockchart";
import { SubCo } from "./subCo";

export const Components = ({data}:any) => {
  return (
    <>
      <StarterBanner banner={data.banner} />

      <News news={data.news} />
      

      <StockChart stock={data.stock} />
      <SubCo alias={data.alias} />
      <MissionComp />
    </>
  );
};
