import { useEffect } from "react";

function useTabTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "Lumios";
    };
  }, [title]);
}

export default useTabTitle;
