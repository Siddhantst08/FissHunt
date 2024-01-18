const Header = () => {
    return (

        <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
            <div className="logo-container">
                <img className=" m-3 w-[130px] rounded-[3rem] cursor-pointer" href="/" alt="" />

            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 font-medium text-xl rounded-md ">
                    <li className="px-2  hover:underline">Home</li>
                    <li className="px-2  hover:underline">About us</li>
                    <li className="px-2  hover:underline">Contact us</li>

                    <button className="login-btn"></button>
                    <li className="px-4 font-bold hover:underline"></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;