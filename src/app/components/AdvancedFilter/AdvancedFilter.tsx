import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import AdvancedButton from '~/components/AdvancedButton/AdvancedButton';
import { AdvancedFilterType } from '../../enum/advancedFilter';
import AdvancedInput from '~/components/AdvancedInput/AdvancedInput';
import AdvancedSelect from '~/components/AdvancedSelect/AdvancedSelect';
import AdvancedDateTimePicker from '~/components/AdvancedDateTimePicker/AdvancedDateTimePicker';
import AdvancedCheckbox from '~/components/AdvancedCheckbox/AdvancedCheckbox';
import formatISO from 'date-fns/formatISO';
import { removeSpecialChars } from '~/services/strings';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import AdvancedForm from '~/components/AdvancedForm/AdvancedForm';

type IProps = {
  fields?: any[];
  onSearch?: any;
  defaultFields?: any;
};

export const defaultFields = {
  page: 1,
  offset: 0,
  limit: 10,
  orderBy: 'createdAt',
  sort: 'desc',
};

const AdvancedFilter: React.FC<IProps> = (props: IProps) => {
  const parseValues = () => {
    const formattedFields: any = props.fields?.map((o) => ({
      [o.name]: o.defaultValue || '',
    }));
    return formattedFields.reduce((result: any, item: any) => {
      const key: any = Object.keys(item)[0];
      result[key] = item[key];
      return result;
    }, {});
  };
  const [form, setForm] = useState(parseValues());

  const onFormChange = (key: string, value: string) => {
    const updatedForm = {
      ...form,
      [key]: value,
    };
    // @ts-ignore
    setForm(updatedForm);
  };

  const onCleanSearch = () => {
    const defaultValues: any = parseValues();
    setForm(defaultValues);
    props.onSearch(cleanResponse(defaultValues));
  };

  const cleanResponse = (obj: any) => {
    obj = { ...obj };
    for (const propName in obj) {
      if (!obj[propName] || obj[propName] === '') {
        delete obj[propName];
      }
    }
    for (const field in props.fields) {
      // @ts-ignore
      if (props.fields[field].cleanOnSearch) {
        for (const propName in obj) {
          // @ts-ignore
          if (obj[propName] && props.fields[field].name === propName) {
            obj[propName] = removeSpecialChars(obj[propName]);
          }
        }
      }
    }
    if (props.defaultFields) {
      obj = {
        ...props.defaultFields,
        ...obj,
      };
    } else {
      obj = {
        ...defaultFields,
        ...obj,
      };
    }
    return obj;
  };

  const meetsCondition = (field: any) => {
    return (
      !field.conditionalField ||
      (field.conditionalField && form[field.conditionalField])
    );
  };

  return (
    <div className="advanced-filter__wrapper">
      <Accordion
        style={{
          boxShadow: 'none',
          border: '1px solid rgba(224, 224, 224, 1)',
        }}
      >
        <AccordionSummary
          expandIcon={<DownOutlined style={{ fontSize: 12 }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <strong>
            {props.fields && props.fields?.length > 1
              ? 'Filtros avançados'
              : 'Filtro avançado'}
          </strong>
        </AccordionSummary>
        <AccordionDetails>
          <AdvancedForm
            className="advanced-filter"
            onSubmit={() =>
              props.onSearch ? props.onSearch(cleanResponse(form)) : {}
            }
          >
            <div className="advanced-filter__fields">
              {props.fields?.map((field, fieldIndex) => (
                <div
                  key={fieldIndex.toString()}
                  className="advanced-filter__fields__single"
                >
                  {field.type === AdvancedFilterType.TEXT &&
                    meetsCondition(field) && (
                      <div className="advanced-filter__fields__single__inner">
                        <AdvancedInput
                          label={field.placeholder || 'Digite um valor'}
                          onChange={(val: string) =>
                            onFormChange(
                              field.name,
                              field.formatter ? field.formatter(val) : val
                            )
                          }
                          value={(form && form[field.name]) || ''}
                        />
                      </div>
                    )}
                  {field.type === AdvancedFilterType.SELECT &&
                    meetsCondition(field) && (
                      <div className="advanced-filter__fields__single__inner">
                        <AdvancedSelect
                          label={field.placeholder || 'Selecione um valor'}
                          onChange={(val: string) =>
                            onFormChange(field.name, val)
                          }
                          value={(form && form[field.name]) || ''}
                          options={field.options}
                          showEmpty
                        />
                      </div>
                    )}
                  {field.type === AdvancedFilterType.DATE_PICKER &&
                    meetsCondition(field) && (
                      <div className="advanced-filter__fields__single__inner">
                        <AdvancedDateTimePicker
                          label={field.placeholder || 'Selecione uma data'}
                          onChange={(val: any) =>
                            onFormChange(field.name, formatISO(val))
                          }
                          value={(form && form[field.name]) || null}
                          format={field.format}
                          InputProps={{ readOnly: true }}
                        />
                      </div>
                    )}
                  {field.type === AdvancedFilterType.CHECKBOX &&
                    meetsCondition(field) && (
                      <div className="advanced-filter__fields__single__inner">
                        <AdvancedCheckbox
                          label={field.placeholder}
                          onChange={(val: any) => onFormChange(field.name, val)}
                          value={(form && form[field.name]) || false}
                          format={field.format}
                        />
                      </div>
                    )}
                </div>
              ))}
            </div>
            <div className="advanced-filter__search">
              <div className="advanced-filter__search__clean">
                <AdvancedButton
                  text="Limpar filtros"
                  onClick={onCleanSearch}
                  variant="text"
                />
              </div>
              <AdvancedButton
                text="Filtrar"
                onClick={() =>
                  props.onSearch ? props.onSearch(cleanResponse(form)) : {}
                }
                startIcon={<SearchOutlined />}
                type="submit"
              />
            </div>
          </AdvancedForm>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default AdvancedFilter;
