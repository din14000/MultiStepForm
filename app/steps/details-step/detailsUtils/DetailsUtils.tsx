import { detailsData } from '@/app/Data/detailsData';
import {detailsDataType } from "@/app/types/detailsDataType";

export const detailsDataObject: detailsDataType = {
    detailsData: detailsData.detailsData
  };
  
export const getDataLength = () => detailsDataObject.detailsData.length;