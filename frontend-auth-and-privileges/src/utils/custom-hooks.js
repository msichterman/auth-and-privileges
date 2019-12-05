import { useRef, useEffect } from "react";

// Gets prevProps with Hooks
export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
