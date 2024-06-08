import React from "react";

//INTERNAL IMPORT
import { Banner, Action } from "../components/index";

const faq = () => {
  return (
    <div>
      <Banner
        name={
          <>
            Frequently Asked Questions
          </>
        }
        childStyles={"md:text-4xl sm:text-2xl xs:text-xl text-left"}
        parentStyle={
          "justify-start mb-7 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded"
        }
      />

      <div className="flex justify-center sm:px-4 p-12">
        <div className="w-3/5 md:w-full">
          <section className="dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
              {/* <h2 className="text-2xl font-semibold sm:text-2xl">
                Frequestly Asked Questions
              </h2> */}
              <p className="mt-4 mb-8 dark:text-gray-400">
              Here are commonly asked questions and their answers for your ArtiFatto platform:
              </p>

              <div className="space-y-4">
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                  1: What is an NFT?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  NFT stands for Non-Fungible Token, which is a unique digital asset that 
                  represents ownership of a specific item or piece of content, 
                  such as art, music, or collectibles, stored on a blockchain.
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                  2: How does ArtiFatto protect the authenticity of artworks?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  ArtiFatto uses blockchain technology to create a tamper-proof record of the 
                  artists and artwork history, ensuring transparent ownership, 
                  and proof of authenticity for buyers and sellers.
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                  3: Can anyone buy and sell art on ArtiFatto?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Yes, ArtiFatto is a global marketplace open to artists, art enthusiasts, 
                  and collectors worldwide. Artists can create profiles, upload their art, 
                  tokenize them as NFTs, and sell them to a global audience.
                  </p>
                </details>
              </div>
            </div>
          </section>
          {/* <Action /> */}
        </div>
      </div>
    </div>
  );
};

export default faq;
