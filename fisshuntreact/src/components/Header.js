import { Link } from 'react-router-dom';
import logo from '../Utilities/logo.png';
const Header = () => {
    return (

        <div className="flex justify-between bg-gray-300 shadow-lg mb-2">
            <div className="logo-container">
                <Link to="/exchange">
                    <img className=" m-4 p-2 w-[130px] h-[100px] cursor-pointer rounded-3xl" src={logo} alt="" />
                </Link>
            </div>
            <div className="flex items-center">

                <ul className="flex p-4 m-4 font-bold text-xl rounded-md ">
                    <li className="px-2  hover:underline cursor-pointer"><Link to="/exchange">EXCHANGE</Link></li>
                    <li className="px-2  hover:underline cursor-pointer"><Link to="/login">LOGIN /SIGN UP</Link></li>
                    <li className="px-2  hover:underline cursor-pointer"><Link to="/contact">CONTACT US</Link></li>

                    <button className="login-btn"></button>
                    <li className="px-4 font-bold hover:underline"></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
