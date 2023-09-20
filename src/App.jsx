//importações

import { Header } from "./components/Header"
import { BannerSection } from "./components/BannerSection"
import { CategoriesSection } from "./components/CategoriesSection"

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
      <BannerSection/>
      <CategoriesSection />
    </>
  )
}

export default App
