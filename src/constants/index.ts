export const WINE_API_ENDPOINT = 'https://api.sampleapis.com/wines/';
export const BEER_API_ENDPOINT = 'https://api.sampleapis.com/beers/';

export const MEDIA_QUERY_END_POINT = {
    MOBILE: '640px',
    TABLET: '1280px',
    DESKTOP: '1920px',
};

export const ROUTES = [
    {
        ID: 0,
        PATH: '/beers',
        LABEL: '맥주',
        SUBS: [
            {
                ID: 0,
                PATH: '/ale',
                LABEL: '에일',
                ORDER: 0,
            },
            {
                ID: 1,
                PATH: '/stouts',
                LABEL: '스타우트',
                ORDER: 1,
            },
        ],
    },
    {
        ID: 1,
        PATH: '/wines',
        LABEL: '와인',
        SUBS: [
            {
                ID: 0,
                PATH: '/dessert',
                LABEL: '디저트와인',
                ORDER: 0,
            },
            {
                ID: 1,
                PATH: '/port',
                LABEL: '포트와인',
                ORDER: 1,
            },
            {
                ID: 2,
                PATH: '/red',
                LABEL: '레드와인',
                ORDER: 2,
            },
            {
                ID: 3,
                PATH: '/rose',
                LABEL: '로즈와인',
                ORDER: 3,
            },
            {
                ID: 4,
                PATH: '/sparkling',
                LABEL: '스파클링와인',
                ORDER: 4,
            },
            {
                ID: 5,
                PATH: '/whites',
                LABEL: '화이트와인',
                ORDER: 5,
            },
        ],
    },
];
