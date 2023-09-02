import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import axios from "axios";
import Constants from "../../Constants";
import PaymentList from "./PaymentTable";

const SearchPage = () => {
    const [data, setData] = useState({});
    const [filter, setFilter] = useState({});
    const [isFetching, setIsFetching] = useState(false);

    const fetchData = async () => {
        setIsFetching(true);
        const url = `${Constants.BASE_URL}${Constants.PAYMENT_URL}`;
        try {
            const response = await axios.get(url, {
                params: filter
            });

            setData(response.data);
        } catch (error) {
            console.log(error);
        }

        setIsFetching(false);
    }

    const onChangePage = (value) => {
        const newFilter = {
            ...filter,
            page: value
        }

        setFilter(newFilter);
    }

    const onSubmit = (content) => {
        setFilter(content);
    }

    useEffect(() => {
        fetchData();
    }, [filter]);

    const showLoading = () => {
        return (
            <>
                <div className="m-3 border-0">
                    <div className="spinner-grow text-primary"></div>
                    <div className="spinner-grow text-secondary"></div>
                    <div className="spinner-grow text-warning"></div>
                </div>
            </>
        );
    }

    const showData = () => {
        return (
            <>
                <PaymentList data={data} onChangePage={onChangePage} /></>
        )
    }

    return (
        <>
            <div className="row g-5">
                <SearchForm onSubmit={onSubmit} />
                {isFetching ? showLoading() : data.content ? showData() : ''}
            </div>
        </>
    )
};

export default SearchPage;