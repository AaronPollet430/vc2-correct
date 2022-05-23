import React from 'react'
import { Link } from 'react-router-dom'

function DienstenCardItem(props) {
  return (
    <div>
      <li className="diensten__cards__item">
        <Link  to={props.path} className="diensten__cards__item__link">
          <figure className="diensten__cards__item__pic-wrap">
            <img
              src={props.src}
              alt="Dienst 1"
              className="diensten__cards__item__img">
            </img>
          </figure>
          <div className="diensten__cards__item__info">
            <h5 className="diensten__cards__item__text">
                {props.text}
            </h5>
          </div>
        </Link>
      </li>
    </div>
  )
}

export default DienstenCardItem;