import React from 'react'

import PhotoCard from './PhotoCard';

export const PhotosList = ({ list }) => {
  return (
    <ul>
      {list &&
        list.map((page) => {
          return page.data.map((item) => {
            return (
              <li key={item.id} className="mb-10">
                <PhotoCard card={item} />
              </li>
            );
          });
        })}
    </ul>
  )
}
