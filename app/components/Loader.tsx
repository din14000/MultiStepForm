import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
    return (
        <div className='flex justify-center align-center'>
            <ThreeDots
                visible={true}
                height="100"
                width="100"
                color="#2D72E1"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}