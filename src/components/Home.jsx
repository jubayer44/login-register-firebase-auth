import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';


const Home = () => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>this is home {user?.email}</h1>
        </div>
    );
};

export default Home;