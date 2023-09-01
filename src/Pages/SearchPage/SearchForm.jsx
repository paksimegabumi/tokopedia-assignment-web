import { useForm } from "react-hook-form";

const SearchForm = ({ onSubmit }) => {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm({
        defaultValues: {
            paymentTypeName: 'Bank Transfer',
            size: 3,
            amountFrom: 0,
            amountTo: 0
        }
    });

    const onFormSubmit = handleSubmit(data => {
        const { customerId, paymentTypeName, size, amountFrom, amountTo } = data;
        let newData = {
            customerId,
            paymentTypeName,
            size
        }

        if (data.amountFrom !== 0) {
            newData = {
                ...newData,
                amountFrom
            }
        }

        if (data.amounTo !== 0) {
            newData = {
                ...newData,
                amountTo
            }
        }
        onSubmit(newData);
    });

    return (
        <>
            <form
                onSubmit={e => e.preventDefault()}
                noValidate>
                <div className="col-8 border border-white p-3 rounded-3">
                    <div className="row g-3 mb-3">
                        <div className="col-auto">
                            <label htmlFor="customerId" className="col-form-label">Customer ID</label>
                        </div>
                        <div className="col-auto">
                            <input
                                type="number"
                                className="form-control"
                                id="customerId"
                                {...register('customerId', {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    },
                                    setValueAs: value => parseInt(value)
                                })} />
                        </div>
                        <div className="col-auto">
                            <span className="form-text text-bg-danger">{errors.customerId?.message}</span>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center mb-3">
                        <div className="col-auto">
                            <label htmlFor="paymentTypeName" className="col-form-label">Payment Type</label>
                        </div>
                        <div className="col-auto">
                            <select
                                className="form-select"
                                id="paymentTypeName"
                                {...register('paymentTypeName', {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    }
                                })}>
                                <option value={'Bank Transfer'}>Bank Transfer</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            <span className="form-text">{errors.paymentTypeName?.message}</span>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center mb-3">
                        <div className="col-auto">
                            <label htmlFor="amountFrom" className="col-form-label">Amount</label>
                        </div>
                        <div className="col-auto">
                            <div className="input-group">
                                <span className="input-group-text">From</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="amountFrom"
                                    onWheel={event => event.currentTarget.blur()}
                                    {...register('amountFrom')} />
                                <span className="input-group-text">To</span>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="amountTo"
                                    onWheel={event => event.currentTarget.blur()}
                                    {...register('amountTo', {
                                        validate: {
                                            greaterThanAmountFrom: value => value >= getValues().amountTo
                                        }
                                    })} />
                            </div>
                        </div>
                        <div className="col-auto">
                            {errors.amountTo && <span className="form-text text-bg-danger">Must be greater than amount from</span>}
                            
                        </div>
                    </div>
                    <div className="row g-3 align-items-center mb-3">
                        <div className="col-auto">
                            <label htmlFor="size" className="col-form-label">Size</label>
                        </div>
                        <div className="col-auto">
                            <select
                                className="form-select"
                                id="size"
                                {...register('size')}>
                                <option value={3}>3</option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={onFormSubmit}>Search</button>
                </div>
            </form>
        </>
    )
};

export default SearchForm;