import styled from '@emotion/styled';
import { Error, Loading, BeerCard } from '.';
import { MEDIA_QUERY_END_POINT } from '../constants';
import { useBeerData } from '../hooks/useBeerData';
import { Beer } from '../types/Beer';

interface BeerContainerProps {
    name: string;
}

export const BeerContainer = ({ name }: BeerContainerProps) => {
    const { data, error } = useBeerData(name);

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <BeerTitle>{name}</BeerTitle>
            <BeerCardContainer>
                {data.map((beerData: Beer) => {
                    return (
                    <BeerCard 
                    key={`beer-${name}-${beerData.id}`} 
                    beerData={beerData} 
                    />
                );
            })}
        </BeerCardContainer>
    </div>
    );
};

const BeerTitle = styled.h1`
    font-size: 1.5em;
    line-height: 180%;
    border-bottom: 1px solid #eee;
`;

const BeerCardContainer = styled.main`
    display: grid;
    gap: 1em;
    @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;
