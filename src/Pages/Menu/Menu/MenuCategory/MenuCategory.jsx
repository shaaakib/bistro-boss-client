import React from 'react';
import MenuItems from '../../../Shared/MenuItems/MenuItems';
import Cover from '../../../Shared/Cover/Cover';

export default function MenuCategory({ items, title, img }) {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
