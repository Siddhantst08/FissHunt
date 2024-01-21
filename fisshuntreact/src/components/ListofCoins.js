import { useEffect, useState } from "react";



const ListofCoins = (data) => {
    const { iso, name, change, ohlc, circulatingSupply, marketCap, icons } = data.data;
    const [color, setcolor] = useState();

    useEffect(() => {
        setcolor(
            change.percent < 0 ? "bg-red-200" : "bg-green-200"
        )
    })
    console.log(icons.color)
    return (
        <div className={`m-4 p-4 w-[320px] h-[400px] ${color} shadow-2xl  rounded-lg hover:underline border-lime-500 border-2`}>
            <img className="" src={icons.color} />
            <p className="font-bold p-2">{name}</p>
            <span className="font-bold">{iso}</span>
            <p>Change: ({change?.percent.toFixed(4)})%</p>
            <h2 className="font-bold">${ohlc?.h}</h2>
            <p className="">Market Cap: {marketCap}</p>
        </div>
    )
}
export default ListofCoins;