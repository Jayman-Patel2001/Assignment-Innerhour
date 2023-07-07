import { Progress } from "antd";
import "../styles/Clock.css";

const Clock = ({
  cycleCount,
  isWorkTime,
  workTime,
  isRunning,
  breakTime,
  handleStart,
  handlePause,
  handleReset,
  progress,
  formatTime,
  userCycleCount,
  handleCycleCountChange,
}) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col">
      <h1 className="md:text-5xl text-4xl font-extrabold dark:text-white text-white mb-10">
        Pomodoro Clock
      </h1>
      <div className="md:w-1/5 mb-5">
        <label
          for="helper-text"
          class="block mb-2 text-sm font-medium  text-white dark:text-white"
        >
          Cycle Count
        </label>
        <input
          type="text"
          value={userCycleCount}
          onChange={handleCycleCountChange}
          id="helper-text"
          aria-describedby="helper-text-explanation"
          className="bg-transparent border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <Progress
        size={250}
        type="circle"
        strokeColor={{
          "0%": "#108ee9",
          "100%": "#87d068",
        }}
        style={{ color: "white" }}
        percent={progress}
        format={() =>
          isWorkTime ? formatTime(workTime) : formatTime(breakTime)
        }
      />
      {cycleCount > 0 && (
        <div className="timer mt-5">
          {isWorkTime ? (
            <h3 className="text-3xl font-bold dark:text-white text-white">
              Work Time
            </h3>
          ) : (
            <h3 className="text-3xl font-bold dark:text-white text-white">
              Break Time
            </h3>
          )}
        </div>
      )}
      <h4 className="text-2xl font-bold dark:text-white text-white mb-10 mt-5">
        Cycles left: {cycleCount}
      </h4>
      <div className="flex flex-row">
        {!isRunning && (
          <button
            type="button"
            onClick={handleStart}
            class="text-white md:mr-10 mr-8 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 md:w-40 w-28 text-center mb-2"
          >
            Start
          </button>
        )}
        {isRunning && (
          <button
            type="button"
            onClick={handlePause}
            class="text-white md:mr-10 mr-8 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 md:w-40 w-28 text-center mb-2"
          >
            Pause
          </button>
        )}
        <button
          type="button"
          onClick={handleReset}
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 md:w-40 w-28 text-center mb-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Clock;
