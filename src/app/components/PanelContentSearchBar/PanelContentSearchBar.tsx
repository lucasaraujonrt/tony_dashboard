import React, { useState } from 'react';

import AdvancedForm from '~/components/AdvancedForm/AdvancedForm';
import AdvancedInput from '~/components/AdvancedInput/AdvancedInput';
import { SearchFilter } from '~/models/module';
import { translate } from '~/services/i18n';

interface IProps {
  advancedFilter?: any;
  onFormSubmit?: any;
}

const initialValues: SearchFilter = {
  status: null,
  search: '',
};

const PanelContentSearchBar: React.FC<IProps> = (props) => {
  const {
    onFormSubmit,
  } = props;

  const [form, setForm] = useState(initialValues);

  const onFormChange = (key: string, value: string) => {
    setForm((prevState: models.SearchFilter) => ({ ...prevState, [key]: value }));
  };

  return (
    <AdvancedForm
      className="panel-content-search-bar"
      onSubmit={() => onFormSubmit(form)}
    >
      <div className="panel-content-search-bar__items">
        <div className="panel-content-search-bar__items__item panel-content-search-bar__items__item--search">
          <AdvancedInput
            label={translate('COMPONENTS.SEARCH_BAR.SEARCH.LABEL')}
            value={form.search}
            onChange={(val: string) => onFormChange('search', val)}
          />
        </div>
      </div>
    </AdvancedForm>
  );
};

export default PanelContentSearchBar;
