import useOnline from "../hooks/useOnline";

const Header=()=>{

    const [isOnline] = useOnline();
    return(
        <header>
            {/* <h1>React Features</h1> */}
            <div className="h-screen flex justify-center items-center text-2xl font-bold">
            {isOnline ? (
                <p className="text-green-500">🌍 You are Online!</p>
            ) : (
                <p className="text-red-500">🚫 You are Offline!</p>
            )}
            </div>
        </header>
    )
}
export default Header;
