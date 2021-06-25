import React from 'react';
import './Inputs.css';

import InputField from '../InputField/InputField';

const Inputs = ({
	values,
	handleCostChange,
	handlePaymentChange,
	handleYearsChange,
}) => {
	return (
		<form>
			<InputField
				name='Стоимость недвижимости'
				id='propertyPrice'
				handleChange={handleCostChange}
				data={values.cost}
				min='3000'
				max='1000000'
				step='1500'
			/>
			<InputField
				name='Первоначальный взнос'
				id='initialPayment'
				handleChange={handlePaymentChange}
				data={values.initialPayment}
				min={values.minPayment}
				max={values.cost}
				value={values.minPayment}
				step='500'
			/>
			<InputField
				name='Срок кредитования'
				id='terms'
				handleChange={handleYearsChange}
				data={values.years}
				min='1'
				value='1'
				max='30'
				step='1'
			/>
		</form>
	);
};

export default Inputs;
