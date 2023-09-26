import { useRef, useEffect } from "react";

function useDocumentTitle(title: string, prevailOnMount?: any) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    if (!prevailOnMount) {
      document.title = defaultTitle.current;
    }
  }, []);
}

export default useDocumentTitle;
