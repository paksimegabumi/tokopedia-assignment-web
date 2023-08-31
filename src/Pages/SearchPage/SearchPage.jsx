import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import axios from "axios";
import Constants from "../../Constants";
import PaymentList from "./PaymentTable";

const SearchPage = () => {
    const [data, setData] = useState({});
    const [filter, setFilter] = useState({});

    const fetchData = async () => {
        const url = `${Constants.BASE_URL}${Constants.PAYMENT_URL}`;
        try {
            const response = await axios.get(url, {
                params: filter
            });

            setData(response.data);
        } catch (error) {
            console.log(error);
        }
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

    return (
        <>
            <div className="row g-5">
                <SearchForm onSubmit={onSubmit} />
                {data.content ? <PaymentList data={data} onChangePage={onChangePage} /> : <div className="col-md-9">No Result</div>}
            </div>
        </>
    )
};

export default SearchPage;