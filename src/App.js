import './App.css';
import { useState } from 'react';
import {ethers} from 'ethers';


function App() {

  const [connected,setConnected] =useState(false);
  const [walletAddress,setWalletAddress] =useState("");

  //to connect or disconnect wallet

  const connectWallet= async ()=>{

    if(!connected){

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer =await provider.getSigner();

      const walletAddress=await signer.getAddress();

      setConnected(true);
      setWalletAddress(walletAddress);
    }else{
      window.ethereum.selectedAddress=null;
      setConnected(false);
      setWalletAddress("");
    }
  };
  return (
    <div className='app'>
      <div className='main'>
        <div className='content'>
            <button className='btn' onClick={connectWallet}>
              {!connected ? "Connect Wallet" : "Disconnect Wallet"}
            </button>

            <h3> Address</h3>
            <h4 className='wal-add'> {walletAddress}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
