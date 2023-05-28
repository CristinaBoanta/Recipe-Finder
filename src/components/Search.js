import Button from './Button';
import { useState } from 'react';

const Search = (props) => {

  const { dataFromInput, inputChangeFunction, responseFromApi } = props;

  const getApiData = () => responseFromApi(dataFromInput);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getApiData();
    }
  };


  return (
    <>
      <input
        type="text"
        value={dataFromInput}
        onChange={(event) => {
          inputChangeFunction(event);
        }}
        onKeyDown={handleKeyDown}
      />

      {/* <Button onClick={getApiData} buttonText={"Click to search"}></Button> */}
    </>
  );
};

export default Search;
