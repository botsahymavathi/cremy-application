
import React from 'react'

const HeroSection = () => {
  return (
    <section>
        <section className="text-gray-600 body-font bg-BgColor text-TextColor">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-TextColor">
      Scoop Into Happiness  
      <br className="hidden lg:inline-block" />Freshly made, always delightful
    </h1>
    <p className="mb-8 leading-relaxed">
      From creamy vanilla classics to adventurous sundaes loaded with toppings, 
      every scoop is crafted to bring a smile. Taste the richness of real milk, 
      fresh fruits, and premium flavors churned to perfection. Whether it’s a cone, 
      a cup, or a sundae, there’s a flavor waiting just for you. 🍦
    </p>
    <div className="flex justify-center">
      <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
        Order Now
      </button>
      <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
        View Menu
      </button>
    </div>
  </div>
   <div className="">
      <img src="assets/child.png" alt="child" />
   </div>

  </div>
</section>
    </section>
  )
}

export default HeroSection