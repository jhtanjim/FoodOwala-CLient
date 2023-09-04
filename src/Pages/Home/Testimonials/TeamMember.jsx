import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';


const TeamMember = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://food-owala-server.vercel.app/team')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeams(data);
      });
  }, []);

  return (
    <div className=''>
    <SectionTitle
    subHeading='Team Member'
    heading={'Team Member'}

></SectionTitle>
    <div className=' max-w-screen-xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 lg:gap-12  '>
      {teams.map((team) => (
        <div className="card w-96 bg-base-100 shadow-xl my-4 mx-auto" key={team.id}>
          <figure>
          <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={team.image}/>
  </div>
</div>
          </figure>
          <div className="card-body">
            <h2 className="text-center text-lg font-bold" >
              {team.name}
           
            </h2>
           <div className='flex gap-4 mx-auto'>
           <Link className='text-2xl' to={team.fb}> <FaFacebook></FaFacebook></Link>
                            <Link className='text-2xl' to={team.ig}><FaInstagram></FaInstagram></Link>
           </div>
            
            </div>
          </div>
      
      ))}
    </div>
    </div>
  );
};

export default TeamMember;
