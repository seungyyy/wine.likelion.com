import { ClassNames } from '@emotion/react';
import type { NextPage } from 'next';
import { BeerContainer } from '../../components/BeerContainer';


const StoutsPage: NextPage = () => {
    const name = 'stouts';
    return (
        <div>
            <h1>🍺{ClassNames} Beer</h1>
            <BeerContainer />
        </div>
    );
};

export default StoutsPage;
