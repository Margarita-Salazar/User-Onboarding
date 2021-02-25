import React from 'react';

export default function Form(props) {
    const { disabled, errors, value, change, submit } = props;

    const onChange = (event) => {
        const { name, value } = event.target;
        change(name, value);
    }
    const onSubmit = (event) => {
        submit();
        event.preventDefault();
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <div>{errors.name}</div>
                <input 
                    type='text'
                    name='name'
                    placeholder='name'
                    value={value.name}
                    onChange={onChange}
                />
                <div>{errors.email}</div>
                <input 
                    type='text'
                    name='email'
                    placeholder='e-mail'
                    value={value.email}
                    onChange={onChange}
                />
                <div>{errors.password}</div>
                <input 
                    type='password'
                    name='password'
                    placeholder='password'
                    value={value.password}
                    onChange={onChange}
                />
                <button disabled={disabled}>Submit</button>
            </div>
        </form>
    )
}