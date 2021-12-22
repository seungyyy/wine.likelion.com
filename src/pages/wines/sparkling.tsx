import type { NextPage } from 'next';
import { Error, Loading, WineCard } from '../../components';
import { useWineData } from '../../hooks/useWineData';
import { Wine } from '../../types/Wine';

const SparklingPage: NextPage = () => {
    const name = 'rose';
    const { data, error } = useWineData(name);

    if (error) return <Error />
    if (!data) return <Loading />

    return (
        <div>
            <h1>Sparkling Wine</h1>
            <main>
                {data.map((wineData: Wine) => {
                    return <WineCard 
                        key={`sparkling-winde-list-${wineData.id}`} wineData={wineData} />;
                        
                    })}
            </main>
        </div>
    );
};

export default SparklingPage;


