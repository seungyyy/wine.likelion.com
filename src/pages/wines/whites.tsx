import type { NextPage } from 'next';
import { WineContainer } from '../../components/WineContainer';

const WhitesPage: NextPage = () => {
    const name = 'whites';

    return (
    <WineContainer name={name} 
    />
    );
};

export default WhitesPage;
