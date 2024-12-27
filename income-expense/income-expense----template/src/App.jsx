import './App.css'
function App(){
  return(
    <div className='App'>
      <main className='main_container'>
        <header className='main_header'>
          <div>
            <h1 className='header-title'>
            Look for <span>Favorite</span> Food
            </h1>
            <p className='header-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam rutrum urna, eget elementum metus lobortis eget. Duis et finibus urna. Quisque faucibus facilisis metus, et sagittis neque posuere sed. Aenean mauris mi, rhoncus ut interdum non, dignissim eget turpis. Morbi dapibus viverra urna.
            </p>

            <div className='header-input-container'>
              <input type='text' placeholder='Find a recipe...'/>
              <button>Search</button>
            </div>
          </div>
          <img src="https://hips.hearstapps.com/hmg-prod/images/how-to-make-french-toast-1589827448.jpg?crop=0.734xw:0.490xh;0.0897xw,0.323xh&resize=1200:*"/>
        </header>
      </main>
    </div>
  )
}

export default App;