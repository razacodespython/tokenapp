import { useWeb3 } from "@3rdweb/hooks";
import { useEffect, useMemo, useState, useCallback } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";


const TokenComponent = () => {
  const { provider } = useWeb3();
  const [balance, setBalance] = useState(0);

  const sdk = useMemo(() => {
    if (provider) {
      return new ThirdwebSDK(provider.getSigner())
    }

    return undefined;
  }, [provider]);

  const tokenModule = useMemo(() => {
    if (sdk) {
      return sdk.getTokenModule("0x0d5fb8942eEa62093944F3e91C6Ac4e584336741")
    }

    return undefined;
  }, [sdk]);

  useEffect(() => {
    const getBalance = async () => {
      const tokenBalance = await tokenModule.balance()
      setBalance(tokenBalance.displayValue); 
    }

    if (tokenModule) {
      getBalance()
    };
  }, [tokenModule]);


  const amount = ethers.utils.parseUnits("1000", 18);
  const onClick = useCallback(() => {
    

    tokenModule.mint(amount);

  }, [amount, tokenModule]);

  return (
    <div>
      Balance: {balance}
      <br />

        <button class="big-button" onClick={onClick}>Get me a 1000 Coins!</button>
      {/* <button style={{ padding: "10px 20px", textAlign: "center",  backgroundColor: "#44014C" , color: "white"}}class="btn" onClick={onClick}>
        Create a 1000 Coins!
      </button> */}
    </div>
  );
};
export default TokenComponent;