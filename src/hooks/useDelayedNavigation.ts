import { useNavigate } from "react-router-dom";

export const useDelayedNavigation = (setLoading: (val: boolean) => void) => {
  const navigate = useNavigate();

  const delayedNavigate = (path: string, delay = 800) => {
    setLoading(true);

    setTimeout(() => {
      navigate(path);

      setTimeout(() => {
        setLoading(false);
      }, 400); 
    }, delay);
  };

  return delayedNavigate;
};
