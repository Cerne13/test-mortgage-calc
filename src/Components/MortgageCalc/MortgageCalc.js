import React, { useState } from 'react';
import './Mortgagecalc.css';

import Inputs from '../Inputs/Inputs';
import Result from '../Result/Result';

const MortgageCalc = () => {
	const [values, setValues] = useState({
		cost: 3000,
		initialPayment: 1000,
		minPayment: 1000,
		years: 1,
	});

	const handleCostChange = (e) => {
		setValues({
			...values,
			cost: e.target.value,
			minPayment: (e.target.value / 3).toFixed(0),
			initialPayment: (e.target.value / 3).toFixed(0),
		});
	};

	const handlePaymentChange = (e) => {
		setValues({ ...values, initialPayment: e.target.value });
	};

	const handleYearsChange = (e) => {
		setValues({ ...values, years: e.target.value });
	};

	const incrementYear = () => {
		values.years < 30
			? setValues({ ...values, years: Number(values.years) + 1 })
			: void 0;
	};

	const decrementYear = () => {
		values.years > 1
			? setValues({ ...values, years: Number(values.years) - 1 })
			: void 0;
	};

	return (
		<div className='calc-container'>
			<div className='calc-title'>
				<h2>Калькулятор ипотеки</h2>
				<span className='calc-title-shadow'>Калькулятор ипотеки</span>
			</div>

			<div className='calc-choice'>
				<div className='item' onClick={() => console.log('clicked 1')}>
					Расчет платежа
				</div>
				<div className='item' onClick={() => console.log('clicked 2')}>
					Расчет стоимости оъекта
				</div>
			</div>

			<div className='calc-wrap'>
				<Inputs
					values={values}
					handleCostChange={handleCostChange}
					handlePaymentChange={handlePaymentChange}
					handleYearsChange={handleYearsChange}
				/>
				<Result
					values={values}
					initialPayment={values.initialPayment}
					incrementYear={incrementYear}
					decrementYear={decrementYear}
				/>
			</div>
		</div>
	);
};

export default MortgageCalc;
