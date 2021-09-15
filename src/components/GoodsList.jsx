import {useBasket} from '../hooks/useBasket/useBasket';
import {useGoods} from '../hooks/useGoods';

export const GoodsList = () => {
    const goods = useGoods();
    const [, {add}] = useBasket();
    return (
        <ul>
            {
                goods.map((item) => (
                    <li key={item.id}>
                        <h2>
                            {JSON.stringify(item)}
                        </h2>
                        <button onClick={() => add(item.id)} disabled={item.isInBasket || item.count < 1}>add to basket</button>
                    </li>
                ))
            }
        </ul>
    );
};
