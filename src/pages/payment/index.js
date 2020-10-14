import React from 'react';
import CreditPay from '../../components/credit-card';
import {useLocation, useHistory} from 'react-router-dom';
import {HOME} from '../../constants/RoutesEnum';
import './style.scss';

function Payment() {

    const location = useLocation();
    const history = useHistory();
    const price = location.state?.price;
    if(!price) {
        history.replace({
            pathname: HOME,
            state: {
                payment_success: true
            }
        })  
    }

    return (
        <div className="credit-pay-container">
            <CreditPay price={price}/>
        </div>
    )
}

export default Payment;