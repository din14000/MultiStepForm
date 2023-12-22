import { NumberField, Label, Group, Button, FieldError, Input, Text } from "react-aria-components"
import { detailsState, useDetailsAppSelector } from "@/redux/features/details-slice"
import { UseFormRegister, FieldErrors } from "react-hook-form"

export default function RequiredDetails({ register, errors }: {
    register: UseFormRegister<detailsState>, errors: FieldErrors<detailsState>
}) {

    const { loanAmount } = useDetailsAppSelector((state) => state.detailsReducer.value)

    return (
        <>
            <div className='details-substep rounded-5 px-40 py-20 justify-center'>
                <NumberField
                    isRequired
                    minValue={10000}
                    id="loanAmount"
                    defaultValue={loanAmount}
                    formatOptions={{
                        style: 'currency',
                        currency: 'ILS',
                        currencyDisplay: 'symbol',
                        maximumFractionDigits: 0
                    }}>
                    <Label className="font-bold text-base leading-5 text-right font-assistant">מה סכום ההלוואה הדרוש לך?</Label>
                    <Group>
                        <Button slot="decrement">-</Button>
                        <Input className='h-11 px-4 border rounded-md'
                            {...register("loanAmount")}
                        />
                        <Button slot="increment">+</Button>
                    </Group>
                    <Text className='text-xs leading-4 text-right' slot="description">סכום מינימלי: 10,000 ש"ח</Text>
                    <FieldError className='block text-red-500 text-sm leading-5 mt-2 text-right'>{errors.loanAmount?.message}</FieldError>
                </NumberField>
            </div>
        </>
    )
}