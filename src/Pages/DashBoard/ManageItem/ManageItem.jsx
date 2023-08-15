import React, { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ManageItemCard from './ManageItemCard';

const ManageItem = () => {


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
        <div>
<h3 className='lg:text-4xl uppercase border-y-4  lg:py-4 text-center mb-12 font-bold'>Manage  <span className='text-yellow-500'>Items</span></h3>
<Tabs className='my-8' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>



                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Drinks</Tab>

                </TabList>
                <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          </table>
                <TabPanel>
                    <div className=''>
                        {
                            salad.map(item => <ManageItemCard
                                key={item._id}
                                item={item}
                            ></ManageItemCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=''>
                        {
                            pizza.map(item => <ManageItemCard
                            key={item._id}
                            item={item}
                            ></ManageItemCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className=''>
                        {
                            soup.map(item => <ManageItemCard
                                key={item._id}
                                item={item}
                            ></ManageItemCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className=''>
                        {
                            dessert.map(item => <ManageItemCard
                                key={item._id}
                                item={item}
                            ></ManageItemCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className=''>
                        {
                            drinks.map(item => <ManageItemCard
                                key={item._id}
                                item={item}
                            ></ManageItemCard>)
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ManageItem;