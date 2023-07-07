import "../styles/Result.css";
const Result = ({ uniqueA, uniqueB, common, combined }) => {
  return (
    <>
      <details className="collapse bg-base-200 md:w-2/6">
        <summary className="collapse-title text-xl font-medium">
          Items Present only in List A
        </summary>
        {uniqueA.length != 0 ? (
          uniqueA.map((item) => (
            <div className="collapse-content" key={item}>
              <p>{item}</p>
            </div>
          ))
        ) : (
          <div className="collapse-content">
            <p>No such items that match the following criteria</p>
          </div>
        )}
      </details>
      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">
          Items Present only in List B
        </summary>
        {uniqueB.length != 0 ? (
          uniqueB.map((item) => (
            <div className="collapse-content" key={item}>
              <p>{item}</p>
            </div>
          ))
        ) : (
          <div className="collapse-content">
            <p>No such items that match the following criteria</p>
          </div>
        )}
      </details>
      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">
          Items present in both List A and List B
        </summary>
        {common.length != 0 ? (
          common.map((item) => (
            <div className="collapse-content" key={item}>
              <p>{item}</p>
            </div>
          ))
        ) : (
          <div className="collapse-content">
            <p>No such items that match the following criteria</p>
          </div>
        )}
      </details>
      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">
          Combined list of unique items
        </summary>
        {combined.length != 0 ? (
          combined.map((item) => (
            <div className="collapse-content" key={item}>
              <p>{item}</p>
            </div>
          ))
        ) : (
          <div className="collapse-content">
            <p>No such items that match the following criteria</p>
          </div>
        )}
      </details>
    </>
  );
};

export default Result;
