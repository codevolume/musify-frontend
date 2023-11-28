import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ({ method, endpoint, query }: any) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options: any = { method: method, url: `http://192.168.0.196:3000/${endpoint}`, data: query,};

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const res:any = await axios.request(options);

            setData(res);
            setIsLoading(false);
        } catch (error: any) {
            setError(error);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
