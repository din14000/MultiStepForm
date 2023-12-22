"use client";

import { useStepsAppSelector } from "@/redux/features/steps-slice";
import DetailsStep from "../details-step/DetailsStep";
import ApprovalStep from "../approval-step/ApprovalStep";
import FinalStep from "../final-step/FinalStep";

export default function StepsLayout() {
    const { formStep } = useStepsAppSelector((state) => state.stepsReducer.value)
    switch (formStep) {
        case 1:
            return <DetailsStep />
        case 2:
            return <ApprovalStep />
        case 3:
            return <FinalStep />
    }
}