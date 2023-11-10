require("@nomiclabs/hardhat-waffle");

// const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.ankr.com/polygon_mumbai";
const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.sepolia.org";
const NEXT_PUBLIC_PRIVATE_KEY =
  // "f2211d726b37710b750fa80da41f73172853fa2ac82181aca2ff4233e3c6ce9f";
  // "ba0e1ca40308bad2a4c92927add83c620bbae2104ccd70822c1f4cb46a25b02b";
  "ba0e1ca40308bad2a4c92927add83c620bbae2104ccd70822c1f4cb46a25b02b";

// module.exports = {
//   solidity: {
//     version: "0.8.4",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 1000,
//       },
//     },
//   },
//   networks: {
//     hardhat: {
//       chainId: 31337,
//     },
//   },
// };

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  // networks: {
  //       hardhat: {
  //         chainId: 31337,
  //       },
  //     },
  // defaultNetwork: "matic",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    // polygon_mumbai: {
    //   url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
    //   accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    // },
    sepolia: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
