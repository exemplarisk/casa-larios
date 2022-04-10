import React from 'react'

function SpecModal() {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto">
                <div role="article" className="bg-gray-100 py-12 md:px-8">
                    <div className="px-4 xl:px-0 py-10">
                        <div className="flex flex-col lg:flex-row flex-wrap">
                            <div className="mt-4 lg:mt-0 lg:w-3/5">
                                <div>
                                    <h1 className="text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12">The Apartment</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 xl:px-0">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                            <div role="cell" className="bg-gray-100">
                                <div className="bg-white p-5 rounded-md h-full w-full">
                                    <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/27R6nk5/home-1.png" alt="home-1" /></span>
                                    <h1 className="pb-4 text-2xl font-semibold">Apartment Overview</h1>
                                    <div className="my-5">
                                        <div className="flex items-center pb-4 dark:border-gray-700 w-full space-x-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                            <h4 >82 Sqm, 2 Bedrooms, 7 beds, 2 Bathrooms, kitchen, large terrasse</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 w-full space-x-3">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4>Large outdoor pool area</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4>Wifi: Fiber 100/100</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700 w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4>Dish washer, washing machine, TV, books</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="cell" className="bg-gray-100">
                                <div className="bg-white p-5 rounded-md h-full w-full">
                                    <span><img className="bg-gray-200 p-2 mb-5 rounded-full h-30 w-30 viewBox=0 0 24 24" width="36" height="36" src="https://img.icons8.com/ios-glyphs/344/globe--v1.png" alt="pricetags-1" /></span>
                                    <h1 className="pb-4 text-2xl font-semibold">Location</h1>
                                    <div className="my-5">
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >Closest airport: Alicante</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >City: Playa Flamenca</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >Closest large city: Torrevieja</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >15 minute walk to large outdoor mall</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >20 minute walk to nearest beach</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="cell" className="bg-gray-100">
                                <div className="bg-white p-5 rounded-md h-full w-full">
                                    <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/GT4KHvJ/card-1.png" alt="home-1" /></span>
                                    <h1 className="pb-4 text-2xl font-semibold">Cost</h1>
                                    <div className="my-5">
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >Every 1 day: 150 Euro</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >Every 1 week: 400 Euro</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >Every 1 month: 1100 Euro</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >What is the refund policy if I have to cancel during the month</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="cell" className="bg-gray-100">
                                <div className="bg-white p-5 rounded-md h-full w-full">
                                    <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/rG4r6NJ/notifications-1.png" alt="home-1" /></span>
                                    <h1 className="pb-4 text-2xl font-semibold">Pool Area</h1>
                                    <div className="my-5">
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >Deep: 2.2m</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >Sun heated</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >Showers</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >Childrens Area</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="cell" className="bg-gray-100">
                                <div className="bg-white p-5 rounded-md h-full w-full">
                                    <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/HFC1hqn/people-1.png" alt="home-1" /></span>
                                    <h1 className="pb-4 text-2xl font-semibold">Nearby Restaurants</h1>
                                    <div className="my-5">
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >Around the corner: <a style={{ color: "blue" }} rel="noreferrer noopener" target="_blank" href="http://www.cafeteriaconcierto.com/">Concierto</a> <a rel="noreferrer noopener" target="_blank" href="http://carta.cafeteriaconcierto.com/carta/index.html" className=" cursor-pointer text-red-600 visited:text-purple-600">MENU</a></h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >El Gato: For Meat Lovers</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >Clarkes Bar</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 ><a style={{ color: "blue" }} href="https://zeniaboulevard.es/en/restaurants" rel="noreferrer noopener" target="_blank">La Zenia Boulevard Restaurants</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="cell" className="bg-gray-100">
                                <div className="bg-white p-5 rounded-md h-full w-full">
                                    <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/QX80fYm/lock-closed-1.png" alt="home-1" /></span>
                                    <h1 className="pb-4 text-2xl font-semibold">Nearby Shopping</h1>
                                    <div className="my-5">
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 ><a style={{ color: "blue" }} href="https://zeniaboulevard.es/en/stores" rel="noreferrer noopener" target="_blank">La Zenia Boulevard Stores</a></h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >El Corte Iglés</h4>
                                        </div>
                                        <div className="flex items-center pb-4 dark:border-gray-700  w-full">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h4 >Torrevieja</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecModal