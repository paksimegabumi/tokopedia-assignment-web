const Payment = ({ data }) => {
    const { id, customer, amount, date, paymentType } = data;

    const dateFormat = () => {
        const newDateFormat = new Date(Date.parse(date));

        return newDateFormat.toLocaleString();
    }

    const formattedAmount = new Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'IDR'
    });

    return (
        <>
            <tr>
                <th scope="row">{id}</th>
                <td>{customer.name}</td>
                <td>{formattedAmount.format(amount)}</td>
                <td>{dateFormat()}</td>
                <td>{paymentType.name}</td>
            </tr>
        </>
    )
}

export default Payment;