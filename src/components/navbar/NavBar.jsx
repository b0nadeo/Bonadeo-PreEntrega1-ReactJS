import CartWidget from "./CartWidget"
import "./navbar.css"


const NavBar = () => {

    return(
        <div>
         
         <nav className="navbar navbar-expand-lg bg-secondary">
           <div className="container-fluid">
           <a className="navbar-brand" href="#"><img style={{width: "100px"}} src="https://themangastore.in/cdn/shop/files/Logo_tilted_full_W.png?v=1691312945&width=340" alt="imagen" /></a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav">
             <li className="nav-item">
               <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="#">Shonen</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="#">Shojo</a>
            </li>
            <li className="nav-item">
              
            </li>
           </ul>
      
              
        </div>
        </div>
        <div>
          <CartWidget />
        </div>
        </nav>
        

        </div>
    )
}

export default NavBar