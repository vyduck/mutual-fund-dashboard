import "./NewFund.css"

function NewFund() {
    return (
        <>
            <h3>Create New Fund</h3>
            <form>
                <div>
                    <label htmlFor="name">Fund Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" required />
                </div>
                <div>
                    <label htmlFor="link">Fund Link:</label>
                    <input type="url" id="link" name="link" required />
                </div>
                <div>
                    <label htmlFor="from-date">From Date:</label>
                    <input type="date" id="from-date" name="from-date" required />
                </div>
                <div>
                    <label htmlFor="to-date">To Date:</label>
                    <input type="date" id="to-date" name="to-date" required />
                </div>
                <button type="submit">Create Fund</button>
            </form>
        </>
    )
}

export default NewFund;