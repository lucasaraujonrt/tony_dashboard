import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react';

const AdvancedCheckbox = ({
  value,
  label,
  onChange,
  name,
  disabled,
}: any) => {
  return (
    <div className="advanced-checkbox">
      <FormControlLabel
        control={(
          <Checkbox
            disabled={disabled}
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
            name={name}
            color="primary"
          />
        )}
        label={label}
      />
    </div>
  );
};

export default AdvancedCheckbox;
