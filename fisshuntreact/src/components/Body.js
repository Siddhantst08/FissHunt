import { useEffect, useState } from "react";
import ListofCoins from "./ListofCoins";
const Body = () => {
    const [ListOfCrypto, setListOfCrypto] = useState([]);

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const data = await fetch("https://www.coindesk.com/pf/api/v3/content/fetch/arc-price-pages?query=%7B%7D&d=326&_website=coindesk");
        const resdata = await data.json();
        console.log(resdata);
        console.log(resdata?.data);
        setListOfCrypto(Object.values(resdata.prices));
    };

    return (
        <>

            <div className="flex flex-wrap items-center m-4 p-4 absolute ">
                {
                    ListOfCrypto.map((crypto, index) => (
                        // <h1>{crypto[0]}</h1>
                        // console.log(crypto.change.percent)
                        <ListofCoins key={index} data={crypto} />
                        // <h3 key={index}>{crypto?.name}</h3>
                    ))

                }
            </div >
        </>
    )
}
export default Body;