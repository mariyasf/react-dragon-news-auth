import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="w-full btn btn-outline">
                    <FaGoogle />
                    Login with Google
                </button>

                <button className="w-full btn btn-outline">
                    <FaGithub />
                    Login with Github
                </button>
            </div>

            <div className="p-4  mb-6">
                <h2 className="text-3xl mb-4">Find Us on</h2>
                <a className="p-4 flex gap-3 text-lg items-center border rounded-t-lg">
                    <FaFacebook />
                    <span>Facebook</span>
                </a>
                <a className="p-4 flex gap-3 text-lg items-center border-x">
                    <FaTwitter />
                    <span>Twitter</span>
                </a>
                <a className="p-4 flex gap-3 text-lg items-center border rounded-b-lg">
                    <FaInstagram />
                    <span>Instagram</span>
                </a>
            </div>


            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q Zone</h2>

                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;