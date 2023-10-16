import React, { useState } from 'react';
import './App.css';

import reactLogo from './assets/react.svg';

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleCard = () => {
    setIsToggled(!isToggled);
  };

  const handleAddToContacts = () => {
    // Implement the logic to add the contact to the user's contacts here.
    alert('Contact added to your contacts!');
  };

  return (
    <div className=' bg-gradient-to-r from-gray-50 to-gray-300'>
      <div className="bg-[url('src/components/img/cool-background_6.png')] bg-cover bg-center h-screen overflow-auto">
        {/*bg-[url('src/components/img/cool-background_4.png')]*/}
        <div className="px-4 py-6 md:px-10 md:py-10 lg:px-20 lg:py-20">
          <div className="max-h-[1250px]  m-4 mx-auto  bg-white rounded-lg shadow-lg max-w-fit  sm:max-w-md sm:col-start-2 sm:col-end-3">
            <div className={`bg-white rounded-lg `}>
             <div className='grid grid-cols-10'>

                <div className=' col-span-1 bg-gradient-to-br from-black via-gray-500 to-gray-100 min-h-screen rounded-sm'> 
                  
                </div>

                <div className=' col-span-8'>

                  <img
                    src="src/components/img/confierence_3.jpg"
                    alt="Conferience Logo"
                    className="px-4 py-2 mx-auto"
                  />

                  {/* Add to Contacts Button */}
                  <div className="flex items-center justify-center my-4">
                    <button
                      className="flex items-center justify-center px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-700"
                      onClick={handleAddToContacts}
                    >
                      <img src="src/components/img/add-friend-svgrepo-com.svg" 
                      alt="add-friend-svgrepo-com.svg" 
                      className="w-6 h-6 mr-2" />
                      Add to Contacts
                    </button>
                  </div>

                  <img
                    src="src/components/img/person-circle-svgrepo-com.svg"
                    alt="person-circle-svgrepo-com"
                    className="w-12 h-12 mx-auto mt-4 sm:w-20 sm:h-20"
                  />

                  <div className="mt-2">
                    <p className="mb-2 text-3xl font-semibold text-center text-gray-800">
                      Dimitris Tzellos
                    </p>
                    <p className="mb-2 text-2xl font-semibold text-center text-gray-800 ">
                      Business Development
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-start  mb-2 text-xl font-semibold text-gray-800">

                    <img
                      src="src/components/img/phone-circle-svgrepo-com.svg"
                      alt="phone-circle-svgrepo-com"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    /> 

                    <div className='flex flex-col items-center justify-center'>
                      
                      <p className='px-2 '>+30 6987300147</p>
                    
                      <p className='text-xs/[2px] font-thin mb-2'>Work Phone</p>

                      <p className='px-2'>+30 6912345678</p>

                      <p className='text-xs/[2px] font-thin mb-2'>Direct Phone</p>

                      <p className='px-2'>+30 6999999999</p>

                      <p className='text-xs/[2px] font-thin mb-2'>Mobile Phone 1</p>

                      <p className='px-2'>+30 6987300147</p>

                      <p className='text-xs/[2px] font-thin mb-2'>Mobile Phone 2</p>

                    </div>

                    <img
                      src="src/components/img/email-circle-svgrepo-com.svg"
                      alt="email-circle-svgrepo-com"
                      className="w-8 h-8 sm:w-10 sm:h-10 mt-4"
                    />

                    <div className='flex flex-col items-center justify-center'>
                      
                      <p className='px-2 '>info@conferience.com</p>
                    
                      <p className='text-xs/[2px] font-thin mb-2'>Email</p>

                      <p className='px-2'>info@softbiz.eu</p>

                      <p className='text-xs/[2px] font-thin mb-2'>Secondary Email</p>


                    </div>

                    <img
                      src="src/components/img/office-business-work-workplace-home-company-3-svgrepo-com.svg"
                      alt="office-business-work-workplace-home-company-3-svgrepo-com"
                      className="w-8 h-8 sm:w-10 sm:h-10 mt-4"
                    />
        
                    <div className='flex flex-col items-center justify-center'>
                      
                      <p className='px-2 '>Conferience</p>
                    
                      <p className='text-xs/[2px] font-thin mb-2'>Company</p>

                    </div>

                    
                    <img
                      src="src/components/img/web-svgrepo-com.svg"
                      alt="web-svgrepo-com"
                      className="w-8 h-8 sm:w-10 sm:h-10 mt-4"
                    />

                    <div className='flex flex-col items-center justify-center'>
                      
                      <p className='px-2 '>conferience.com</p>
                    
                      <p className='text-xs/[2px] font-thin mb-2'>Site</p>

                    </div>

                    <img
                      src="src/components/img/location.svg"
                      alt="location"
                      className="w-8 h-8 sm:w-10 sm:h-10 mt-4"
                    />

                    <div className='flex flex-col items-center justify-center mb-6'>
                      
                      <p className='px-2 mx-2 ml-8 sm:ml-10'>47 Ethnikis Antistaseos, 15232, Chalandri, Greece</p>
                    
                      {/*<p className='text-xs/[2px] font-thin mb-2'>Address</p>*/}

                    </div>


                  </div>

                                    
                  {/* Add to Contacts Button */}
                  <div className="flex items-center justify-center my-4">
                    <button
                      className="flex items-center justify-center px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-700"
                      onClick={handleAddToContacts}
                    >
                      <img src="src/components/img/add-friend-svgrepo-com.svg" 
                      alt="add-friend-svgrepo-com.svg" 
                      className="w-6 h-6 mr-2" />
                      Add to Contacts
                    </button>
                  </div>

                </div>

                <div className=' col-span-1 bg-gradient-to-tl from-black via-gray-500 to-gray-100 min-h-screen rounded-sm'> 
                  
                </div>

              </div>

            </div>   
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
