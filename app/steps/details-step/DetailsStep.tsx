"use client";

import './DetailsStep.css'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setPaymentMethod, setDateToPay, setLoanAmount, setNumberOfPayments, detailsState, useDetailsAppSelector } from '@/redux/features/details-slice';
import { incrementStep, incrementSubStep, useStepsAppSelector } from '@/redux/features/steps-slice'
import { getDataLength } from './detailsUtils/DetailsUtils';
import dynamic from 'next/dynamic';
import Loader from '@/app/components/Loader';

export default function DetailsStep() {
    const dispatch = useDispatch()
    const { formStep, detailsSubStep } = useStepsAppSelector((state) => state.stepsReducer.value)
    const { paymentMethod, loanAmount, numberOfPayments, dateToPay } = useDetailsAppSelector((state) => state.detailsReducer.value)

    const { register, handleSubmit, formState: { errors } } = useForm<detailsState>({
        defaultValues: {
            loanAmount: loanAmount,
            paymentMethod: paymentMethod,
            numberOfPayments: numberOfPayments,
            dateToPay: dateToPay
        }
    });

    //      dynmaic loading        //
    const DetailsSubSteps = dynamic(
        () => import('./DetailsSubSteps'),
        {
            loading: () => <div className='flex justify-center align-center'>
                <Loader />
            </div>
            ,
        }
    )

    const RequiredDetails = dynamic(
        () => import('./RequiredDetails'),
        {
            loading: () => <div className='flex justify-center align-center'>
                <Loader />
            </div>
            ,
        }
    )

    //  all dispatches of data from this subStep  //
    const subStepDispatches = (data: detailsState) => {
        data.loanAmount && dispatch(setLoanAmount(data.loanAmount));
        data.paymentMethod && dispatch(setPaymentMethod(data.paymentMethod));
        data.numberOfPayments && dispatch(setNumberOfPayments(data.numberOfPayments));
        data.dateToPay && dispatch(setDateToPay(data.dateToPay));

        detailsSubStep === getDataLength() ? dispatch(incrementStep()) : dispatch(incrementSubStep())
    }

    const onSubmit = (data: detailsState) => {
        subStepDispatches(data);
    }


    return (
        <form id="loan-form" className='flex flex-col items-stretch w-65' onSubmit={handleSubmit(onSubmit)}>
            <div>
                {detailsSubStep === 1 &&    // I am assuming that this part is always required 
                    // so I excluded it from the dynamic amount of sub-steps
                    // and only show it on the first subStep (not something I would do in a real project)
                    <RequiredDetails register={register} errors={errors} />
                }
                <DetailsSubSteps register={register} errors={errors} />
            </div>

        </form>
    )
}