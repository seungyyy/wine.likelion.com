import type { NextPage } from 'next';
import { WineContainer } from '../../components/WineContainer';

const RosePage: NextPage = () => {
    const name = 'rose';

    return (
    <WineContainer name={name} 
    />
    );
};

export default RosePage;
