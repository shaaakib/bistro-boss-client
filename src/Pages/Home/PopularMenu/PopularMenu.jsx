import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import useMenu from '../../../Hooks/UseMenu/UseMenu';

export default function PopularMenu() {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === 'popular');

  return (
    <section className="mb-12">
      <SectionTitle subHeading={'Popular Items'} heading={'From Our Menu'} />

      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4">
        View Full Menu
      </button>
    </section>
  );
}
