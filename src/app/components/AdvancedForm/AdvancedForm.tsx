import React, { FormEvent } from 'react';

const AdvancedForm = ({
  children,
  onSubmit,
}: any) => {
  const formSubmit = (e: FormEvent) => {
    e.preventDefault();

    return onSubmit();
  };

  return (
    <div className="advanced-form">
      <form
        onSubmit={formSubmit}
      >
        {children}
      </form>
    </div>
  );
};

export default AdvancedForm;
