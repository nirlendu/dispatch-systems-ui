/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

const validate = values => {
	const errors = {}
	if (!values || !values.customerId) {
		errors.customerId = 'Required'
	}
	return errors
}

export default validate