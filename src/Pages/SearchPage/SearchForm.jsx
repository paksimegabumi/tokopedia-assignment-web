import { useFormik } from 'formik';
import { NumericFormat } from 'react-number-format';

import * as Yup from 'yup';

const SearchSchema = Yup.object({
    customerId: Yup.number().positive().required('This field is required!'),
    amountFrom: Yup.number(),
    amountTo: Yup.number(),
})

const SearchForm = ({ onSubmit }) => {

    const formik = useFormik({
        initialValues: {
            customerId: undefined,
            paymentTypeName: 'Bank Transfer',
            amountFrom: undefined,
            amountTo: undefined
        },
        onSubmit: values => {
            onSubmit(values);
        },
        validationSchema: SearchSchema
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
                                type="text"
                                className="form-control"
                                id="customerId"
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="col-auto">
                            {formik.touched.customerId && formik.errors.customerId ? (
                                <span className="form-text text-bg-danger">{formik.errors.customerId}</span>
                            ) : ''}
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
                                onChange={formik.handleChange}
                            >
                                <option value={'Bank Transfer'}>Bank Transfer</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            {/* <span className="form-text">{errors.paymentTypeName?.message}</span> */}
                        </div>
                    </div>
                    <div className="row g-3 align-items-center mb-3">
                        <div className="col-auto">
                            <label htmlFor="amountFrom" className="col-form-label">Amount</label>
                        </div>
                        <div className="col-auto">
                            <div className="input-group">
                                <span className="input-group-text">IDR</span>
                                <NumericFormat
                                    name="amountFrom"
                                    value={formik.values.amountFrom}
                                    thousandSeparator={true}
                                    onValueChange={(values) => {
                                        const { value } = values;
                                        formik.setFieldValue("amountFrom", value);
                                    }}
                                />
                                <span className="input-group-text">-</span>
                                <NumericFormat
                                    name="amountTo"
                                    value={formik.values.amountTo}
                                    thousandSeparator={true}
                                    onValueChange={(values) => {
                                        const { value } = values;
                                        formik.setFieldValue("amountTo", value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-auto">
                            {/* {errors.amountTo && <span className="form-text text-bg-danger">Must be greater than amount from</span>} */}
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
                                onChange={formik.handleChange}
                            >
                                <option value={3}>3</option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={formik.submitForm}>Search</button>
                </div>
            </form>
        </>
    )
};

export default SearchForm;