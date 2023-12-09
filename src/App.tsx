import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {default as A} from "@automerge/automerge/next"
import {AutomergeUrl} from '@automerge/automerge-repo'
import {useDocument} from '@automerge/automerge-repo-react-hooks'

interface CounterDoc {
    counter: A.Counter
}

function App({docUrl}: {docUrl: AutomergeUrl}) {
  const [doc, changeDoc] = useDocument<CounterDoc>(docUrl) 

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>XYZ0</h1>
      <div className="card">
        Good to go!
      </div>
    </>
  )
}

export default App
