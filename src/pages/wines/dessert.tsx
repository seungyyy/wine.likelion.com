import type { NextPage } from 'next';
import { WineContainer } from '../../components/WineContainer';

const DessertPage: NextPage = () => {
    const name = 'dessert';

    return (
    <WineContainer name={name} 
    />
        );
};

export default DessertPage;


