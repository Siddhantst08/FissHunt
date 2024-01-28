import { useEffect, useState } from "react";
import Linechart from "./Linechart";
const ListofCoins = (data) => {
    const { iso, name, change, ohlc, icons } = data.data;
    const [color, setcolor] = useState();
    const [border, setborder] = useState();
    const [bgpercent, setBgPercent] = useState();

    useEffect(() => {
        setcolor(
            change.percent < 0 ? "bg-red-200" : "bg-green-200"
        )
        setborder(
            change.percent < 0 ? "border-red-400" : "border-lime-500"
        )
        setBgPercent(
            change.percent < 0 ? "bg-red-500" : "bg-green-500"
        )
    })
    console.log(icons.color)
    return (
        <div className={`m-4 p-4 w-[320px] h-[400px] ${color} shadow-2xl  rounded-lg hover:underline ${border} border-2`}>
            <img className="w-16 " src={icons.color} />
            <h2 className="font-bold text-2xl float-right p-1">${ohlc?.h.toFixed(4)}</h2>
            <p className="font-bold p-1 text-2xl">{name}</p>
            <span className="font-bold p-1">{iso}</span><span className="space-x-2 font-md"> 24H</span>
            <p className={`w-16 font-bold text-center rounded-md float-right text-white ${bgpercent}`}>{change?.percent.toFixed(2)}%</p>

        </div>
    )
}
export default ListofCoins;