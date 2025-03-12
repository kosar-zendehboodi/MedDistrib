import { useEffect, useRef } from "react";

export default function useOutside(handler,listenCapturing=true){
    const ref = useRef()
    useEffect(() => {
      function handlClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
  
      document.addEventListener("click", handlClick, listenCapturing)
      return () => document.addEventListener("click", handlClick,listenCapturing)
    }, [handler])
  return ref;
    //bubbling or capturing:
}