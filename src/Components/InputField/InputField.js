import React from 'react';
import './InputField.css';

const InputField = ({ name, id, handleChange, data, min, max, step }) => {
	return (
		<div className='field-container'>
			<label htmlFor={id}>{name}</label>
			<input
				id={id}
				className='text-input'
				type='number'
				value={data}
				onChange={handleChange}
			/>
			<label htmlFor={id} className='input-label'>
				{data}
				<span className='label-span'> $</span>
			</label>

			<input
				type='range'
				min={min}
				value={data}
				max={max}
				step={step}
				onChange={handleChange}
			/>
		</div>
	);
};

export default InputField;
