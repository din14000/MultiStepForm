import { useDetailsAppSelector } from "@/redux/features/details-slice"
import "./ApprovalStep.css";

export default function ApprovalStep() {

    const { paymentMethod, loanAmount, numberOfPayments, dateToPay } = useDetailsAppSelector((state) => state.detailsReducer.value)

    return (
        <div className="approval-container">
            <h1>סיכום פרטי הלוואה</h1>
            <ul>
                <li><span className="name">סכום ההלוואה</span><span className="value">{loanAmount}</span></li>
                <li><span className="name">מסלול</span><span className="value">{paymentMethod}</span></li>
                <li><span className="name">מספר תשלומים</span><span className="value">{numberOfPayments}</span></li>
                <li><span className="name">תאריך פרעון</span><span className="value">{dateToPay}</span></li>
            </ul>
        </div>
    )
}
