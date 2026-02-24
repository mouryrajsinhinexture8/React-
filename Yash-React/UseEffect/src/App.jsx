import React from 'react'

import EffectBasic from './components/EffecBasicDemo'
import FirstMountExample from './components/FirstMountDemo'
import UnmountExample from './components/Cleanup'
import UpdateExample from './components/DidUpdateDemo'

function App(){
  return (
    <div>
      {/* <EffectBasic/>
      <hr /> */}
      {/* <FirstMountExample /> */}
      <hr />
      <UpdateExample />  
      <hr />
      {/* <UnmountExample />
       */}
    </div>
  ) 
}

export default App;