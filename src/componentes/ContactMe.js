
     export default function ContactMe() {
  return (
    <section id="Contact" className="flex flex-col items-center py-8 px-4 md:p-16 bg-gray-100">
      <div className="text-center mb-8">
        <p className="text-blue-500 text-lg font-medium mb-2">Get In Touch</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-md md:text-lg text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
        </p>
      </div>
      <form className="w-full max-w-md md:max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          <label htmlFor="first-name" className="flex flex-col">
            <span className="text-sm md:text-md font-semibold mb-2">First Name</span>
            <input
              type="text"
              className="p-2 md:p-3 border border-gray-300 rounded-lg text-sm md:text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="flex flex-col">
            <span className="text-sm md:text-md font-semibold mb-2">Last Name</span>
            <input
              type="text"
              className="p-2 md:p-3 border border-gray-300 rounded-lg text-sm md:text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
        </div>
        <label htmlFor="email" className="flex flex-col mb-4">
          <span className="text-sm md:text-md font-semibold mb-2">Email</span>
          <input
            type="email"
            className="p-2 md:p-3 border border-gray-300 rounded-lg text-sm md:text-md"
            name="email"
            id="email"
            required
          />
        </label>
        <label htmlFor="phone-number" className="flex flex-col mb-4">
          <span className="text-sm md:text-md font-semibold mb-2">Phone Number</span>
          <input
            type="tel"
            className="p-2 md:p-3 border border-gray-300 rounded-lg text-sm md:text-md"
            name="phone-number"
            id="phone-number"
            required
          />
        </label>
        <label htmlFor="choose-topic" className="flex flex-col mb-4">
          <span className="text-sm md:text-md font-semibold mb-2">Choose a Topic</span>
          <select
            id="choose-topic"
            className="p-2 md:p-3 border border-gray-300 rounded-lg text-sm md:text-md bg-white"
          >
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label>
        <label htmlFor="message" className="flex flex-col mb-4">
          <span className="text-sm md:text-md font-semibold mb-2">Message</span>
          <textarea
            className="p-2 md:p-3 border border-gray-300 rounded-lg text-sm md:text-md"
            id="message"
            rows="6"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className="flex items-center mb-4">
          <input
            type="checkbox"
            required
            name="checkbox"
            id="checkbox"
            className="mr-2 h-4 w-4 md:h-5 md:w-5 border border-gray-300 rounded"
          />
          <span className="text-xs md:text-sm">I accept the terms</span>
        </label>
        <div className="flex justify-center">
          <button className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-md text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
 
 


