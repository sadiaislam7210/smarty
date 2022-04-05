import { useEffect, useState } from "react";

const useReviews = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  return [cart, setCart];
};

export default useReviews;
