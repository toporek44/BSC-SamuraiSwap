

const baseAppUrl = '/'
const baseSwapUrl = 'https://exchange.dankswap.finance/#/'

const config= [
    {
        label: 'Home',
        icon: 'HomeIcon',
        href: baseAppUrl,
    },
    {
        label: 'Trade',
        icon: 'TradeIcon',
        initialOpenState: true,
        items: [
            {
                label: 'Exchange',
                href: `${baseSwapUrl}swap`,
            },
            {
                label: 'Liquidity',
                href: `${baseSwapUrl}pool`,
            },
        ],
    },
    {
        label: 'DankFarms',
        icon: 'FarmIcon',
        href: `${baseAppUrl}farms`,
    },
    {
        label: 'DankPools',
        icon: 'PoolIcon',
        href: `${baseAppUrl}pools`,
    },

    {
        label: 'More',
        icon: 'MoreIcon',
        items: [

            {
                label: 'Github',
                href: 'https://github.com/dankswap',
            },

            {
                label: 'Medium',
                href: 'https://dankswap.medium.com',
            },
        ],
    },
]

export default config
