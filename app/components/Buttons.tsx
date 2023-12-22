import { Button } from "react-aria-components";
import "./Buttons.css";
import { decrementStep, decrementSubStep, incrementStep, resetSteps, useStepsAppSelector } from "@/redux/features/steps-slice";
import { useDispatch } from "react-redux";
import { clearDetails } from "@/redux/features/details-slice";
import { useState } from "react";

export default function Buttons() {
    const dispatch = useDispatch();
    const { formStep, detailsSubStep } = useStepsAppSelector((state) => state.stepsReducer.value)
    const back = () => formStep === 1 ? dispatch(decrementSubStep()) : dispatch(decrementStep());

    const [nextButtonType, setNextButtonType]  = useState<"submit" | "reset" | "button" | undefined>("submit");
    
    const next = () => {
       
        console.log("IN BUTTONS - before - substep: " + detailsSubStep + " step: " + formStep)
        if (formStep === 3) {
            dispatch(clearDetails());
            dispatch(resetSteps());
            setNextButtonType("reset");
        }
        else if (formStep === 2) {
            dispatch(incrementStep());
        }
        else {
            setNextButtonType("submit");
        }
        console.log("IN BUTTONS - after - substep: " + detailsSubStep + " step: " + formStep)

    }

    return (
        <>
            <div>
                <Button onPress={next} form="loan-form" className='next-button' type={nextButtonType}>
                    {(() => {
                        switch (formStep) {
                            case 1:
                                return 'המשך';
                            case 2:
                                return 'אישור';
                            case 3:
                                return 'הלוואה נוספת';
                        }
                    })()}
                </Button>
            </div>
            {detailsSubStep > 1 && <div>
                <Button onPress={back} className='back-button'>חזור</Button>
            </div>}
        </>
    )
}
