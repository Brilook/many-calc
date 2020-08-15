import React from 'react';

const countingTotal = (data, tf) => (data.reduce((acc, item) => {
    if (item.add === tf) {
        acc += Number(item.amount);
    }
    return acc;
}, 0));

const TotalMoney = ({transactions}) => {
    console.log(transactions)

    return <div className="total__main">
        <div className="total__main-item total__income">
            <h4>Доходы</h4>
            <p className="total__money total__money-income">+{countingTotal(transactions, true)}
                $</p>
        </div>
        <div className="total__main-item total__expenses">
            <h4>Расходы</h4>
            <p className="total__money total__money-expenses">-{countingTotal(transactions, false)}
                $</p>
        </div>
    </div>
};

export default TotalMoney;