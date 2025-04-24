
function Contact() {
  return (
  <section id="contact">
        <div className="container text-center mt-32">
            <h2 className='text-3xl mb-8 md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent '>Contact</h2>
            <p className='text-sm mb-10 md:text-xl md:mb-20 md:mt-5'>
            Get in touch with me for collaborations, projects, or just to say hi. I'm always open to connecting!
            </p>
        </div>
        <div class="py-5 lg:py-16 px-5 max-w-screen-md rounded-2xl border border-gray-300 m-2 lg:mx-auto ">



        <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center  bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md transition duration-300 hover:from-blue-400  hover:to-purple-400">Send message</button>
      </form>
      </div>
  </section>
  )
}

export default Contact