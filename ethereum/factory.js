import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

// const instance = new web3.eth.Contract(JSON.parse(campaignFactory.interface),"0x3D224e1034Eb70304B213B96C4E79FcD72b2951E");
const instance = new web3.eth.Contract(
  campaignFactory.abi,
  "0x3D224e1034Eb70304B213B96C4E79FcD72b2951E"
);
export default instance;
