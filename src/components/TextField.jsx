import React from 'react'

const TextField = ({ fieldName, fieldType, placeholder, onChange, value }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">{fieldName}</span>
            </label>
            <input type={fieldType}
                onChange={onChange}
                value={value}
                placeholder={placeholder} className="input input-bordered" required />
        </div>
    )
}

export default TextField