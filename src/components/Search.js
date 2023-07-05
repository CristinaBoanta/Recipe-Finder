import Button from "./Button";
import { useState } from "react";

const Search = (props) => {
  const [error, setError] = useState("");

  const { dataFromInput, inputChangeFunction, responseFromApi, isLoading } =
    props;

  const getApiData = () => {
    if (dataFromInput.trim() === "") {
      setError("Please enter a keyword");
    } else {
      setError("");
      responseFromApi(dataFromInput);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getApiData();
    }
  };

  return (
    <>
      <div className="min-h-[100px]">
        <input
          type="text"
          value={dataFromInput}
          onChange={(event) => {
            inputChangeFunction(event);
            setError("");
          }}
          onKeyDown={handleKeyDown}
          class="border-2 border-darkBrown rounded-custom p-2 w-full"
        />

        {error && <p className="text-lg my-3">{error}</p>}
      </div>

      <Button onClick={getApiData} buttonText={"Click to search"}>
        Search
      </Button>

      {isLoading && <div className="spinner"></div>}
    </>
  );
};

export default Search;
