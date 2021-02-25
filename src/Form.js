import React from 'react';

export default function Form(props) {
    const { value, change, submit } = props;

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
                <input 
                    type='text'
                    name='name'
                    placeholder='name'
                    value={value.name}
                    onChange={onChange}
                />
                <input 
                    type='text'
                    name='email'
                    placeholder='e-mail'
                    value={value.email}
                    onChange={onChange}
                />
                <input 
                    type='password'
                    name='password'
                    placeholder='password'
                    value={value.password}
                    onChange={onChange}
                />
                <button>Submit</button>
            </div>
        </form>
    )
}