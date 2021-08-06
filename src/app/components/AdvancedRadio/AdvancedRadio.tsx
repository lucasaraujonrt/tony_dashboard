import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const AdvancedRadio = ({
  value,
  label,
  onChange,
  name,
  items,
}: any) => {
  return (
    <div className="advanced-radio">
      <FormControl component="fieldset">
        <div className="advanced-radio__label">
          <FormLabel component="legend">
            {label}
          </FormLabel>
        </div>
        <RadioGroup
          row
          aria-label={name}
          name={name}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
        >
          {items && items.map((item: any, itemIndex: number) => (
            <FormControlLabel
              key={itemIndex.toString()}
              label={item.label}
              value={item.value}
              control={(
                <Radio
                  color="primary"
                />
              )}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default AdvancedRadio;
