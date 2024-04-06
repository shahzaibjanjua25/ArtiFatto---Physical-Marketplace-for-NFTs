
import React from "react";
import { useForm } from "@formspree/react";
import toast from "react-hot-toast";
import images from "../../assets";
import Image from "next/image";


const HeroSection = () => {
  const notifySuccess = (msg) => toast.error(msg, { duration: 2000 });
  const [state, handleSubmit] = useForm("xleybvnv");

  if (state.succeeded) {
    return notifySuccess("Thanks for joining");
  }

  return (
    <section className="rounded-xl p-6 bg-[#705dfc] text-[#ffff]">
      <div className="container grid gap-6 mx-auto text-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full heroSection-padding px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
          <span className="block mb-2 text-[#fff]">
            Welcome to world of NFTs
          </span>

          <h1 className="text-5xl sm:text-3xl font-extrabold dark:text-gray-50">
            ArtiFatto Offer
          </h1>

          <p className="my-8">
            {/* <span className="font-medium dark:text-gray-50">Offers by, </span> */}
            Subcribe to our super-exclusive drop list and be the first to know about upcoming drops and events
          </p>

          <form onSubmit={handleSubmit} className="self-stretch space-y-3">
            <div>
              <label for="name" className="text-sm sr-only">
                Your name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full rounded-md focus:ring focus:ri dark:border-[#705df2] p-4"
              />
            </div>

            <div>
              <label for="email" className="text-sm sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="w-full rounded-md focus:ring focus:ri dark:border-[#705df2] p-4"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-2 font-semibold rounded bg-[#705df2] text-[#fff]"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* <div className="image w-full xl:col-span-3">
  <img
    src={images.hero}
    width={500}
    height={500}
    alt="image"
    className=" object-cover w-full rounded-md dark:bg-gray-500"
  />
</div> */}

        <Image
          // src="C:\Users\umarr\Desktop\NFT-Market v3.1\.next\static\media\"
          // src="C:\Users\umarr\Downloads\nft-marketplace-course\nft-marketplace-course\nfimarketplacefinalcode_pinata\assets\creator.png"
          src={images.hero2}
          width={500}
          height={500}
          alt="iumarge"
          className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
        />
      </div>
    </section>
  );
};

export default HeroSection;



// import React from "react";

// //INTERNAL IMPORT
// import { Tick } from "../index";

// const Feature = () => {
//   return (
//     <section className="rounded-xl mt-36 mb-36 bg-[#1a1a1a] dark:text-gray-100">
//       <div className="container flex flex-col-reverse mx-auto lg:flex-row sm:flex-col md:flex-col">
//         <div className="rounded-xl flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 sm:w-full lg:w-1/2 xl:w-2/5 bg-[#705df2] text-[#fff]">
//           {/* //1 */}
//           <div className="flex space-x-2 sm:space-x-4">
//             <Tick />
//             <div className="space-y-2">
//               <p className="text-lg font-medium leadi">
//                 Lorem ipsum dolor sit amet
//               </p>
//               <p className="leadi">
//                 tempore impedit illo velit pariatur perferendis tempora,
//                 exercitationem voluptatem quasi mollitia assumenda?
//               </p>
//             </div>
//           </div>
//           {/* //2 */}
//           <div className="flex space-x-2 sm:space-x-4">
//             <Tick />
//             <div className="space-y-2">
//               <p className="text-lg font-medium leadi">
//                 Lorem ipsum dolor sit amet
//               </p>
//               <p className="leadi">
//                 tempore impedit illo velit pariatur perferendis tempora,
//                 exercitationem voluptatem quasi mollitia assumenda?
//               </p>
//             </div>
//           </div>
//           {/* //3 */}
//           <div className="flex space-x-2 sm:space-x-4">
//             <Tick />
//             <div className="space-y-2">
//               <p className="text-lg font-medium leadi">
//                 Lorem ipsum dolor sit amet
//               </p>
//               <p className="leadi">
//                 tempore impedit illo velit pariatur perferendis tempora,
//                 exercitationem voluptatem quasi mollitia assumenda?
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* //IMAGE */}
//         <div className="sm:w-full md:w-full lg:1-1/2 xl:w-3/5 dark:bg-gray-800">
//           <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
//             <img
//               src="https://source.unsplash.com/640x480"
//               alt=""
//               className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Feature;
