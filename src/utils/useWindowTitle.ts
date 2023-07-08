import { useEffect } from "react";

const useWindowTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useWindowTitle;
