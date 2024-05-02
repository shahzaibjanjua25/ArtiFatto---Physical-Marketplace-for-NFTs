import React, { useState } from "react";

//INTERNAL IMPORT
import { Title, Button, Input } from "../index";

const AdminFunction = ({
  widthdraw,
  nftContractBalance,
  nftWithdraw,
  donationBalance,
  nftListingFees,
  setNftListingFees,
  updateNFTListingFee,
}) => {
  const [listingFee, setListingFee] = useState("");

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Title title="Only owner can call these functions" />

      <div className="flex flex-col items-center justify-center space-y-6">
        <Button
          btnName={`Withdraw Donation Balance: ${donationBalance} ETH`}
          btnType="primary"
          classStyle="rounded"
          handleClick={widthdraw}
        />
        <Button
          btnName={`Withdraw NFT Contract Balance: ${nftContractBalance} ETH`}
          btnType="primary"
          classStyle="rounded"
          handleClick={nftWithdraw}
        />

        <Input
          inputType="number"
          title="Update NFT Listing Fee"
          placeholder={`Current Fee: ${nftListingFees} ETH`}
          cryptoToken="ETH"
          value={listingFee}
          handleChange={(e) => setListingFee(e.target.value)}
        />

        <Button
          btnName="Update Listing Fee"
          btnType="primary"
          classStyle="rounded"
          handleClick={() => updateNFTListingFee(listingFee)}
        />
      </div>
    </div>
  );
};

export default AdminFunction;
