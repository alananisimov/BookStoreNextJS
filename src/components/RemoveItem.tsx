import React from 'react';
import { useLocalStorage } from 'usehooks-ts';

function RemoveItem({ name, symbol }) {
    const [items, setItems] = useLocalStorage<Object[]>('items', []);

    // Ищем индекс элемента с заданным именем
    const index = items.findIndex(item => item.name === name);

    const removeFromLocalStorage = () => {
        if (index !== -1) {
            const updatedItems = items.filter((_, i) => i !== index);
            setItems(updatedItems);
            console.log(`Объект с именем "${name}" удален из массива.`);
        } else {
            console.log(`Объект с именем "${name}" не найден в массиве.`);
        }
    };

    return (
        <div>
            <span onClick={removeFromLocalStorage} className='inline-flex h-10 w-10 items-center text-center justify-center'>
                {String(symbol)} {/* Преобразование символа в строку */}
            </span>
        </div>
    );
}

export default RemoveItem;






