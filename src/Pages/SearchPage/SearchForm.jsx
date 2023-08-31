import { useState } from "react";

const SearchForm = ({ onSubmit }) => {
    const [customerId, setCustomerId] = useState();
    const [paymentTypeName, setPaymentTypeName] = useState('Bank Transfer');
    const [amountFrom, setAmountFrom] = useState();
    const [amountTo, setAmountTo] = useState();
    const [size, setSize] = useState(5);

    const onClickSearch = () => {
        onSubmit({
            paymentTypeName,
            customerId: parseInt(customerId),
            amountFrom,
            amountTo,
            size
        })
    }
    return (
        <>
            <div className="col-3">
                <div className="mb-3">
                    <label htmlFor="customerId" className="form-label">Customer ID:</label>
                    <input type="number" className="form-control" id="customerId" onChange={(event) => setCustomerId(event.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="size" className="form-label">Payment Type:</label>
                    <select className="form-select" id="paymentTypeName" onChange={(event) => setPaymentTypeName(event.target.value)} defaultValue={paymentTypeName}>
                        <option value={'Bank Transfer'}>Bank Transfer</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="amountFrom" className="form-label">Amount From:</label>
                    <input type="number" className="form-control" id="amountFrom" onChange={(event) => setAmountFrom(event.target.value)}></input>
                    <label htmlFor="amountTo" className="form-label"> To:</label>
                    <input type="number" className="form-control" id="amountTo" onChange={(event) => setAmountTo(event.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="size" className="form-label">Size:</label>
                    <select className="form-select" id="size" onChange={(event) => setSize(event.target.value)} defaultValue={size}>
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={onClickSearch}>Search</button>
            </div>
        </>
    )
};

export default SearchForm;