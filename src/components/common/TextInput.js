import React, { PropTypes } from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
    let wrapperClass = `form-group`;
    if (error && error.length > 0) {
        wrapperClass += ' has-error'
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
                { error && <div className="alert alert-danger">{error}</div> }
            </div>
        </div>
    );
};

TextInput.propTypes = {
    error: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

export default TextInput;
