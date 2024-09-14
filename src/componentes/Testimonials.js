
// import data from "../data/index.json";

// export default function Testimonials() {
//   return (
//     <section className="py-8 md:py-16 px-4 md:px-8 bg-gray-100" id="testimonial">
//       <div className="container mx-auto">
//         <div className="text-center mb-8 md:mb-12">
//           <p className="text-lg font-semibold text-gray-600">Clients Feedback</p>
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Customer Feedback</h2>
//         </div>
//         <div className="grid gap-6 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {data?.testimonial?.map((item, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//               <div className="flex items-center mb-4">
//                 {Array.from({ length: 5 }, (_, idx) => (
//                   <svg
//                     key={idx}
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-5 h-5 md:w-6 md:h-6 text-yellow-500"
//                     viewBox="0 0 27 26"
//                     fill="none"
//                   >
//                     <path
//                       d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
//                       fill="#006B6A"
//                     />
//                   </svg>
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-4">{item.description}</p>
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={item.src}
//                   alt="Avatar"
//                   className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-gray-200"
//                 />
//                 <div>
//                   <p className="text-lg md:text-xl font-semibold text-gray-800">{item.author_name}</p>
//                   <p className="text-gray-600">{item.author_designation}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

 

import data from "../data/index.json";

export default function Testimonials() {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-gray-100" id="testimonial">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-lg font-semibold text-gray-600">Clients Feedback</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Customer Feedback</h2>
        </div>
        <div className="grid gap-6 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.testimonial?.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }, (_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 md:w-6 md:h-6 text-yellow-500"
                    viewBox="0 0 27 26"
                    fill="none"
                  >
                    <path
                      d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                      fill="#FFD700" // Changed to gold
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={item.src}
                  alt="Avatar"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-gray-200"
                />
                <div>
                  <p className="text-lg md:text-xl font-semibold text-gray-800">{item.author_name}</p>
                  <p className="text-gray-600">{item.author_designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  
