import type { NextPage } from 'next';
import { WineContainer } from '../../components/WineContainer';

const SparklingPage: NextPage = () => {
    const name = 'sparkling';

    return (
    <WineContainer name={name} 
    />);
};

export default SparklingPage;
