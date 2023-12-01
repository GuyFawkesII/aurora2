const Price = (props) => {
    return (
        <div className="currency_pri_container">
            <span
                className="symbol"
            >
                {props.symbol}
            </span>
            <span>
                {props.amount}
            </span>
        </div>
    )
}
export default Price