//importações

import { Header } from "./components/Header"

const App = () => {
  // Javascript -> Implementando tudo o que já conhecem

  //Não vamos utilizar:
  //querySelector
  //DOM Methods: appendChild, createElement
  //addEventListener

  return (
    //JSX -> Junção de HTML com JS
    <> {/*Fragment*/}
      <Header/>
    </>
  )
}

export default App
