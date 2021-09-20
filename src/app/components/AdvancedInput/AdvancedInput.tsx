import React from 'react';
import TextField from '@material-ui/core/TextField';

const AdvancedInput = ({
  value,
  label,
  placeholder,
  variant = 'outlined',
  onChange,
  multiline = false,
  rows = multiline ? 4 : 1,
  type = 'text',
  InputLabelProps,
  disabled,
}: any) => {
  return (
    <div className='advanced-input'>
      <TextField
        value={value || ''}
        label={label}
        placeholder={placeholder}
        variant={variant}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
        multiline={multiline}
        rows={rows}
        type={type}
        InputLabelProps={InputLabelProps}
        disabled={disabled}
        
      />
    </div>
  );
};

export default AdvancedInput;
