import React from 'react'

const Home = () => {
  return (
    <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')]   bg-gray-700 bg-blend-multiply">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Team</button>
        </div>
        
      </div>
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit inventore modi ipsam, voluptatem distinctio doloremque nam nisi optio sit nemo itaque harum illum reprehenderit aliquid possimus nihil laudantium reiciendis! Enim corporis animi illum neque quis eum magni a atque ad quos blanditiis delectus repellat officiis libero ullam officia, odit laudantium accusamus eos modi. Vitae beatae nisi, illo in et officia quod atque saepe placeat facere repellendus dolores qui odio suscipit assumenda, nostrum reprehenderit totam doloribus delectus aliquam ea inventore dolor ipsum. Nesciunt aliquam aspernatur, veritatis voluptatibus fugiat, praesentium corrupti assumenda voluptate, explicabo nostrum nulla repellendus a laudantium? Quibusdam, dolor culpa!</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Mulai!
            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  )
}

export default Home