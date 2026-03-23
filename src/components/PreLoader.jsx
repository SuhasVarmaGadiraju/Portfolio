import Aurora from "./Aurora/Aurora"
import { useState, useEffect } from "react"

const PreLoader = () => {
  const [loading, setLoading] = useState(true)
  const [countDone, setCountDone] = useState(false)
  const [fadeText, setFadeText] = useState(false)
  const [fadeScreen, setFadeScreen] = useState(false)
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const totalTime = 1500;
    const steps = 100;
    const interval = totalTime / steps;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 99) {
        setCount(current);
        setCountDone(true);
        clearInterval(timer);
        return;
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countDone) {
      setLoading(false);
    }
  }, [countDone])

  return (
    loading && (
      <div
        className={`w-screen h-screen fixed flex items-center justify-center bg-black z-[10000] overflow-hidden transition-opacity duration-1000 ${
          fadeScreen ? "opacity-0" : "opacity-100"
        }`}
      >
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div
          className={`absolute transition-all duration-1000 ${
            fadeText ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
          }`}
        >
          <span className="count-up-text text-white text-6xl font-bold">{count}</span>
        </div>
      </div>
    )
  )
}

export default PreLoader
