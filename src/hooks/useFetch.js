const useFetch=(url)=>{
    const [items, setItems] = useState([]);
    const fetchData = async (url) => {
        const data = await fetch(url)
        const response = await data.json()
        console.log(response);
        setItems(response);
    }
    useEffect(() => {
        fetchData(url)
    }, []) 
    return { posts:items };
}