import {useBasket} from '../hooks/useBasket/useBasket';

export const Basket = () => {
    const [basket] = useBasket();
    return (
        <ol>
            {
                basket.map((item) => (
                    <li key={item.good.id}>
                        {JSON.stringify(item, null, 4)}
                    </li>
                ))
            }
        </ol>
    );
};
