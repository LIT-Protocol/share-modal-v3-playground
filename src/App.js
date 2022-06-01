import './App.css';
import React, { useEffect, useState } from "react";
import ShareModal from "lit-share-modal-v3";

function App() {
  const [showShareModal, setShowShareModal] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  // const [devMode, setDevMode] = useState(false)

  const [unifiedAccessControlConditions, setUnifiedAccessControlConditions] = useState('')

  useEffect(() => {
    console.log('check showShareModal')
  }, [showShareModal])

  const onUnifiedAccessControlConditionsSelected = (shareModalOutput) => {
    console.log('check acc', shareModalOutput)
    setShowShareModal(false);
    if (shareModalOutput.unifiedAccessControlConditions) {
      const prettify = JSON.stringify(shareModalOutput.unifiedAccessControlConditions, undefined, 4);
      setUnifiedAccessControlConditions(prettify)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShowShareModal(!showShareModal)}>
          show share modal
        </button>
        <button onClick={() => setDarkMode(!darkMode)}>
          dark mode: {darkMode ? 'on' : 'off'}
        </button>
        {/*<button onClick={() => setDevMode(!devMode)}>*/}
        {/*  dev mode: {devMode ? 'on' : 'off'}*/}
        {/*</button>*/}
        {showShareModal && (
          <div className={'share-modal'}>
            <ShareModal
              darkTheme={darkMode}
              onClose={() => {
                setShowShareModal(false);
              }}
              onUnifiedAccessControlConditionsSelected={onUnifiedAccessControlConditionsSelected}
            />
          </div>
        )}
        <div className={'lsm-dev-mode-container'}>
          <label className={'lsm-dev-mode-container-label'}>Raw Access Control Conditions</label>
          <textarea className={'lsm-dev-mode-textarea'} rows={35} value={unifiedAccessControlConditions} onChange={(e) => setUnifiedAccessControlConditions(e.target.value)}/>
        </div>
      </header>
    </div>
  );
}

export default App;
