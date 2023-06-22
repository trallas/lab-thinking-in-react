function CreditCard(props) {
    // console.log(props)
  
    const {
      type,
      number,
      expirationMonth,
      expirationYear,
      bank,
      owner,
      bgColor,
      color,
    } = props;
    return (
      <>
        <img src={type === 'Visa' ? '/visa.png' : 'mastercard.png'} alt={type} />
          <p>.... .... .... {number.slice(-4)}</p> 
          <p>
              Expires {expirationMonth}/{expirationYear.toString().slice(-2)}
          </p>
        <p>{bank}</p>
        <p>{owner}</p>
      </>
    );
  }
  
  export default CreditCard;