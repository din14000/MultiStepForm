import detailsData from '@/app/data/detailsData.json';
import {detailsDataType } from "@/app/types/detailsDataType";

export const detailsDataObject: detailsDataType = {
    detailsData: detailsData.detailsData
  };
  
export const getDataLength = () => detailsDataObject.detailsData.length;