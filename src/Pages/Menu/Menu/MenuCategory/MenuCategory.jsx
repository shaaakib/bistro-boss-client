import React from 'react';
import MenuItems from '../../../Shared/MenuItems/MenuItems';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

export default function MenuCategory({ items, title, img }) {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
    </div>
  );
}
