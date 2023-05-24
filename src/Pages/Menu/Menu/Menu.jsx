import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Hooks/UseMenu/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

export default function Menu() {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === 'dessert');
  const soup = menu.filter((item) => item.category === 'soup');
  const salad = menu.filter((item) => item.category === 'salad');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const offered = menu.filter((item) => item.category === 'offered');

  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      <Cover img={menuImg} title={'Our menu'} />
      {/* main cover  */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
      {/* offered menu items  */}
      <MenuCategory items={offered} />
      {/* dessert menu items  */}
      <MenuCategory items={desserts} title="Dessert" img={dessertImg} />
      {/* Pizza menu items  */}
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg} />
      {/* salad menu items  */}
      <MenuCategory items={salad} title="Salad" img={saladImg} />
      {/* soup menu items  */}
      <MenuCategory items={soup} title="Soup" img={soupImg} />
    </div>
  );
}
