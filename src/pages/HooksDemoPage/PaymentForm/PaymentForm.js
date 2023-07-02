import { useId } from 'react';

const PaymentForm = () => {
  const ccNumberHint = useId();
  console.log(ccNumberHint);

  const validUptoHint = useId();
  console.log(validUptoHint);

  return (
    <>
      <h3>Enter Credit Card Details</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="inputCreditCard" className="form-label">
            Credit Card Number
          </label>
          <input
            type="text"
            className="form-control"
            id = "inputCreditCard"
            aria-describedby={ccNumberHint}
            maxLength={16}
          />
          <div id={ccNumberHint} className="form-text">
            Credit card number should be of 16 digits
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputValidUpto" className="form-label">
            Valid Upto
          </label>
          <input type="text" className="form-control" id="inputValidUpto" aria-describedby={validUptoHint}/>
          <p id={validUptoHint} className="form-text">Enter this in MM/YY format</p>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default PaymentForm;
