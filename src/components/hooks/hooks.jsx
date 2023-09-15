import { useEffect, useRef } from "react";

// Auto focus for inputs
export function useAutoFocus(active) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (active && inputRef.current) {
      inputRef.current.focus();
    }
  }, [active]);

  return inputRef;
}
