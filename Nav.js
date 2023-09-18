import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import{
  Link
} from "react-router-dom";
function Nav(){
 return (
    <>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
    
  <a class="navbar-brand naavv" href="#">CodeWave</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active naavv">
      <Link to="/" class="nav-link ">Home</Link>
      </li>
      <li class="nav-item naavv">
      <Link to="/practice" class="nav-link">Practice</Link>
      </li>
      <li class="nav-item naavv">
      <Link to="/roadmap" class="nav-link ">Contest</Link>
      </li>
      <li class="nav-item naavv">
      <Link to="/post1" class="nav-link ">Courses</Link>
      </li>
      <li class="nav-item naavv">
      <Link to="/signin" class="nav-link">Quiz</Link>
      </li>
      <li class="nav-item naavv">
      <Link to="/a" class="nav-link ">SignUp</Link>
      </li>  
    </ul>
  </div>

</nav>






    </>
 )
}
export default Nav;




