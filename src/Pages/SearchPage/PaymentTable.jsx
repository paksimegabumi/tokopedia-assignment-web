import Payment from "./Payment";

const PaymentList = ({ data, onChangePage }) => {
    const { content, totalPages, pageable } = data;

    const createPagination = () => {
        const { pageNumber } = pageable;
        let pageArray = [];
        for (let index = 0; index < totalPages; index++) {
            const pageIndex = index + 1;
            let className = 'page-link';
            if (index === pageNumber) {
                className += ' active';
            }
            const page = <li className="page-item" onClick={() => onChangePage(index)} key={index}><a className={className}>{pageIndex}</a></li>;
            pageArray.push(page);
        }
        return pageArray;
    }

    return (
        <>
            <div className="col-md-9">
                {/* <ul className="list-group">
                    {content.map(payment => (
                        <Payment data={payment} key={payment.id} />
                    ))}
                </ul> */}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date</th>
                            <th scope="col">Payment Type</th>
                        </tr>
                    </thead>

                    <tbody>
                        {content.map(payment => (
                            <Payment data={payment} key={payment.id} />
                        ))}
                    </tbody>
                </table>

                <div className="border-0">
                    <nav>
                        <ul className="pagination">
                            {
                                createPagination()
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default PaymentList;