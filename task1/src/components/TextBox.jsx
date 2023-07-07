import { useState } from "react";
import Result from "./Result";

const TextBox = () => {
  const [listA, setListA] = useState("");
  const [listB, setListB] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [uniqueA, setUniqueA] = useState([]);
  const [uniqueB, setUniqueB] = useState([]);
  const [common, setCommon] = useState([]);
  const [combined, setCombined] = useState([]);

  const computeDifferences = () => {
    const arrayA = listA.split(",").map((item) => item.trim().toLowerCase());
    const arrayB = listB.split(",").map((item) => item.trim().toLowerCase());

    console.log(arrayA, arrayB);

    const uniqueItemsA = arrayA.filter((item) => !arrayB.includes(item));
    const uniqueItemsB = arrayB.filter((item) => !arrayA.includes(item));

    const commonItems = arrayA.filter((item) => arrayB.includes(item));

    const combinedItems = [...new Set([...arrayA, ...arrayB])];

    setUniqueA(uniqueItemsA);
    setUniqueB(uniqueItemsB);
    setCommon(commonItems);
    setCombined(combinedItems);
    setShowResults(true);
  };

  return (
    <div className="flex justify-center items-center w-screen flex-col md:h-screen">
      <input
        type="text"
        value={listA}
        onChange={(e) => setListA(e.target.value)}
        placeholder="Enter List A"
        className="input input-bordered input-info md:w-2/6 w-4/5 mb-10"
      />

      <input
        type="text"
        value={listB}
        onChange={(e) => setListB(e.target.value)}
        placeholder="Enter List B"
        className="input input-bordered input-accent md:w-2/6 w-4/5 mb-10"
      />

      <button
        className="btn btn-outline btn-info md:w-1/6 w-2/4 mb-10 tooltip"
        data-tip="Please seperate items with comma sign"
        onClick={computeDifferences}
      >
        Compute
      </button>
      {showResults && (
        <Result
          uniqueA={uniqueA}
          uniqueB={uniqueB}
          common={common}
          combined={combined}
        />
      )}
    </div>
  );
};

export default TextBox;
