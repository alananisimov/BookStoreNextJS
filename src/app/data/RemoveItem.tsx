import React from "react";
import { useLocalStorage } from "usehooks-ts";
import { MyProduct } from "../models";

function RemoveItem({ name, symbol }: { name: string; symbol: string }) {
  const [items, setItems] = useLocalStorage<MyProduct[]>("items", []);

  const index = items.findIndex((item) => item.title === name);

  const removeFromLocalStorage = () => {
    if (index !== -1) {
      const updatedItems = items.filter((_, i) => i !== index);
      setItems(updatedItems);
    }
  };

  return (
    <div>
      <span
        onClick={removeFromLocalStorage}
        className="inline-flex w-fit m-1 items-center text-center justify-center"
      >
        {String(symbol)}
      </span>
    </div>
  );
}

export default RemoveItem;
