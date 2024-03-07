const OurService = () => {
  const serviceList = [
    {
      id: 1,
      title: "High-Quality Products",
      description: "We offer a curated selection of high-quality products",
      image: "/images/home/services/assurance.png",
    },
    {
      id: 2,
      title: "Fast-Delivery",
      description: "We deliver your order promptly to your door",
      image: "/images/home/services/fast-delivery.png",
    },
    {
      id: 3,
      title: "Online Ordering",
      description: "Explore products & order with ease using our Online Ordering n",
      image: "/images/home/services/order.png",
    },
    {
      id: 4,
      title: "Gift Cards",
      description: "Give the gift of exceptional dining with SE Shop Gift Cards",
      image: "/images/home/services/gift.png",
    },
  ]
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">OUR STORY & SERVICES</p>
            <h2 className="title">Our Journey and Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
              We provide a curated selection of high-quality tech-inspired products,
              backed by fast shipping and exceptional customer
            </p>
            <button className="btn bg-red font-semibold text-white px-8 py-3 rounded-full">Explore</button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceList.map((service) => (
              <div key={service.id}
                className="shadow-sm rounded-sm py-5 px-4 text-center space-y-2 text-red cursor-pointer hover:border
            hover:border-indigo-600 transition-all duration-200">
                <img src={service.image} alt="" className="mx-auto h-16" />
                <h5 className="pt-3 font-semibold">{service.title}</h5>
                <p className="text-[#bd9090]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-container md:m-12 ">
        <footer className="footer p-10 bg-white text-base-content">
          <nav className="text-gray-500">
            <img src="/logo.png" alt="" className='h-12 pr-1' />
            <a className="link link-hover">Our Mission: To Merge</a>
            <a className="link link-hover">Fashion with</a>
            <a className="link link-hover">Functionality in the</a>
            <a className="link link-hover">Engineering</a>
          </nav>
          <nav className="text-gray-500">
            <h6 className="footer-title">USEFUL LINKS</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Events</a>
            <a className="link link-hover">Blogs</a>
            <a className="link link-hover">FAQ</a>
          </nav>
          <nav className="text-gray-500">
            <h6 className="footer-title">MAIN MENU</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Offers</a>
            <a className="link link-hover">Products</a>
            <a className="link link-hover">Reservation</a>
          </nav>
          <nav className="text-gray-500">
            <h6 className="footer-title">CONTACT US</h6>
            <a className="link link-hover">example@email.com</a>
            <a className="link link-hover">+66 958 248 966</a>
            <a className="link link-hover">Social media</a>
          </nav>
        </footer>
        <footer className="footer px-10 py-4 border-t bg-white text-base-content border-base-300">
          <aside className="items-center grid-flow-col text-gray-500">
            <p>Copyright 2024 - All right reserved</p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  )
}

export default OurService