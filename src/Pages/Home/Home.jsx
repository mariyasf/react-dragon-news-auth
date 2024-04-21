import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNAv from "../Shared/LeftSideNAv";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();

    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div  >
                    <LeftSideNAv />
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-3xl">News Comming Soon</h2>
                    {
                        news.map(eachNews =>
                            <NewsCard key={eachNews._id} eachNews={eachNews}></NewsCard>
                        )
                    }
                </div>

                <div  >
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;