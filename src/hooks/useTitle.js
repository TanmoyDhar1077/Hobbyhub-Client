import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | HobbyHub`;
  }, [title]);
};

export default useTitle;