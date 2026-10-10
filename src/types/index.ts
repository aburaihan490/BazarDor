export type NavCategory = {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
};

// products types Defiend
export type Market = {
    market: string;
    division: string;
    min: number;
    max: number;
};

export type Change = {
    dir: 'up' | 'down';
    pct: number;
};

export type ProductsType = {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: Change;
    markets: Market[];
};
