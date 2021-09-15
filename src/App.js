import './App.css';
import {useCounter} from './hooks/useCounter';
import {BasketModalProvider} from './providers/BasketModalProvider';
import {GoodsProvider} from './providers/GoodsProvider';
import {PageHeader} from './components/PageHeader';
import {GoodsList} from './components/GoodsList';
import {Basket} from './components/Basket';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};


function App() {

    return (
        <BasketModalProvider>
            <GoodsProvider>
                <PageHeader />
                <GoodsList />
                <hr/>
                <hr/>
                <Basket />
            </GoodsProvider>
        </BasketModalProvider>
    );
}

export default App;
