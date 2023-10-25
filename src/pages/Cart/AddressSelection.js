import React, { useState } from "react";

const AddressSelection = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const addresses = [
    { id: 1, address: "123 Main Street, City, Country" },
    { id: 2, address: "456 Elm Street, City, Country" },
    { id: 3, address: "789 Oak Street, City, Country" },
  ];

  const handleAddressChange = (addressId) => {
    setSelectedAddress(addressId);
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Select Address</h2>
      <div>
        {addresses.map((address) => (
          <div key={address.id} className="mb-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="address"
                value={address.id}
                checked={selectedAddress === address.id}
                onChange={() => handleAddressChange(address.id)}
                className="mr-2 form-radio text-blue-500"
              />
              {address.address}
            </label>
          </div>
        ))}
      </div>
      {selectedAddress !== null && (
        <div className="mt-4">
          <p>
            Selected Address:{" "}
            {addresses.find((address) => address.id === selectedAddress).address}
          </p>
        </div>
      )}
    </div>
  );
};

export default AddressSelection;
