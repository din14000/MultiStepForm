import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

type initialState = {
    value: detailsState;
}

export type detailsState = {
    loanAmount: number,
    paymentMethod: string,
    numberOfPayments: string,
    dateToPay: string
}

const initialState = {
    value: {
        loanAmount: 10000,
        paymentMethod: "",
        numberOfPayments: "",
        dateToPay: ""
    } as detailsState
} as initialState

export const details = createSlice({
    name: "details",
    initialState,
    reducers: {
        clearDetails: () => {
            return initialState;
        },
        setLoanAmount: (state, action: PayloadAction<number>) => {
            return {
                value: {
                    loanAmount: action.payload,
                    paymentMethod: state.value.paymentMethod,
                    numberOfPayments: state.value.numberOfPayments,
                    dateToPay: state.value.dateToPay
                }
            }
        },
        setPaymentMethod: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    loanAmount: state.value.loanAmount,
                    paymentMethod: action.payload,
                    numberOfPayments: state.value.numberOfPayments,
                    dateToPay: state.value.dateToPay
                }
            }
        },
        setNumberOfPayments: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    loanAmount: state.value.loanAmount,
                    paymentMethod: state.value.paymentMethod,
                    numberOfPayments: action.payload,
                    dateToPay: state.value.dateToPay
                }
            }
        },
        setDateToPay: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    loanAmount: state.value.loanAmount,
                    paymentMethod: state.value.paymentMethod,
                    numberOfPayments: state.value.numberOfPayments,
                    dateToPay: action.payload
                }
            }
        },
        default: (state) => { return state }

    },
})

export const { clearDetails, setDateToPay, setLoanAmount, setNumberOfPayments, setPaymentMethod } = details.actions;
export default details.reducer;

export const useDetailsAppSelector: TypedUseSelectorHook<RootState> = useSelector;