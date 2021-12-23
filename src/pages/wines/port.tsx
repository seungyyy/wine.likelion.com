import type { NextPage } from 'next';
import { WineContainer } from '../../components/WineContainer';

const PortPage: NextPage = () => {
    const name = 'port';

    return (
    <WineContainer name={name} 
    />
    );
};

export default PortPage;
