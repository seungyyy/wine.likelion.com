import type { NextPage } from 'next';
import { BeerContainer } from '../../components/BeerContainer';

const AlePage: NextPage = () => {
    const name = 'ale';
    return (
        <div>
            <h1>🍺Ale Beer</h1>
            <BeerContainer name={name}/>
        </div>
    );
};

export default AlePage;
