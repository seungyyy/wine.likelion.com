import type { NextPage } from 'next';
import { BeerContainer } from '../../components/BeerContainer';

const AleBeerPage: NextPage = () => {
    const name = 'ale';

    return (
    <BeerContainer 
    name={name} />);
};

export default AleBeerPage;
