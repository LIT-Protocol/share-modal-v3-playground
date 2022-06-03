import './App.css';
import React, { useEffect, useState } from "react";
import ShareModal from "lit-share-modal-v3";

function App() {
  const [showShareModal, setShowShareModal] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [startingChain, setStartingChain] = useState('ethereum')
  const [permanentDefault, setPermanentDefault] = useState(false)
  const [allowMultipleConditions, setAllowMultipleConditions] = useState(true)
  const [allowChainSelector, setAllowChainSelector] = useState(true)
  const [isModal, setIsModal] = useState(true)

  // const [devMode, setDevMode] = useState(false)

  const [unifiedAccessControlConditions, setUnifiedAccessControlConditions] = useState('')

  const onUnifiedAccessControlConditionsSelected = (shareModalOutput) => {
    setShowShareModal(false);
    if (shareModalOutput.unifiedAccessControlConditions) {
      const prettify = JSON.stringify(shareModalOutput.unifiedAccessControlConditions, undefined, 4);
      setUnifiedAccessControlConditions(prettify)
    }
  }

  return (
    <div className="App">
      <div className={'left-side'}>
        {window.innerWidth > 768 && (
          <button className={'playground-button'} onClick={() => setIsModal(!isModal)}>
            Format is&nbsp;<strong>{isModal ? 'modal' : 'embedded'}</strong>&nbsp;(embed was designed for desktop)
          </button>
        )}
        <button className={'playground-button thicken-border'} onClick={() => setShowShareModal(!showShareModal)} disabled={!isModal}>
          Show Share Modal
        </button>
        <button className={'playground-button'} onClick={() => setDarkMode(!darkMode)}>
          Dark Mode is&nbsp;<strong>{darkMode ? 'on' : 'off'}</strong>
        </button>
        <button className={'playground-button'} onClick={() => setPermanentDefault(!permanentDefault)}>
          Default Permanent Setting:&nbsp;<strong>{permanentDefault ? 'true' : 'false'}</strong>
        </button>
        <button className={'playground-button'} onClick={() => setAllowMultipleConditions(!allowMultipleConditions)}>
          Creating Multiple Conditions is&nbsp;<strong>{allowMultipleConditions ? 'allowed' : 'not allowed'}</strong>
        </button>
        <button className={'playground-button'} onClick={() => setAllowChainSelector(!allowChainSelector)}>
          Switching Chains is&nbsp;<strong>{allowChainSelector ? `allowed` : 'not allowed'}</strong>
        </button>
        <div className={'dropdown-select'}>
          <label htmlFor="starting-chain">Choose starting chain:</label>
          <select className={'selector'} name="starting-chain" id="starting-chain" onChange={e => setStartingChain(e.target.value)}>
            <option value="ethereum">EVM</option>
            <option value="solana">Solana</option>
          </select>
        </div>
        <div className={'dev-mode-container'}>
          <label className={'dev-mode-container-label'}>Raw Access Control Conditions</label>
          <textarea className={'dev-mode-textarea'} rows={35} value={unifiedAccessControlConditions} onChange={(e) => setUnifiedAccessControlConditions(e.target.value)}/>
        </div>
      </div>
        {/*<button onClick={() => setDevMode(!devMode)}>*/}
        {/*  dev mode: {devMode ? 'on' : 'off'}*/}
        {/*</button>*/}
        {showShareModal && isModal && (
          <div className={'share-modal'}>
            <ShareModal
              isModal={isModal}
              allowChainSelector={allowChainSelector}
              allowMultipleConditions={allowMultipleConditions}
              defaultChain={startingChain}
              permanentDefault={permanentDefault}
              darkMode={darkMode}
              onClose={() => {
                setShowShareModal(false);
              }}
              onUnifiedAccessControlConditionsSelected={onUnifiedAccessControlConditionsSelected}
            />
          </div>
        )}
      <div className={'right-side'}>
      {!isModal && (
        <div className={'embedded'}>
          <ShareModal
            isModal={isModal}
            allowChainSelector={allowChainSelector}
            allowMultipleConditions={allowMultipleConditions}
            defaultChain={startingChain}
            permanentDefault={permanentDefault}
            darkMode={darkMode}
            onClose={() => {
              setShowShareModal(false);
            }}
            onUnifiedAccessControlConditionsSelected={onUnifiedAccessControlConditionsSelected}
          />
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
