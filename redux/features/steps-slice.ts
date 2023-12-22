import { createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

type initialState = {
    value: stepsState;
}

type stepsState = {
    detailsSubStep: number,
    formStep: number
}

const initialState = {
    value: {
        detailsSubStep: 1,
        formStep: 1
    } as stepsState
} as initialState

export const steps = createSlice({
    name: "steps",
    initialState,
    reducers: {
        resetSteps: () => {
            return initialState;
        },

        incrementSubStep: (state) => {
            return {
                value: {
                    detailsSubStep: state.value.detailsSubStep + 1,
                    formStep: 1
                }
            }
        },

        decrementSubStep: (state) => {
            return {
                value: {
                    detailsSubStep: state.value.detailsSubStep - 1,
                    formStep: 1
                }
            }
        },

        incrementStep: (state) => {
            return {
                value: {
                    detailsSubStep: state.value.detailsSubStep,
                    formStep: state.value.formStep + 1
                }
            };
        },

        decrementStep: (state) => {
            return {
                value: {
                    detailsSubStep: state.value.detailsSubStep,
                    formStep: state.value.formStep - 1
                }
            };
        },
        default: (state) => { return state }

    }
});

export const { resetSteps, incrementStep, decrementStep, incrementSubStep, decrementSubStep } = steps.actions;
export default steps.reducer;

export const useStepsAppSelector: TypedUseSelectorHook<RootState> = useSelector;