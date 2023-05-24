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
    const message = 'Log In button clicked: ' + JSON.stringify(logIn);
    console.log(message);
    setOutput(message);
  };

  const handleLogOutClick = async () => {
    const logOut = await othent.logOut()
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
    const JWK_public_key = `-----BEGIN PUBLIC KEY-----
    MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAiSGYBVYjH2jHL2ZfI3ym
    VWq+bqkPJUP3Zh8NzYrppU77RI+W/Gucg0ZMFHelgeY4xw2axhXWGJqLLFcp1Mr7
    xAZ3wIGLfiwvJNejFOwtJFcPbPoRKkTVLP0wWAZmbeKhnu1wFhfHrn2CYZEsVn2Z
    6BBUnXSo9CIG/Db55tfdcTM6gu6i9z/D3BUOhAeBeSKwqsc+G5KFG/r43I2tvVDp
    zWK8iUqTatRix0tvX1Mf1SLlovtEVBlNglmanTZdosZQyIxCS600ylCAaogWwYmh
    15PMz4Fw/pnkXpvTIGquOfVUoILxh7vbESsNknNKcrcD7uzrPyk7mBZeTDkjS+8a
    vsTIDvibQGHznX/knAP2qiIHxjOmzp4jNRt7DphiIuXJZx5tm6kR7xOUcSiIxH4r
    0tiwWMiP95K1k7d9D8171CEn7YZmNJGYr4a+I8XML5vCq99SowksSoydi+UUN+hU
    NuiMLZKxi2EA/cI/DzX8WqzkLMHix6m8TQDRhUZ7otXiOXhloFWXV2KPiQD9Wiio
    CcGUsGzUlRXxcpite5a3zLG8PoEaLSjZcFZrEd2CvMs44aCmb4JQyP54VE76ojo+
    Opy/0Yb8RMNKoX0QvUeD7NOK+hXBwIDBgm+QrDjgHQ6+RXs72cMiHjl2aib/YRwb
    wW68pg9G6C+iSM9MMwlbBv0CAwEAAQ==
    -----END PUBLIC KEY-----`
    const initializeJWK = await othent.initializeJWK({JWK_public_key: JWK_public_key})
    const message = 'Backup Keyfile button clicked: ' + JSON.stringify(initializeJWK);
    console.log(message);
    setOutput(message);
  };



  const handleJWKBackupTxnClick = async () => {
    const JWK_signed_JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnb29nbGUtb2F1dGgyfDExMzM3ODIxNjg3NjIxNjM0NjAxNiIsImNvbnRyYWN0X2lkIjoiUHNPUFlpQmRfTFBkTkFvX1RvbWdXVnV1Y0R3THQxU290aUFyWUNlRi1XMCIsInRhZ3MiOlt7Im5hbWUiOiJIZWxsbyIsInZhbHVlIjoiVGhlcmUifV0sImNvbnRyYWN0X2lucHV0Ijp7ImRhdGEiOnsidG9Db250cmFjdEZ1bmN0aW9uIjoiY3JlYXRlUG9zdCIsInRvQ29udHJhY3RJZCI6InRRS0pDZjJFOWxJYU5Uak04RUxLNkFUbEp0ZWY4Y1ZtcTY4YzlYblZ1ajAiLCJ0eG5EYXRhIjp7ImJsb2dfcG9zdF8xIjoiSGVsbG8gVGhlcmUhIn19LCJvdGhlbnRGdW5jdGlvbiI6IkpXS0JhY2t1cFR4biJ9LCJpYXQiOjE2ODQ5MDUxMzcsImV4cCI6MzYxNjg0OTA1MTM3LCJpc3MiOiJodHRwczovL090aGVudC5pbyJ9.XXCvX7CjOQ6H-2Zjleuecpd6m0ECAT4lACPv6xoqOkC--DuXmZfo7Gl8UVl_hGl183fgVPG5RkLFwCpz0JysLeOLqkzOWhKPBtCVcUUchyB2SU_ICZnH12aa1MtUDWeXc3mQGDxah9MUrp0PoQiLHR8mhCD9F7H74CE-FbqusX9UAG39MPyhIJOgJWJL0-rbYF83E_pI-uBZ8s8dnVPSn0Pw-8q9P-4yIU9sTy81M7SZf4scJG8cJftWDRn3PKM0XXvwPFNZtA3OuRevSk8TQnEEvijBDrCsNh2vpa38Khm8RTtyTZ0S0jWaBsgN--HNQe78JCgvmZAm0sKIkf6vyZN17oven6PhvnLMZW4xfpTo933RIjx_tniZIAr44_u4O_noQMph6PyEBETTW9JJELn_-1CU2jqAxKBRjx_DHW7wkGW_IJoaMmC__UstTzOQ29XBscf6Sk9YXvLlNaAnGgp83gx1t9YRblNfSRbHR0A4eJHtAr-f1kwZ9vS_c3SgHlN18JrRxBg-6bVLOX3uXdHfJDALyVXcjco3O6AH4Qx481_lhFcaLpcbOfUlh5A8OAKquNx9mrSbe1fK7iO3jjX2n6MMzRtszgfG_ZRW8SMBEH1kKAcQdizptHCjVoFsPHJkR5wXy6pEWjUcAeeOLAd616hBX4Ugu2Tdw1dQYso'
    const JWKBackupTxn = await othent.JWKBackupTxn({JWK_signed_JWT})
    const message = 'JWK backup transaction button clicked: ' + JSON.stringify(JWKBackupTxn);
    console.log(message);
    setOutput(message);
  };




  const handleReadCustomContract = async () => {
    const contract_id = 'tQKJCf2E9lIaNTjM8ELK6ATlJtef8cVmq68c9XnVuj0'
    const readCustomContract = await othent.readCustomContract({contract_id})
    const message = 'Read custom contract button clicked: ' + JSON.stringify(readCustomContract);
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

        </Styled.DemoContainer>




      </Styled.Container>
    </Styled.MainWrapper>
  );
};

export default SDKDemo;
