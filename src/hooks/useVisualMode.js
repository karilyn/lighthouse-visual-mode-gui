const { useState } = require("react");

///  Replace this code with your version of useVisualMode

const useVisualMode = function(initial) {
  const [history, setHistory] = useState([initial]);
  const [mode, setMode] = useState(initial);

  const transition = function(newMode, replace = false) {
    // make a copy of history
    const newHistory = [...history]
    setMode(newMode)

    // if replace is true, just remove the top mode
    if (replace) {
      newHistory.pop()
    }
    // in both cases, we have to add the newMode to history and then set it
    newHistory.push(newMode)
    setHistory(newHistory)
  }

  const back = function() {
    // the there's nothing to remove, don't do anything
    if (history.length === 1) {
      return;
    }

    const newHistory = [...history]
      // remove top item from stack
      newHistory.pop()
      // setMode to new last item in array
      setMode(newHistory[newHistory.length - 1])
      setHistory(newHistory)
    }

  // Don't forget this -> history is needed here
  return { mode, transition, back, history };
};

export default useVisualMode;