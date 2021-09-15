import {useContext} from 'react';
import {GoodsContext} from '../providers/GoodsProvider';

export const useGoods = () => {
    const [{goods}] = useContext(GoodsContext);
    return goods;
};
