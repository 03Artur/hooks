import {useBasketModal} from '../hooks/useBasketModal';
import {useBasket} from '../hooks/useBasket/useBasket';

const containerStyle = {
    position: 'absolute',
    top: 100,
    width: '80vw',
    height: '80vh',
    overflowY: 'auto',
};

export const BasketModal = () => {
    const [isOpened, {close}] = useBasketModal();
    const [{basket}] = useBasket();
    if (!isOpened) {
        return null;
    }
    return (
        <article style={containerStyle}>

        </article>
    );
};
