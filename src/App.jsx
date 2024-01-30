import { useState } from 'react'
import Header from './components/Header'
import SearchField from './components/SearchField'
import Images from './components/Images'
import useAxios from './hooks/useAxios'
import { ImageContext } from './Contexts/Context'



function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(`https://api.unsplash.com/search/photos?page=1&query=office&client_id=dOcXjWVIV44X0KWyME3R0F-Gmal_HTIHgGR1IhEibM0`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <>
      <ImageContext.Provider value={value}>
        <Header>
          <SearchField />
        </Header>
        <Images />
      </ImageContext.Provider>
    </>
  )
}

export default App;
