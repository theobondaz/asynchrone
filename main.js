// import './css/index.css';
console.log('insidemain');
// import simpleParallax from 'simple-parallax-js';
// const solanaWeb3 = require('@solana/web3.js');
// console.log(solanaWeb3);

// var i = 0;
// const text = document.getElementById("demo").innerHTML;
// var txt = text;
// var speed = 50; /* The speed/duration of the effect in milliseconds */
const button = document.querySelector('.btn-mint');

// const typeWriter = () => {
//   console.log('inside')
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
function typeWriter() {
  let i = 0;
  const txt = 'Lorem ipsum dummy text blabla.';
  const speed = 50;
  console.log('first')
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    console.log('tic')
  }
}

button.addEventListener("mouseover", (event) => {
typeWriter();
console.log('ldeoz')
})




const image = document.querySelector('.thumbnail');
// new simpleParallax(image);

const isPhantomInstalled = window.solana && window.solana.isPhantom

const btn = document.querySelector('.btn-wallet');

const getProvider = () => {
  if ("solana" in window) {
    const provider = window.solana;
    if (provider.isPhantom) {
      return provider;
    }
  }

  window.open("https://phantom.app/", "_blank");
};


btn.addEventListener("click", (event) => {
  event.preventDefault();
  try {
    const resp =  window.solana.connect();
    resp.publicKey.toString();
    const key = window.solana.publicKey.toString();
    btn.innerText = key;

    // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
  } catch (err) {
    // { code: 4001, message: 'User rejected the request.' }
  }

})



window.solana.on("connect", () => {
console.log("connected!");
const key = window.solana.publicKey.toString();
const string = "";
const serializedString = string.concat(key.substr(0, 5) + '  . . .  ' + key.slice(-6))
btn.innerText = serializedString;
// btn.style.fontSize = '10px';
// btn.style.fontFamily = 'Roboto';
// btn.style.fontWeight = "bold";
})


const network = "<NETWORK_URL>";
// const connection = new Connection(network);
// const transaction = new Transaction();
// const { signature } = await window.solana.request({
//   method: "signAndSendTransaction",
//   params: {
//     message: bs58.encode(transaction.serializeMessage()),
//   },
// });
// await connection.confirmTransaction(signature);


const message = `To avoid digital dognappers,
    sign below to authenticate with CryptoCorgis`;
const encodedMessage = new TextEncoder().encode(message);
const signedMessage = await window.solana.request({
  method: "signMessage",
  params: {
    message: encodedMessage,
    display: "hex",
  },
});
window.solana.connect({ onlyIfTrusted: true });
