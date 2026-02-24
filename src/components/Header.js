import {useContext, useState} from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const [btnNameReact, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext);
    console.log(data);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-1 mb-1">
            <div className="logo-container">
                <img className="w-31" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? <b className="online">✅</b>
                     : <b className="offline">❌</b>}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <button className="login-btn" onClick={() => {
                        btnNameReact === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnNameReact}</button>
                    <li className="px-4 font-bold text-2xl"><Link to="/">{data.loggedInUser}</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;