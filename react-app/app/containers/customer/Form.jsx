/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

import validate from './validate'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div>
	<label>{label}</label>
	<div>
	<input {...input} type={type} placeholder={label}/>
	{touched && error && <span>{error}</span>}
	</div>
	</div>
)

const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;

class FieldArraysForm extends React.Component {

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				{
					this.props.error 
					&&
					<strong>
					  {this.props.error}
					</strong>
				}
				<Field
					name="customerId"
					type="text"
					component={renderField}
					label="Customer ID"
					validate={maxLength(3)}
				/>
				<div>
					<button 
						type="submit" 
						disabled={this.props.pristine || this.props.submitting}
					>
						Submit
					</button>
					<button 
						type="button" 
						disabled={this.props.pristine || this.props.submitting} 
						onClick={this.props.reset}
					>
						Clear Values
					</button>
				</div>
			</form>
		)
	}
}

export default reduxForm({
	form: 'fieldArrays',
	validate
})(FieldArraysForm)
