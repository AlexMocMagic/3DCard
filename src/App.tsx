import './App.css'

function App() {

  return (
    <>
    <div className='card'>
      <div className="imgBox">
        <img src="bg.png" alt="background of the card" />
        <img src="alex.jpg" alt="image of the programmer" />

      </div>
      <div className="details">
        <div className="content">
          <h2>Mocanu Alexandru <br /><span>Web Developer</span></h2>
          <div className='social-icons'>
            <a href="https://www.instagram.com/alex.devweb/"><ion-icon className="a" name="logo-instagram"></ion-icon></a>
            <a href="https://github.com/AlexMocMagic"><ion-icon className="a" name="logo-github"></ion-icon></a>
            <a href="https://www.linkedin.com/in/alex-mocanu-9a5125273/"><ion-icon className="a" name="logo-linkedin"></ion-icon></a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
