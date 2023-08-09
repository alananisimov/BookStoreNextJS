import { useEffect, useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';

export function CartPrice() {
    const cart_items = useReadLocalStorage<Object[]>('items');
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        if (cart_items) {
            const newTotal = cart_items.reduce((acc, item) => acc + item.price, 0);
            setTotal(newTotal);
        }
    }, [cart_items]);

    return (<span>{total}</span>);
}