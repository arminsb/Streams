import React from 'react';
import { Field, reduxForm } from 'redux-form';

class streamForm extends React.Component {

    renderError({ touched, error }) {

        if (touched && error) {
            return (<div className='ui error message'>
                <div className='header'>
                    {error}
                </div>
            </div>
            );
        }
    }



    renderInput = ({ input, label, meta }) => {
        // const className=`field ${meta.touched&&meta.error ? 'error' : ''}`;
        //or
        return (
            <div className='field'>
                <div className={`field ${meta.touched && meta.error ? 'error' : ''}`}>
                    <label>{label}</label>
                    <input {...input} />
                </div>
                <div>
                    {this.renderError(meta)}
                </div>
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='title' component={this.renderInput} label='Title' />
                <Field name='description' component={this.renderInput} label='Description' />
                <button className='ui inverted green button'>Submit</button>
            </form>
        );
    };
};

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'you must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'you must enter description';
    }

    return errors;
};

export default reduxForm({ form: 'streamForm', validate })(streamForm);

