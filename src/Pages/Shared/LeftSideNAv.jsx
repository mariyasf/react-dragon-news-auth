import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNAv = () => {
    const [categories, setCategories] = useState({});
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])


    return (
        <div className="space-y-2">
            <h2 className="text-2xl">All Categories: {categories.length} </h2>
            {/* {
                categories.map(category => (
                    <Link
                        to={`/category/${category.id}`}
                        className="block border rounded-lg p-4 ml-4 text-xl font-bold"
                        key={category.id}>
                        {category.name}
                    </Link>
                ))
            } */}

        </div>
    );
};

export default LeftSideNAv;