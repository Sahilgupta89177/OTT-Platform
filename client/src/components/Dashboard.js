import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';

const Dashboard = () => {
    const [data, setData] = useState(false);
    const { logindata, setLoginData } = useContext(LoginContext);
    const history = useNavigate();

    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");
        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
        const data = await res.json();
        if (data.status === 401 || !data) {
            history("*");
        } else {
            setLoginData(data);
            history("/dash");
        }
    };

    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true);
        }, 2000);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh', paddingTop: '20vh', fontSize: '1.5em' }}>
            <h2>Welcome to Our Platform!</h2>
            <p>Discover a wide range of movies and TV shows. Start watching today!</p>
        </div>
    );
};

export default Dashboard;
