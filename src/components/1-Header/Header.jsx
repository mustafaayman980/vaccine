import "./header.css"

 function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-container ">
          <div className="logo">
            <img src="/src/assets/image/logo.png" alt="logo" />
          </div>
          <div className="nav border">
            <ul >
              <li>
                <a className="active" href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <span></span>
          

          <div className="search">
            <input type="search" placeholder="search" />
          </div>
          <div className="btn">
            <button type="button" className="btn">
              login
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}
export default Header