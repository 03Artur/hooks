import {useBasket} from './useBasket/useBasket';
import {useState} from 'react';

export const useBasketModal = () => {
    const [isOpened, setOpened] = useState();
    const [{basket}] = useBasket();

    return [
        isOpened, {
            open: () => {
                if (basket.length) {
                    setOpened(true);
                }
            },
            close: () => setOpened(false),
        },
    ];
};
