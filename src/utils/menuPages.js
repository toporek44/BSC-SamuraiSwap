import {ReactComponent as HomeIcon} from "../assets/home.svg"
import {ReactComponent as TradeIcon} from "../assets/trade.svg"
import {ReactComponent as FarmIcon} from "../assets/farm.svg"
import {ReactComponent as PoolsIcon} from "../assets/pools.svg"
import {ReactComponent as MoreIcon} from "../assets/more.svg"
import {ReactComponent as AirdropIcon} from "../assets/clock.svg"



export const menuPages = [

    {
        Icon: HomeIcon,
        pageTitle: "Home",
    },

    {
        Icon: TradeIcon,
        pageTitle: "Trade",
        items: [
            {
                pageTitle: "Exchange",

            },

            {
                pageTitle: "Liquidity",

            }
        ]
    },

    {
        Icon: FarmIcon,
        pageTitle: "Farms",
    },

    {
        Icon: PoolsIcon,
        pageTitle: "Pools",
    },

    {
        Icon: MoreIcon,
        pageTitle: "More",
        items: [

            {
                pageTitle: "Medium",
                link: "https://www.onet.pl/",
            },

        ],
    },


]