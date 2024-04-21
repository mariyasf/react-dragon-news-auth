import Navbar from '../Shared/Navbar/Navbar';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Header from '../Shared/Header/Header';
import { useParams } from 'react-router-dom';

const News = () => {
    const { id } = useParams();

    return (
        <div>
            <Header />
            <Navbar />

            <div className='grid md:grid-cols-4 '>
                <div className='col-span-3'>
                    <h2 className="text-5xl">News Details</h2>
                    <p>{id}</p>
                    
                </div>
                <div>

                    <RightSideNav />
                </div>
            </div>

            <RightSideNav />

        </div>
    );
};

export default News;