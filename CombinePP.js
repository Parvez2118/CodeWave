import Nav from "./Nav";
import { Link } from "react-router-dom";
function CombinePP(){
    return(
        <>
             <Nav/>
 
 <ul class="nav justify-content-center bb" >
  <li class="nav-item hov">
    <Link to='/practice' class="nav-link"><h3 class="h4nav" >Basic</h3></Link>
   
  </li>
  <li class="nav-item hov">
  <Link to='/pp1' class="nav-link"><h3 class="h4nav">Medium</h3></Link>
   
  </li>
  <li class="nav-item hov ">
  <Link to='/pp2' class="nav-link"><h3 class="h4nav">Hard</h3></Link>
  </li>
</ul>
        </>
    )
}

export default CombinePP;