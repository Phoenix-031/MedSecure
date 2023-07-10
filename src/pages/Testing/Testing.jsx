import React, { useState } from 'react';
import axios from 'axios';

const Testing = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append('file', file);

      // Make a POST request to Pinata API
      const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          pinata_api_key: 'cb5eb7bc89a92b0119dd',
          pinata_secret_api_key: '8d33da9122b4848b9e3738cd7b52c19b311b1842f55b18ac619fb8088203ff59',
        },
      });

      console.log('Pinata response:', response.data);
      // Handle the response from Pinata here

    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle the error here
    }
  };

  return (
    <div className='pt-48'>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleUpload}>Upload to Pinata</button>
    </div>
  );
};

export default Testing;
