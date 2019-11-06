import React from 'react';
import classnames from "classnames"

const FormInputGroup = ({
    name,
    type,
    value,
    onChange,
    placeholder,
    error

}) => {
    return (
         <div className="form-group">
                            <label htmlFor={name}>Name</label>
                            <input
                            type={type}
                            name={name}
                            value={value}
                            onChange={onChange}
                            id={name}
                            className={classnames('form-control', {'is-invalid' : error})}
                            placeholder={placeholder}
                        />
                        {error && <div className="invalid-feedback">
                        {error}
                   </div>}
                        
        </div>
    );
}

FormInputGroup.defaultProps={
    type: "text"
};

export default FormInputGroup;
