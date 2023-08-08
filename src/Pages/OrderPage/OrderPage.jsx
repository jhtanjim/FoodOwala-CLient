import React from 'react';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import { useParams } from 'react-router';
import useMenu from '../../Hooks/useMenu';
import FoodCard from '../../Components/FoodCard/FoodCard';

const OrderPage = () => {
    const [menu] = useMenu()

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()

    const initialIndex = categories.indexOf(category)


    const [tabIndex, setTabIndex] = useState(initialIndex)



    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div className='max-w-screen-2xl mx-auto'>






            <Cover
                img={orderImg}
                title="Order Food"
            ></Cover>
            <Tabs className='my-8' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>



                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Drinks</Tab>

                </TabList>
                <TabPanel>
                    <div className='grid lg:lg:grid-cols-3 gap-4'>
                        {
                            salad.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-4'>
                        {
                            pizza.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-4'>
                        {
                            soup.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-4'>
                        {
                            dessert.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-4'>
                        {
                            drinks.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default OrderPage;