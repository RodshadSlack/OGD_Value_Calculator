/*Basic function to calculate value of NFT project based on value of ethereum.

(Plug in values for mint cost, mint quantity, and Run code. Then plug in current value of Ethereum when prompted.)

Check console for results.
*/

const mintCost=0.0777
const mintQuantity=3777
const ethValue= prompt('Whats the price of Eth?');

/*function totalProjectValue(ethValue){
  return (ethValue * mintCost)* mintQuantity;
};
console.log(totalProjectValue(2500));*/

// Simplified

const totalProjectValue=(ethValue) => (ethValue * mintCost)* mintQuantity;

const totalEth=(ethValue) => ((ethValue * mintCost)* mintQuantity) / ethValue;

// Log values to console using Math.round to round to the nearest whole number.

console.log(`Your total Eth: ${Math.ceil(totalEth(ethValue))}`);
console.log(`Your total project value is approximately: ${Math.ceil(totalProjectValue(ethValue))}`);



let ethAmount= document.getElementById('eth_value')
ethAmount.innerHTML= `Your total Eth: ~ ${Math.ceil(totalEth(ethValue))}`;

let ethTotal= document.getElementById('eth_usd')
ethTotal.innerHTML= `Your total project value is approximately: $ ${Math.ceil(totalProjectValue(ethValue))}`;