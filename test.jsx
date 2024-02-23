import React from 'react'

const test = () => {
  return (
    <div>




<div className="container">
  <div className="window">
    <div className="order-info">
      <div className="order-info-content">
        <h2>Order Summary</h2>
        <div className="line" />
        <table className="order-table">
          <tbody>
            <tr>
              <td>
                <img
                  src="https://dl.dropboxusercontent.com/s/sim84r2xfedj99n/%24_32.JPG"
                  className="full-width"
                />
              </td>
              <td>
                <br /> <span className="thin">Nike</span>
                <br /> Free Run 3.0 Women
                <br />{" "}
                <span className="thin small">
                  {" "}
                  <br />
                  <br />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="price">$99.95</div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="line" />
        <table className="order-table">
          <tbody>
           
          </tbody>
        </table>
        <div className="line" />
        <div className="total">
          <span style={{ float: "left" }}>
            TOTAL
          </span>
          <span style={{ float: "right", textAlign: "right" }}>
            $435.55
          </span>
        </div>
      </div>
    </div>
    <div className="credit-info">
      <div className="credit-info-content">
        <table className="half-input-table">
          <tbody>
            
          </tbody>
        </table>
       
       
        <table className="half-input-table">
          <tbody>
        
          </tbody>
        </table>
        <button className="pay-btn">Place Order</button>
      </div>
    </div>
  </div>
</div>




User

i have a 2 address in a card with 1 radio button for each card i want the card to be displayed when i click one radio button in react js
ChatGPT
To achieve the behavior you described in React, you can use state to determine which card should be displayed based on the selected radio button. Here's a simple example to get you started:

jsx
Copy code
import React, { useState } from 'react';

const CardComponent = ({ address }) => (
  <div>
    <h2>Address: {address}</h2>
    {/* Add other card content here */}
  </div>
);


const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleRadioChange = (address) => {
    setSelectedCard(address);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="address1"
          checked={selectedCard === "address1"}
          onChange={() => handleRadioChange("address1")}
        />
        Card 1
      </label>

      <label>
        <input
          type="radio"
          value="address2"
          checked={selectedCard === "address2"}
          onChange={() => handleRadioChange("address2")}
        />
        Card 2
      </label>

      {selectedCard && <CardComponent address={selectedCard} />}
    </div>
  );
};

export default App




</div>





import React, { useState } from 'react';

const CardComponent = ({ address }) => (
  <div>
    <h2>Primary Address: {address}</h2>
    {/* Add other card content here */}
  </div>
);

const App = () => {
  const [selectedCard, setSelectedCard] = useState("address1"); // Set the primary address initially

  const handleRadioChange = (address) => {
    setSelectedCard(address);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="address1"
          checked={selectedCard === "address1"}
          onChange={() => handleRadioChange("address1")}
        />
        Card 1 (Primary)
      </label>

      <label>
        <input
          type="radio"
          value="address2"
          checked={selectedCard === "address2"}
          onChange={() => handleRadioChange("address2")}
        />
        Card 2
      </label>

      <CardComponent address={selectedCard} />
    </div>
  );
};

export default App;

   
  )
}

export default test