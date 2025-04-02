import './App.css'
import SearchBar from './components/molecules/search-bar/SearchBar'
import Card from './components/molecules/card/Card'

function App() {
  const text = "2014"
  return (
    <>
      <SearchBar />
      <Card title='Interstellar' description={text} imageSrc=''/>
    </>
  )
}

export default App
