import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFormData } from '../actions';

import FormCheckbox from './form_checkbox';
import FormRadio from './form_radio';
import FormSelect from './form_select';

class FormType extends Component {
	constructor(props){
		super(props)

		this.handleChange = this.handleChange.bind(this)
		this.saveFormElement = this.saveFormElement.bind(this)
		this.state = { formInputValue: "" }
	}

	// handles change
	handleChange(e) {
		const target = e.target
		const name = target.name
		this.setState({ [name]: target.value })
	}

	// saves the form element when you click off of the certain element
	saveFormElement(e) {
		this.props.updateFormData(this.props.id, this.state.formInputValue)
	}

	// literaly just made a button so if you pressed enter it wouldn't "submit"..
	preventInputSubmit(e) {
		e.preventDefault()
	}

	renderFormChoice(){
		const { formTypeChoice } = this.props;

		switch (formTypeChoice){
			case "text":
				return (
					<div>
						<FormControl 
								type="text"
								name="formInputValue"
								value={this.state.formInputValue}
								onChange={this.handleChange}
								placeholder="This text will not be saved"
								onBlur={this.saveFormElement}
							/>
							<button type="submit" onClick={this.preventInputSubmit} style={{display:"none"}} />
					</div>
				)
			case "textarea":
				return (
					<div>
						<FormControl 
								type="text"
								name="formInputValue"
								componentClass="textarea"
								value={this.state.formInputValue}
								onChange={this.handleChange}
								placeholder="This text will not be saved"
								onBlur={this.saveFormElement}
							/>
						<button type="submit" onClick={this.preventInputSubmit} style={{display:"none"}} />
					</div>
				)
			case "checkbox":
			 return (
					<FormCheckbox labels={this.props.labels}/>
				)
		 	case "radio":
			 	return (
			 		<FormRadio labels={this.props.labels}/>
				)
			case "select":
				return (
					<FormSelect labels={this.props.labels} />
				)
			default:
				return (
					<div>Choose</div>
				)
		}
	}

	render() {
		return (
			<form>
				<FormGroup style={{marginBottom:"10px"}}>
					{this.renderFormChoice()}
				</FormGroup>
			</form>
		)
	}
}

// function mapStateToProps(state){
// 	return { formObjects: state.formObjects }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateFormData }, dispatch)
}

export default connect(null, mapDispatchToProps)(FormType);