const Payment = ({ data }) => {
    const { id, customer, amount, date, paymentType } = data;

    const dateFormat = () => {
        const newDateFormat = new Date(Date.parse(date));

        return newDateFormat.toLocaleString();
    }

    return (
        <>
            <tr><th scope="row">{id}</th><td>{customer.id}</td> <td>{amount}</td> <td>{dateFormat()}</td> <td>{paymentType.name}</td></tr>
        </>
    )
}

export default Payment;