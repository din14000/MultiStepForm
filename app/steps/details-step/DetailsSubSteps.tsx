import { RadioOption } from "@/app/components/RadioOption";
import { detailsState, useDetailsAppSelector } from "@/redux/features/details-slice";
import { RadioGroup, Label, FieldError } from "react-aria-components";
import { detailsDataObject } from "./detailsUtils/DetailsUtils";
import { useStepsAppSelector } from "@/redux/features/steps-slice";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import "./DetailsSubSteps.css"; 

export default function DetailsSubStep({ register, errors }: {
    register: UseFormRegister<detailsState>, errors: FieldErrors<detailsState>
}) {
    const { detailsSubStep } = useStepsAppSelector((state) => state.stepsReducer.value)
    const { paymentMethod, numberOfPayments, dateToPay } = useDetailsAppSelector((state) => state.detailsReducer.value)

    const getCurrentDetailState = (currentDetail: string) => {
        switch (currentDetail) {
            case "paymentMethod":
                return paymentMethod;
            case "numberOfPayments":
                return numberOfPayments;
            case "dateToPay":
                return dateToPay;
        }
    }

    return (
        <div>
            {detailsDataObject.detailsData.map((data) => {
                if (data.detailsSubStep === detailsSubStep) {
                    return (
                        <div key={data.detailsSubStep}>
                            {data.selectionOptions.map((selectionOption) => (
                                <div key={selectionOption.name} className="details-substep rounded-5 px-40 py-20 justify-center">
                                    <RadioGroup
                                        isRequired
                                        name={selectionOption.name}
                                        key={selectionOption.name}
                                        defaultValue={getCurrentDetailState(selectionOption.name)}
                                        orientation='horizontal'
                                        className="flex flex-col gap-1"
                                    >
                                        <Label className="mt-6 mb-4 font-bold text-base leading-5 text-right font-assistant">{selectionOption.label}</Label>
                                        <div key={selectionOption.name} className="flex flex-row gap-1">
                                            {selectionOption.value.map((value) => (
                                                <RadioOption key={value} register={register} name={selectionOption.name} value={value} />
                                            ))}
                                        </div>
                                        <FieldError className='text-red-500 text-sm leading-5 mt-2 text-right'>{errors[selectionOption.name as keyof detailsState]?.message}</FieldError>
                                    </RadioGroup>
                                </div>
                            ))}
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

