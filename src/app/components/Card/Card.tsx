import React from 'react';
import { DateTime } from 'luxon';

interface CardProps {
  description: string;
  priority: string;
  sector: string;
  createdAt: string;
  onClick: () => void;
}

const Card = ({
  description,
  priority,
  sector,
  createdAt,
  onClick,
}: CardProps) => (
  <div className="card" onClick={onClick}>
    <div>
      <span className="card__inner__title__text">{description}</span>
    </div>

    <div className="card__inner__tags">
      <div className="card__inner__priority">
        <span className="card__inner__priority__text">{priority}</span>
      </div>
      <div className="card__inner__sector">
        <span className="card__inner__sector__text">{sector}</span>
      </div>
    </div>

    <div className="card__inner__created">
      <span className="card__inner__created__text">
        {DateTime.fromISO(createdAt as string).toLocaleString(
          DateTime.DATETIME_SHORT
        )}
      </span>
    </div>
  </div>
);

export default Card;
