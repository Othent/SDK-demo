import { useState, useEffect } from 'react';
import { FeatureTextSmall } from '../common';
import { DMSans700, SpaceGrotesk700, DMSans500 } from '../../utils/fonts';
import { AnimatePresence, motion } from 'framer-motion';
import * as Styled from './styles';
import Button from '../Button'
import styled from 'styled-components';
import { Othent } from 'othent';


const SDKDemo = () => {

  const [output, setOutput] = useState('*** Output Response ***');


  const [othent, setOthent] = useState(null);
  useEffect(() => {
    const initializeOthent = async () => {
      const othentInstance = await Othent({ API_ID: 'd7a29242f7fdede654171a0d3fd25163' });
      setOthent(othentInstance);
    };
    initializeOthent();
  }, []);



  const handlePingClick = async () => {
    const ping = await othent.ping();
    const message = 'Ping button clicked: ' + JSON.stringify(ping);
    console.log(message);
    setOutput(message);
  };


  const handleAddCallbackURL = async () => {
    const addCallbackURL = await othent.addCallbackURL({ callbackURL: 'https://hello.com' });
    const message = 'Add callback URL button clicked: ' + JSON.stringify(addCallbackURL);
    console.log(message);
    setOutput(message);
  };


  const handleGetAPIID = async () => {
    const API_ID = await othent.getAPIID()
    const message = 'Get API keys button clicked: ' + JSON.stringify(API_ID);
    console.log(message);
    setOutput(message);
  };


  const handleLogInClick = async () => {
    const logIn = await othent.logIn()
    localStorage.setItem('othentUserDetails', JSON.stringify(logIn));
    const message = 'Log In button clicked: ' + JSON.stringify(logIn);
    console.log(message);
    setOutput(message);
  };

  const handleLogOutClick = async () => {
    const logOut = await othent.logOut()
    localStorage.removeItem('othentUserDetails');
    const message = 'Log Out button clicked: ' + JSON.stringify(logOut);
    console.log(message);
    setOutput(message);
  };

  const handleUserDetailsClick = async () => {
    const userDetails = await othent.userDetails()
    const message = 'User Details button clicked: ' + JSON.stringify(userDetails);
    console.log(message);
    setOutput(message);
  };

  const handleReadContractClick = async () => {
    const readContract = await othent.readContract()
    const message = 'Read Contract button clicked: ' + JSON.stringify(readContract);
    console.log(message);
    setOutput(message);
  };


  const handleSignTransactionWarp = async () => {
    try {
      const response = await othent.signTransactionWarp({
        othentFunction: 'sendTransaction', 
        data: {
          toContractId: '2W9NoIJM1SuaFUaSOJsui_5lD_NvCHTjez5HKe2SjYU', 
          toContractFunction: 'createPost', 
          txnData: { post: 'Othent TEST TEST' } 
        }, 
        tags: [ 
          {name: 'Test', value: 'Tag'} 
        ]
      });
      const message = 'Sign transaction Warp button clicked: ' + JSON.stringify(response)
      setOutput(JSON.stringify(message));
      console.log(message)
    } catch (error) {
      setOutput(JSON.stringify(error));
    }
  };




  const handleSendTransactionWarp = async () => {
    try {
      const signedTransaction = await othent.signTransactionWarp({
        othentFunction: 'sendTransaction', 
        data: {
          toContractId: 'tQKJCf2E9lIaNTjM8ELK6ATlJtef8cVmq68c9XnVuj0', 
          toContractFunction: 'createPost', 
          txnData: { post: 'Lorimer TEST' } 
        }, 
        tags: [ 
          {name: 'Test', value: 'Tag'} 
        ]
      });

      const response = await othent.sendTransactionWarp(signedTransaction);
      const message = 'Send transaction Warp button clicked: ' + JSON.stringify(response)
      console.log(message)
      setOutput(JSON.stringify(message));
    } catch (error) {
      setOutput(JSON.stringify(error));
    }
  };




  const handleSignTransactionArweave = async (file) => {
    try {
      const response = await othent.signTransactionArweave({
        othentFunction: 'uploadData', 
        data: file,
        tags: [
          {name: 'Content-Type', value: file.type},
        ]
      });
      const message = 'Sign transaction Arweave button clicked: ' + JSON.stringify(response)
      setOutput(JSON.stringify(message));
      console.log(message)
    } catch (error) {
      setOutput(JSON.stringify(error));
    }
  };
  const handleFileUploadSignArweave = async (event) => {
    const file = event.target.files[0];
    await handleSignTransactionArweave(file);
  };
  



  const handleSendTransactionArweave = async (file) => {
    try {
      const signedTransaction = await othent.signTransactionArweave({
        othentFunction: 'uploadData', 
        data: file,
        tags: [ 
          {name: 'Content-Type', value: file.type} 
        ]
      });

      const response = await othent.sendTransactionArweave(signedTransaction);
      const message = 'Send transaction Arweave button clicked: ' + JSON.stringify(response)
      console.log(response)
      setOutput(message);
    } catch (error) {
      setOutput(JSON.stringify(error));
    }
  };
  const handleFileUploadSendArweave = async (event) => {
    const file = event.target.files[0];
    await handleSendTransactionArweave(file);
  };



  const handleSignTransactionBundlr = async (file) => {
    try {
      const response = await othent.signTransactionBundlr({
        othentFunction: 'uploadData', 
        data: file,
        tags: [
          {name: 'Content-Type', value: file.type},
        ]
      });
      const message = 'Sign transaction Bundlr button clicked: ' + JSON.stringify(response)
      setOutput(JSON.stringify(message));
      console.log(message)
    } catch (error) {
      setOutput(JSON.stringify(error));
    }
  };
  const handleFileUploadSignBundlr = async (event) => {
    const file = event.target.files[0];
    await handleSignTransactionBundlr(file);
  };
  



  const handleSendTransactionBundlr = async (file) => {
    try {
      const signedTransaction = await othent.signTransactionBundlr({
        othentFunction: 'uploadData', 
        data: file,
        tags: [ 
          {name: 'Content-Type', value: file.type} 
        ]
      });

      const response = await othent.sendTransactionBundlr(signedTransaction);
      const message = 'Send transaction Bundlr button clicked: ' + JSON.stringify(response)
      console.log(response)
      setOutput(message);
    } catch (error) {
      setOutput(JSON.stringify(error));
    }
  };
  const handleFileUploadSendBundlr = async (event) => {
    const file = event.target.files[0];
    await handleSendTransactionBundlr(file);
  };




  const handleInitializeJWKClick = async () => {
    const privateKey = {
      "kty": "RSA",
      "e": "AQAB",
      "n": "iSGYBVYjH2jHL2ZfI3ymVWq-bqkPJUP3Zh8NzYrppU77RI-W_Gucg0ZMFHelgeY4xw2axhXWGJqLLFcp1Mr7xAZ3wIGLfiwvJNejFOwtJFcPbPoRKkTVLP0wWAZmbeKhnu1wFhfHrn2CYZEsVn2Z6BBUnXSo9CIG_Db55tfdcTM6gu6i9z_D3BUOhAeBeSKwqsc-G5KFG_r43I2tvVDpzWK8iUqTatRix0tvX1Mf1SLlovtEVBlNglmanTZdosZQyIxCS600ylCAaogWwYmh15PMz4Fw_pnkXpvTIGquOfVUoILxh7vbESsNknNKcrcD7uzrPyk7mBZeTDkjS-8avsTIDvibQGHznX_knAP2qiIHxjOmzp4jNRt7DphiIuXJZx5tm6kR7xOUcSiIxH4r0tiwWMiP95K1k7d9D8171CEn7YZmNJGYr4a-I8XML5vCq99SowksSoydi-UUN-hUNuiMLZKxi2EA_cI_DzX8WqzkLMHix6m8TQDRhUZ7otXiOXhloFWXV2KPiQD9WiioCcGUsGzUlRXxcpite5a3zLG8PoEaLSjZcFZrEd2CvMs44aCmb4JQyP54VE76ojo-Opy_0Yb8RMNKoX0QvUeD7NOK-hXBwIDBgm-QrDjgHQ6-RXs72cMiHjl2aib_YRwbwW68pg9G6C-iSM9MMwlbBv0",
      "d": "gIIi3J1kPMMMJrdg4PinR9TIsRttPhb7eZAQd1Z-rpPdlNqbO-H8wmjWUzfsulbtTlzJdmhwQo5RbjQg13GBjqog_x5ngs4VQAl0ot7RTwTnR9Dw1RO8UnTTISqeQsvnefA44ftW_YZQ8O4DBuqdmIP1R7lTu7VHpoQ-nL4enz7Kznij7-Cpw01YVRJTmxmPRfuBkIU2iIohPU7oSknRUM_-rwpcK_jsuKdQr5xOcIZLfPjLh6ROpqEh68JO7YO7oLUQS6r9lbrrHOp7qNM5_7Racvty0KWXBbIxoGdY7qehruoHPpQlL2mRRnUUh3xLC1SrAH27g0MzC2tgUIC6JiyV2BAdSGBu2ReRSu8TIL1UtxYBWpgsgggnMaGfqZbxREuU7mvFNYMtgR8juutswxOVEvDjmg9xyG-hFZ4vhVEq3VSGpSoZiFhqGeUIlGkBrgZzarjWFDvuNMSNdFLz7WXn2_XMNQkkco5BW5ZFsex_e06zc0c0-EJui8b4sLKoK7uHGlLN50HzM8HU-HnQGn-Zp-g0goi_-uiOtIq0KH2Zn-3XIZ1c8JWwkoi0-jl3VHtsbyaQKcjissRRiixtT5Rler4SFtaEtoNNojga0WVq0PGgAM1oQquhVTnKFlOepo3ryxK8gtUniUgbWKZZl79Bq5yCWG0Kq77fvqk_B2E",
      "p": "_rjPL7ak7zlmRGgEGIQOEbKKD6rNlkvsH0TrhuyTOAHLOoUVlnsJoAhLAThzy_7DypdOq7_uQfCc0QQkyjmYTdMHgsFx9HAzuYpL6BRaHrMPWKEu7ElmBbYHMNMSL3zWH8Ywufit1ttR6E62PHxcsOWkLFaJR6tqv5DmJ18ckhVfC8N7IaiEJVhMDcvZlARlcgInBpO4n35ff1XJr2HAEP3zBdn8Gy6VslbszHFyFAaoGRs_OxXlhEoxQnFtWVOnNjv1uL4WCI-HBCQLMqAVULIJ8UriXbImQL4CmkGS0pH7fFO1vqRyRreH3cEbKy514znMl6YOqBnlPhIcjNwJNw",
      "q": "idG9NXrUnQOJvOTbaUWGr9bVdK5Fauqu-Oey68W-77oXFbj_LwTM8K8LdQYcaZUShYs5PUxOVGvllm9K2mveYtqGC8N3FM9wSflxskpzrVI1SQednH_dv9EBtUdpriLW47IBZDWRp4TkoQAUUOU7GV3WlsDjq35ctIkoSRNsG3sYO6tKivdJWkANE7P6GY4uofy_NnMaTFsd3hzZx7ABJkDbLFLmtKN-Oipz29lKhaMTzaJJcTdJJVybREXrfeE426PGUNcnuWHY-uQz4APZHFtDMJCq7YBWVMEeazxEjPvcbxL8ky6EfhcXcRKnLApqFjFWyl6A1KZlunY4upi7aw",
      "dp": "H1Sh_09q2BXqU02r-0v64whf3O94XB04jNwQUEc3EHOACNGnxxuZInsCpsLH03ahpICZ55wy9R9gWoE0-T6-Ugw750Rd_N_0LMUq8v_V2eLSZ2dj-yJIDznFhqbfnMGxILVi9uz0jPHrEDTmS2hMimGkoON__TXDao6rEHqta_Z--1ZvBcPRhTpoGGZTe9ZSmARVwoRW-B82JdZqeUz_r9dclgKq9Lj1Jrt0Yu0tR_NNp9DnJSBbW7s4deC3v33_mjcj0TZoRWNKCyNX0UFJfeR4PpqkXzvzYpE8hra8FXRpR3CQcUOO3s3iQ09mRRhw3aMVXC3LrbeJr-nQYy8JXw",
      "dq": "ZE83-7jPDwkIM2gPGmv0P_-JlUdSVyNA_wEFBP4Ens8_BhyD_2DrGTMOj7pG68IInRJcMvVa_a8ah4exX5CraB_M-Lrn7UmeXPkle7McxsXS6riUStf2OiqRp7O2g3vwFAH3aUxkGx1qmpRINSji_u-BxG_YRXXPW8eIfseYI9hQJv3hX4vk479CxVh1bCxEXLptIeBc_75B2uv8xo6gB4uk-nnMWSW2Nfe4JAffaazsOPspoTGwF3VzvRl28UP_8j0dlrFCxHcnSlTWPPIQD8eM-8gP4JVMQJve3AYdjs-x_VZAZ4-v92YvNalx62gZFtYKaXinJB-IY1Kwr3-CyQ",
      "qi": "Oyu3BdOZhTCSru1wlwV6ep2Fw7hHUp5ZQkyGALGUcXhLP2BKVyykrpEgeBxrQMt429LfGpaJ95waXD9SG92OxJMJCE84OORxez5yEQPepACfvAffqMcxvUiXehXDdSQ_V-vx53Mo_OuJ3D4b83pGtt38fZvERcZzaR32NOLen_GSFyEJVi9uxpB_oDGVKAMIsKb_5aSVx1kGb-xT8sR9wPbH2y0cXJQrhI-gtQ6x5OctOs4gJY8ZJOYDqiCgxm7QJMZ70AayJjXVqvQrqNeuBVyM1urFsV5Q1lg_CjYrtBPmBPwJ6e0SuSr40zH0Hr-Xw0RvNRreZNpLDZ-ard27yg"
    }
    const initializeJWK = await othent.initializeJWK({ privateKey })
    const message = 'Backup Keyfile button clicked: ' + JSON.stringify(initializeJWK);
    console.log(message);
    setOutput(message);
  };



  const handleJWKBackupTxnClick = async () => {
    const privateKey = {
      "kty": "RSA",
      "e": "AQAB",
      "n": "iSGYBVYjH2jHL2ZfI3ymVWq-bqkPJUP3Zh8NzYrppU77RI-W_Gucg0ZMFHelgeY4xw2axhXWGJqLLFcp1Mr7xAZ3wIGLfiwvJNejFOwtJFcPbPoRKkTVLP0wWAZmbeKhnu1wFhfHrn2CYZEsVn2Z6BBUnXSo9CIG_Db55tfdcTM6gu6i9z_D3BUOhAeBeSKwqsc-G5KFG_r43I2tvVDpzWK8iUqTatRix0tvX1Mf1SLlovtEVBlNglmanTZdosZQyIxCS600ylCAaogWwYmh15PMz4Fw_pnkXpvTIGquOfVUoILxh7vbESsNknNKcrcD7uzrPyk7mBZeTDkjS-8avsTIDvibQGHznX_knAP2qiIHxjOmzp4jNRt7DphiIuXJZx5tm6kR7xOUcSiIxH4r0tiwWMiP95K1k7d9D8171CEn7YZmNJGYr4a-I8XML5vCq99SowksSoydi-UUN-hUNuiMLZKxi2EA_cI_DzX8WqzkLMHix6m8TQDRhUZ7otXiOXhloFWXV2KPiQD9WiioCcGUsGzUlRXxcpite5a3zLG8PoEaLSjZcFZrEd2CvMs44aCmb4JQyP54VE76ojo-Opy_0Yb8RMNKoX0QvUeD7NOK-hXBwIDBgm-QrDjgHQ6-RXs72cMiHjl2aib_YRwbwW68pg9G6C-iSM9MMwlbBv0",
      "d": "gIIi3J1kPMMMJrdg4PinR9TIsRttPhb7eZAQd1Z-rpPdlNqbO-H8wmjWUzfsulbtTlzJdmhwQo5RbjQg13GBjqog_x5ngs4VQAl0ot7RTwTnR9Dw1RO8UnTTISqeQsvnefA44ftW_YZQ8O4DBuqdmIP1R7lTu7VHpoQ-nL4enz7Kznij7-Cpw01YVRJTmxmPRfuBkIU2iIohPU7oSknRUM_-rwpcK_jsuKdQr5xOcIZLfPjLh6ROpqEh68JO7YO7oLUQS6r9lbrrHOp7qNM5_7Racvty0KWXBbIxoGdY7qehruoHPpQlL2mRRnUUh3xLC1SrAH27g0MzC2tgUIC6JiyV2BAdSGBu2ReRSu8TIL1UtxYBWpgsgggnMaGfqZbxREuU7mvFNYMtgR8juutswxOVEvDjmg9xyG-hFZ4vhVEq3VSGpSoZiFhqGeUIlGkBrgZzarjWFDvuNMSNdFLz7WXn2_XMNQkkco5BW5ZFsex_e06zc0c0-EJui8b4sLKoK7uHGlLN50HzM8HU-HnQGn-Zp-g0goi_-uiOtIq0KH2Zn-3XIZ1c8JWwkoi0-jl3VHtsbyaQKcjissRRiixtT5Rler4SFtaEtoNNojga0WVq0PGgAM1oQquhVTnKFlOepo3ryxK8gtUniUgbWKZZl79Bq5yCWG0Kq77fvqk_B2E",
      "p": "_rjPL7ak7zlmRGgEGIQOEbKKD6rNlkvsH0TrhuyTOAHLOoUVlnsJoAhLAThzy_7DypdOq7_uQfCc0QQkyjmYTdMHgsFx9HAzuYpL6BRaHrMPWKEu7ElmBbYHMNMSL3zWH8Ywufit1ttR6E62PHxcsOWkLFaJR6tqv5DmJ18ckhVfC8N7IaiEJVhMDcvZlARlcgInBpO4n35ff1XJr2HAEP3zBdn8Gy6VslbszHFyFAaoGRs_OxXlhEoxQnFtWVOnNjv1uL4WCI-HBCQLMqAVULIJ8UriXbImQL4CmkGS0pH7fFO1vqRyRreH3cEbKy514znMl6YOqBnlPhIcjNwJNw",
      "q": "idG9NXrUnQOJvOTbaUWGr9bVdK5Fauqu-Oey68W-77oXFbj_LwTM8K8LdQYcaZUShYs5PUxOVGvllm9K2mveYtqGC8N3FM9wSflxskpzrVI1SQednH_dv9EBtUdpriLW47IBZDWRp4TkoQAUUOU7GV3WlsDjq35ctIkoSRNsG3sYO6tKivdJWkANE7P6GY4uofy_NnMaTFsd3hzZx7ABJkDbLFLmtKN-Oipz29lKhaMTzaJJcTdJJVybREXrfeE426PGUNcnuWHY-uQz4APZHFtDMJCq7YBWVMEeazxEjPvcbxL8ky6EfhcXcRKnLApqFjFWyl6A1KZlunY4upi7aw",
      "dp": "H1Sh_09q2BXqU02r-0v64whf3O94XB04jNwQUEc3EHOACNGnxxuZInsCpsLH03ahpICZ55wy9R9gWoE0-T6-Ugw750Rd_N_0LMUq8v_V2eLSZ2dj-yJIDznFhqbfnMGxILVi9uz0jPHrEDTmS2hMimGkoON__TXDao6rEHqta_Z--1ZvBcPRhTpoGGZTe9ZSmARVwoRW-B82JdZqeUz_r9dclgKq9Lj1Jrt0Yu0tR_NNp9DnJSBbW7s4deC3v33_mjcj0TZoRWNKCyNX0UFJfeR4PpqkXzvzYpE8hra8FXRpR3CQcUOO3s3iQ09mRRhw3aMVXC3LrbeJr-nQYy8JXw",
      "dq": "ZE83-7jPDwkIM2gPGmv0P_-JlUdSVyNA_wEFBP4Ens8_BhyD_2DrGTMOj7pG68IInRJcMvVa_a8ah4exX5CraB_M-Lrn7UmeXPkle7McxsXS6riUStf2OiqRp7O2g3vwFAH3aUxkGx1qmpRINSji_u-BxG_YRXXPW8eIfseYI9hQJv3hX4vk479CxVh1bCxEXLptIeBc_75B2uv8xo6gB4uk-nnMWSW2Nfe4JAffaazsOPspoTGwF3VzvRl28UP_8j0dlrFCxHcnSlTWPPIQD8eM-8gP4JVMQJve3AYdjs-x_VZAZ4-v92YvNalx62gZFtYKaXinJB-IY1Kwr3-CyQ",
      "qi": "Oyu3BdOZhTCSru1wlwV6ep2Fw7hHUp5ZQkyGALGUcXhLP2BKVyykrpEgeBxrQMt429LfGpaJ95waXD9SG92OxJMJCE84OORxez5yEQPepACfvAffqMcxvUiXehXDdSQ_V-vx53Mo_OuJ3D4b83pGtt38fZvERcZzaR32NOLen_GSFyEJVi9uxpB_oDGVKAMIsKb_5aSVx1kGb-xT8sR9wPbH2y0cXJQrhI-gtQ6x5OctOs4gJY8ZJOYDqiCgxm7QJMZ70AayJjXVqvQrqNeuBVyM1urFsV5Q1lg_CjYrtBPmBPwJ6e0SuSr40zH0Hr-Xw0RvNRreZNpLDZ-ard27yg"
    }
    const sub = 'google-oauth2|113378216876216346016'
    const contract_id = 'JUTWhO3PF_22ras6JVIlCALzqlkfscKBKPz7vxYKXA8'
    const tags = [ {name: 'Test', value: 'Tag'} ]
    const data = {
      toContractFunction: "createPost",
      toContractId: "tQKJCf2E9lIaNTjM8ELK6ATlJtef8cVmq68c9XnVuj0",
      txnData: {
        POST: "GROUP TEST"
      }
    }
    const othentFunction = 'JWKBackupTxn'

    const JWKBackupTxn = await othent.JWKBackupTxn({ privateKey, sub, contract_id, tags, data, othentFunction })
    const message = 'JWK backup transaction button clicked: ' + JSON.stringify(JWKBackupTxn);
    console.log(message);
    setOutput(message);
  };




  const handleReadCustomContract = async () => {
    const contract_id = 'tQKJCf2E9lIaNTjM8ELK6ATlJtef8cVmq68c9XnVuj0'
    const readCustomContract = await othent.readCustomContract({ contract_id })
    const message = 'Read custom contract button clicked: ' + JSON.stringify(readCustomContract);
    console.log(message);
    setOutput(message);
  };




  const handleVerifyArweaveData = async () => {
    const transactionId = 'Qi2K6IJY_VTlUJ3dszVm3Ot8UIOuMljMi8luw0ZdSnw'
    const verifyArweaveData = await othent.verifyArweaveData({ transactionId })
    const message = 'Verify arweave data button clicked: ' + JSON.stringify(verifyArweaveData);
    console.log(message);
    setOutput(message);
  };




  const handleVerifyBundlrData = async () => {
    const transactionId = 'VpyBrjsQ9jlKSYda17T8Dua1P-SpbWfJvGz2V-UPvfk'
    const verifyBundlrData = await othent.verifyBundlrData({ transactionId })
    const message = 'Verify bundlr data button clicked: ' + JSON.stringify(verifyBundlrData);
    console.log(message);
    setOutput(message);
  };


  


  return (
    <Styled.MainWrapper>

      <Styled.Container >

        <Styled.DemoOutput>{output}</Styled.DemoOutput>


        <Styled.DemoContainer>

          <Styled.DemoButton onClick={handlePingClick}>Ping</Styled.DemoButton>
          <Styled.DemoButton onClick={handleAddCallbackURL}>Add callback URL</Styled.DemoButton>
          <Styled.DemoButton onClick={handleGetAPIID}>API ID</Styled.DemoButton>
          <Styled.DemoButton onClick={handleLogInClick}>Log In</Styled.DemoButton>
          <Styled.DemoButton onClick={handleLogOutClick}>Log Out</Styled.DemoButton>
          <Styled.DemoButton onClick={handleUserDetailsClick}>User Details</Styled.DemoButton>

          <Styled.DemoButton onClick={handleReadContractClick}>Read Contract</Styled.DemoButton>
          <Styled.DemoButton onClick={handleSignTransactionWarp}>Sign Transaction Warp</Styled.DemoButton>
          <Styled.DemoButton onClick={handleSendTransactionWarp}>Send Transaction Warp</Styled.DemoButton>
          <Styled.DemoButton onClick={handleReadCustomContract}>Read Custom Contract</Styled.DemoButton>

          <label className="upload-button" htmlFor="file-input-sign-a">
            <span>Sign Arweave Data</span>
          </label>
          <Styled.DemoInput id="file-input-sign-a" type="file" onChange={handleFileUploadSignArweave} />

          <label className="upload-button" htmlFor="file-input-upload-a">
            <span>Upload Arweave Data</span>
          </label>
          <Styled.DemoInput id="file-input-upload-a" type="file" onChange={handleFileUploadSendArweave} />

          <label className="upload-button" htmlFor="file-input-sign-b">
            <span>Sign Bundlr Data</span>
          </label>
          <Styled.DemoInput id="file-input-sign-b" type="file" onChange={handleFileUploadSignBundlr} />

          <label className="upload-button" htmlFor="file-input-upload-b">
            <span>Upload Bundlr Data</span>
          </label>
          <Styled.DemoInput id="file-input-upload-b" type="file" onChange={handleFileUploadSendBundlr} />


          <Styled.DemoButton onClick={handleInitializeJWKClick}>Initialize JWK (WILL COMPROMISE WALLET)</Styled.DemoButton>
          <Styled.DemoButton onClick={handleJWKBackupTxnClick}>JWK Backup Txn  (WILL COMPROMISE WALLET)</Styled.DemoButton>

          <Styled.DemoButton onClick={handleVerifyBundlrData}>Verify Bundlr Data</Styled.DemoButton>
          <Styled.DemoButton onClick={handleVerifyArweaveData}>Verify Arweave Data</Styled.DemoButton>

        </Styled.DemoContainer>




      </Styled.Container>
    </Styled.MainWrapper>
  );
};

export default SDKDemo;
