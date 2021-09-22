import React from 'react';

interface CardProps {
  description: string;
  priority: string;
  sector: string;
  createdAt: string;
}

const Card = ({ description, priority, sector, createdAt }: CardProps) => (
  <div className="card">
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
      <span className="card__inner__created__text">{createdAt}</span>
    </div>
  </div>
);

export default Card;
