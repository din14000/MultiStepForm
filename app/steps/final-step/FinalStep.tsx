import { useDetailsAppSelector } from "@/redux/features/details-slice";
import "./FinalStep.css";
import Document from '@/public/document.svg'
import Image from 'next/image';

export default function FinalStep() {
    const { paymentMethod, loanAmount, numberOfPayments, dateToPay } = useDetailsAppSelector((state) => state.detailsReducer.value)
    const currentTimestamp = Date.now();
    let date = new Intl.DateTimeFormat("he-IL", {
        hour: "2-digit",
        minute: "2-digit",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(currentTimestamp);

    return (
        <div className="approval-container">
            <div className="flex flex-row">
                <Image className="self-start pt-3.5"
                    priority
                    src={Document}
                    alt="docImg"
                />
                <div>
                    <h1>ההוראה הועברה לסבב חתימות</h1>
                    <h4>אישור {Math.floor(1000 + Math.random() * 9000)} |  {date}</h4>
                </div>
            </div>
            <ul>
                <li><span className="name">סכום ההלוואה</span><span className="value">{loanAmount}</span></li>
                <li><span className="name">מסלול</span><span className="value">{paymentMethod}</span></li>
                <li><span className="name">מספר תשלומים</span><span className="value">{numberOfPayments}</span></li>
                <li><span className="name">תאריך פרעון</span><span className="value">{dateToPay}</span></li>
            </ul>
        </div>
    )
}
