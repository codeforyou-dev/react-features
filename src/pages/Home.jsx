import { useEffect, useState } from "react";

const Home = () => {

    const [search, setSearch] = useState('');
    const [responseData, setResponseData] = useState([]);

    const ITEMS = [
        {
            name: "Item 1",
            description: "Description of Item 1"
        },
        {
            name: "Item 2",
            description: "Description of Item 2"
        },
        {
            name: "Item 3",
            description: "Description of Item 3"
        }
    ];

    useEffect(() => {
        setResponseData(ITEMS);
    }, []);

    const searchUI = () => {
        return (
            <div className="bg-gray-100 p-4" data-testid='ItemCard'>
                <input type="search" placeholder="Search..." className="border border-gray-400 p-2 rounded-lg" value={search} name='searchInput' onChange={(e) => setSearch(e.target.value)} />
                <button className="bg-blue-500 text-white p-2 rounded-lg ml-2" onClick={
                    () => { setResponseData(ITEMS.filter(ele => ele.name.toLowerCase().includes(search.toLowerCase()))) }
                }>Search</button>
            </div>

        )
    }
    const renderItems = () => {
        return (
            <div className="grid grid-cols-3 gap-4">
                {responseData.map(ele => {
                    return <div className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-sm transition-transform transform hover:scale-105">
                        <h2 className="text-xl font-bold mt-3">{ele.name}</h2>
                        <p className="text-gray-600 text-sm mt-2">{ele.description}</p>
                        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Read More</button>
                    </div>
                })}
            </div>
        )
    }
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-center">Home</h1>
            <p className="text-3xl font-bold mb-6 text-center">Welcome to the Home Page</p>
            {searchUI()}
            {renderItems()}
        </div>
    );
}
export default Home;
