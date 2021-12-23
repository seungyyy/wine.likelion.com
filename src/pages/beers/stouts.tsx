import type { NextPage } from 'next';
import { BeerContainer } from '../../components/BeerContainer';

const StoutsBeerPage: NextPage = () => {
    const name = 'stouts';

    return (
    <BeerContainer name={name} />
    );
};

export default StoutsBeerPage;
