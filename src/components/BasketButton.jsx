import Icon from '@mdi/react';
import {mdiBasket} from '@mdi/js';
import {useBasketModal} from '../hooks/useBasketModal';

export const BasketButton = () => {
    const [, {open}] = useBasketModal();
    return (
        <button onClick={open}>
            <Icon path={mdiBasket}
                  title="Open Basket"
                  size={1}
            />
        </button>
    );
};
