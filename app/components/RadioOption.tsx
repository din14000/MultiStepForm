import { detailsState } from '@/redux/features/details-slice';
import { Radio } from 'react-aria-components';
import { UseFormRegister } from 'react-hook-form';
import "./RadioOption.css"

export function RadioOption({ value, name, register }: { value: string, name: any, register: UseFormRegister<detailsState> }) {
    return (
      <Radio 
      key={name}
        value={value}
        {...register(name)}
        className="w-44 h-10 rounded-md p-2 text-center mx-4">
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex flex-1 flex-col">
            <div className="font-normal font-assistant">
              {value}
            </div>
          </div>
        </div>
      </Radio>
    );
  }
  