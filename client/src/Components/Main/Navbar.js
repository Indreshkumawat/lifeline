import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/logo1.png";
import { Outlet, Link } from "react-router-dom";
import DropDown from "../Util/DropDown";
import axios from "../Api"
import AuthContext from "../context/AuthContext";


const Navbar = (props) => {
    const s1 =
        "bg-white-900 drop-shadow-lg mx-3 px-7 py-2 rounded-md text-base font-medium hover:bg-indianred hover:drop-shadow-xl hover:px-10 dark:hover:bg-midnight dark:hover:drop-shadow-dark-lg";
    const [theme, setTheme] = useState(0);
    const { getLoggedIn } = useContext(AuthContext);
    const doc = document.documentElement.classList;
    useEffect((e) => {
        let t = localStorage.getItem("theme");
        if (!t) {
            localStorage.setItem("theme", 0);
        }
        t = localStorage.getItem("theme");
        setTheme(t);
        if (t == 1) {
            doc.add("dark");
        }
    }, []);
    return (
        <>
            <nav className="p-7 bg-gradient-to-b from-indianred to-purple sticky top-0 z-10 dark:bg-gray-bg">
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-between">
                        < > 
                           <span > <DropDown id='about-dropdown' title="About Us" children={["Home", "About LifeLine", "Contact Us"]} links={["/", "/about", "/contactUs"]}></DropDown></span>
                            {props.logIn ? (
                                <div>
                                    <Link
                                        to={`/${props.user}/profile`}
                                        className={s1}

                                    >
                                        <i className="fa-solid fa-user"></i>
                                    </Link>
                                    <Link
                                        to="/"
                                        onClick={async () => {
                                            await axios.get("/auth/logout", { withCredentials: true }).then((r) => { });
                                            await getLoggedIn();
                                        }}
                                        className={s1}
                                    >
                                        Log Out
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <DropDown title="Patient" children={["Patient Login/Register", "Blood Bank Search"]} links={["/register/patient", "/bloodDirect"]}></DropDown>
                    <Link to="/" >
                        <div className="flex items-center justify-between">
                            <img
                                className="h-12 w-auto ml-6"
                                src={logo}
                                draggable={false}
                                alt="Your Company"
                            />
                            <div className="text-2xl font-bold ml-2 text-red">
                                LifeLine
                            </div>
                        </div>
                    </Link>
                                    <DropDown title="Donor" children={["Donor Login/Register", "Blood Donation Camps"]} links={["/register/donor", "/bloodCamps", "/aboutBloodDonation"]}></DropDown>
                                    <DropDown title="Blood Bank" children={["Login", "Register your Bloodbank"]} links={["/login/bank", "/register/bank"]}></DropDown>
                                </>
                            )}
                            {/* <button
                                className="mx-2 px-3 py-2 rounded-full hover:shadow-lg"
                                onClick={() => {
                                    localStorage.setItem(
                                        "theme",
                                        localStorage.getItem("theme") == 1 ? 0 : 1
                                    );
                                    setTheme(localStorage.getItem("theme"));
                                    if (theme == 0) {
                                        doc.add("dark");
                                    } else {
                                        doc.remove("dark");
                                    }
                                }}
                            >
                                <i
                                    className={`dark:text-white-900 fa-solid fa-lg fa-${theme == 0 ? "sun" : "moon"
                                        }`}
                                ></i>
                            </button> */}
                        </>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
