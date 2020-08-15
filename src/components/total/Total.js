import React from 'react';
import TotalMoney from './TotalMoney';
import Balance from './Balance';

const Total = ({ transactions }) => {
console.log(transactions);
   return <section className="total">
        {/* <header className="total__header">
            <h3>Баланс</h3>
            <p className="total__balance">0 $</p>
        </header> */}
        <Balance transactions={transactions}/>
        <TotalMoney transactions={transactions}/>
    </section>
};

export default Total;