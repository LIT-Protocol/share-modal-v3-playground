import './App.css';
import React, { useEffect, useState } from "react";
import ShareModal from "lit-share-modal-v3";

function App() {
  const [showShareModal, setShowShareModal] = useState(false)

  useEffect(() => {
    console.log('check showShareModal')
  }, [showShareModal])

  const conditionsCreated = (acc) => {
    console.log('check acc', acc)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShowShareModal(!showShareModal)}>
          share modal
        </button>
        {showShareModal && (
          <div className={'share-modal'}>
            <ShareModal
              onClose={() => {
                setShowShareModal(false);
                // setPermanent(true);
                // setOpenCreateDraftOrderModal(true);
              }}
              onUnifiedAccessControlConditionsSelected={async (restriction) => {
                conditionsCreated(restriction)
              }}
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
