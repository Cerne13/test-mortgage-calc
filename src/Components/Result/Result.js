import React from 'react';
import './Result.css';

const Result = ({ values, incrementYear, decrementYear }) => {
	const { cost, initialPayment, years } = values;

	const monthlyRate = 0.088 / 12;

	// let interest =
	// 	(cost - initialPayment) *
	// 	(monthlyRate + ((monthlyRate / (1 + monthlyRate)) * (years * 12) - 1));

	let interest =
		((cost - initialPayment) * monthlyRate) /
		(1 - Math.pow(1 + monthlyRate, -(years * 12)));

	return (
		<div className='result-container'>
			<p className='result-title'>Расчет оплаты</p>
			<div className='result-info-wrap'>
				<span className='result-calc' onClick={decrementYear}>
					-
				</span>
				<span className='result-value'>{interest.toFixed(2)}</span>
				<span className='result-calc' onClick={incrementYear}>
					+
				</span>
			</div>
			<div className='result-info'>
				<div className='info-percent'>
					<p>Процентная ставка</p>
					<span className='info-bold'>8.8%</span>
				</div>
				<div className='info-value'>
					<p>Сумма кредита</p>
					<span className='info-bold'>{cost - initialPayment} $</span>
				</div>
			</div>
			<div className='button-container'>
				<button className='button-red'>Оставить заявку</button>
			</div>
		</div>
	);
};

export default Result;
