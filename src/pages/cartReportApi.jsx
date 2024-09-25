import graph from '../assets/graph.png'
import hand_icon from '../assets/hand_icon.png'
import material_icon from '../assets/material_icon.png'
import star from '../assets/star.png'
import user_icon from '../assets/user_icon.png'
import cart from '../assets/cart.png'
import { assets } from '../assets/assets'
const CardReportApi = [
    {
        id:1,
        img:graph,
        title:"Total Service Provider ",
        heading:"Rs. xxx.xx",
        ratio:5,
    },
    {
        id:2,
        img:user_icon,
        title:"New Service Provider  ",
        heading:"xxxx",
        ratio:-10,
    },
    {
        id:3,
        img:cart,
        title:"Active Service Provider",
        heading:"xxxx",
        ratio:10,
    },
    {
        id:4,
        img:star,
        title:"Average Rating",
        userIcon:assets.user,
        star: assets.star,
        name:'Abhinav',
        rate:"4.0",
        daysAgo:1,
        blankStar:assets.blankStar
        },
    {
        id:5,
        img:material_icon,
        title:"Service Completion Rate",
        // heading:"Rs. xxx.xx",
        ratio:85,
    },
    {
        id:6,
        img:hand_icon,
        title:"Service Provider Retension Rate",
        // heading:"Rs. xxx.xx",
        ratio:10,
    },
]

export default CardReportApi