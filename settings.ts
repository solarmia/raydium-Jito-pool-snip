import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import bs58 from 'bs58';



export const wallet = Keypair.fromSecretKey(
  bs58.decode(
    process.env.SNIPER_WALLET! // PRIV KEY OF SNIPER
  )
);

const rpc = process.env.RPC!; // ENTER YOUR RPC

export const tokenAddress = ''; // ENTER YOUR DESIRED TOKEN ADDRESS TO SNIPE!!!!!!!!!!

const snipeAmount = 0.001; // SNIPE AMOUNT IN SOL

const tipAmount = 0.0003; // JITO TIP IN SOL (the more you tip the faster)
// I recommend atleast 0.003



/* DONT TOUCH ANYTHING BELOW THIS */

export const connection = new Connection(rpc, 'confirmed')

export const tipAcct = new PublicKey('Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY');

export const snipeAmt = snipeAmount * LAMPORTS_PER_SOL;

export const tipAmt = tipAmount * LAMPORTS_PER_SOL;

export const RayLiqPoolv4 = new PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8')