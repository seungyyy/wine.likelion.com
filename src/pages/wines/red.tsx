import type { NextPage } from 'next';
import { WineContainer } from '../../components/WineContainer';

const RedPage: NextPage = () => {
    const name = 'red';

    return (
    <WineContainer name={name} 
    />);
};

export default RedPage;
