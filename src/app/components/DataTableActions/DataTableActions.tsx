import React from 'react';
import { Popover } from 'antd';
import { Link } from 'react-router-dom';

import IconDelete from '~/assets/svg/data-table-actions/ic_delete.svg';
import IconEdit from '~/assets/svg/data-table-actions/ic_edit.svg';
import MoreDots from '~/assets/svg/ic_more_dots.svg';
import { translate } from '~/services/i18n';

interface IProps {
  onRemove?: any;
  row?: any;
  basePath?: string;
  maxWidth?: number;
  type?: string;
}

const DataTableActions: React.FC<IProps> = (props) => {
  const { row, basePath, onRemove } = props;

  const onEdit = (id: string) => {
    return `${basePath}/${id}`;
  };

  const onDelete = (id: string) => {
    if (onRemove) {
      onRemove(id);
    }

    return id;
  };

  return (
    <div
      className="data-table-actions"
      style={{
        width: props.maxWidth || '100%',
        display: props.maxWidth ? 'inline-block' : 'block',
      }}
    >
      <Popover
        placement="leftTop"
        trigger="click"
        content={
          <div className="data-table-actions__items">
            <div className="data-table-actions__items__single">
              {basePath && (
                <Link
                  className="data-table-actions__items__single__link"
                  to={onEdit(row.id)}
                >
                  <span className="data-table-actions__items__single__link__icon">
                    <img src={IconEdit} alt="icon" />
                  </span>
                  <span className="data-table-actions__items__single__link__text">
                    {translate('COMPONENTS.DATA_TABLE_ACTIONS.EDIT.LABEL')}
                  </span>
                </Link>
              )}
            </div>
            {onRemove && (
              <div className="data-table-actions__items__single">
                <a
                  className="data-table-actions__items__single__link"
                  onClick={() => onDelete(row.id)}
                  href="aa"
                >
                  <span className="data-table-actions__items__single__link__icon">
                    <img src={IconDelete} alt="icon" />
                  </span>
                  <span className="data-table-actions__items__single__link__text">
                    {translate('COMPONENTS.DATA_TABLE_ACTIONS.DELETE.LABEL')}
                  </span>
                </a>
              </div>
            )}
          </div>
        }
      >
        <div className="data-table-actions__button">
          <img src={MoreDots} alt="more" />
        </div>
      </Popover>
    </div>
  );
};

export default DataTableActions;
