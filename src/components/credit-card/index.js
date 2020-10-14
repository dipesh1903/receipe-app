import React, {useRef, useState, useEffect} from 'react';
import {HOME} from '../../constants/RoutesEnum';
import './style.scss';
import {useHistory, Redirect} from 'react-router-dom';

function CreditCard(props) {

    const [errMsg, setErrMsg] = useState(false);
    const [sendOtp, setSendOtp] = useState(false)
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const cardNumber = useRef();
    const cvv = useRef();
    const month = useRef();
    const year = useRef();
    const otp = useRef();

    const history = useHistory();


    const months = [1,2,3,4,5,6,7,8,9,10,11,12];
    const years = [];

    const {
        price
    } = props;

    useEffect(() => {
        return () => {
            if (history.action === "POP") {
                if (!window.alert("Payment not completed")) {
                    redirectToHome()
                  } 
            } 
        }
    })

    function redirectToHome() {
        history.replace({
            pathname: HOME,
            state: {
                payment_success: true
            }
        })  
    }

    const current_year = Math.trunc(new Date().getFullYear()/100);    
    for (let i = current_year ; i<= current_year + 40 ; i++) {
        years.push(i);
    }


    function monthCategory() {
        return months.map((item, index) => <option key={index} value={item}>{item}</option>)
    }

    function yearCategory() {
        return years.map((item, index) => <option key={index} value={item}>{item}</option>)
    }

    function validateInput(e) {
        e.preventDefault();
        const cardNum = cardNumber.current.value;
        const m = month.current.value;
        const y = year.current.value;
        const cv = cvv.current.value;

        if (cardNum && String(cardNum).length === 12 &&
            m && y && cv && String(cv).length === 3) {
                setSendOtp(true)
                setErrMsg(false);
            } else {
                setErrMsg(true);
                setSendOtp(false);
            }
    }

    function confirmPayment(e) {
        e.preventDefault();
        const ot = otp.current.value;
        if (ot && ot === '123456') {
            if (!window.alert("Payment successful")) {
                redirectToHome();               
              } 
        } else {
            alert('Incorrect otp!!')
        }

    }

    return (
        <form className="card-payment-container">
            <div className="title">Credit card/ debit card</div>
            <input ref={cardNumber} className="card-number" placeholder="Enter card number" type="text" pattern="\d" maxLength={12}></input>
            <div className="card-details">
                <div className="card-validity">
                    <span>Valid thru</span>
                        <div>
                            MM
                            <select ref={month}>
                                {monthCategory()}
                            </select>
                        </div>
                        <div>
                            YY
                            <select ref={year}>
                                {yearCategory()}
                            </select>
                        </div>
                </div>
                <input ref={cvv} placeholder="cvv" className="card-cvv" type="password" maxLength={3}/>
                <button onClick={(e) => validateInput(e)} className="pay-now">pay {price}</button>
            </div>
            {errMsg ? <div className="error-message">Some data are invalid (card number should be 12 digits long and cvv should be 3 digit)</div> : null }
                {
                    sendOtp ? 
                    <div className="otp-container">
                        <input placeholder="Enter otp" className="otp-input" ref={otp} type="text" pattern="\d" maxLength={6}></input>
                        <button onClick={(e) => confirmPayment(e)} className="pay-now">Submit</button>
                    </div> : null
                }
        </form>
    )
}

export default CreditCard;