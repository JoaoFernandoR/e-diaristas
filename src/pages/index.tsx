import type { NextPage } from 'next'
import PageTitle from '../components/data-display/PageTitle/PageTitle'
import SafeEnvironment from '../components/feedback/SafeEnvironment/SafeEnvironment'

const App: NextPage = () => {
  return (
    <>
      <SafeEnvironment />
      <PageTitle title={"Conheça os profissionais"} subtitle={"Preencha seu endereço e veja todos os profissionais da sua localidade"} />
    </>
  )
}

export default App