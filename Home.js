import React from 'react';
import '../App.css';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import Nav from './Nav';
function Home(){
    return(
        <>
       <Nav></Nav>
      


  <div style={{backgroundColor:"#262626",color:"white"}}>
    <div style={{marginBottom:100+"px"}} id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
  
  <div class="carousel-indicators">
    <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" class="active"
      aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1"
      aria-label="Slide 2"></button>
    <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2"
      aria-label="Slide 3"></button>
  </div>

 
  <div class="carousel-inner">
    
    <div class="carousel-item active">
      <img src="https://quotefancy.com/media/wallpaper/3840x2160/2000881-Joel-Spolsky-Quote-It-s-harder-to-read-code-than-to-write-it.jpg" class="d-block w-100"
        alt="Sunset Over the City" />
    </div>

  
    <div class="carousel-item">
      <img src="https://i.pinimg.com/originals/97/17/f5/9717f587fbe2819fe61fd1f6d09d0358.jpg" class="d-block w-100"
        alt="Canyon at Nigh" />
    </div>

   
    <div class="carousel-item">
      <img src="https://quotefancy.com/media/wallpaper/3840x2160/2000910-Joel-Spolsky-Quote-Good-software-like-wine-takes-time.jpg" class="d-block w-100"
        alt="Cliff Above a Stormy Sea" />
    </div>
  </div>
 
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample"
    data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample"
    data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="card" style={{marginLeft:150+"px",marginRight:150+"px",display:"flex",backgroundColor:"#262626",color:"white"}}>
  <div class="card-header"><h1>🚀Let's Code...</h1></div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>CodeWave is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews. Create Account Start Exploring Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your ….</p>
     
    </blockquote>
  </div>
</div>
<center>
<div class="card" style={{backgroundColor:"#262626",color:"white",marginTop:50+"px"}}>
<center>
  <div class="card-body un">
   <h2><span>📚Courses</span></h2>
  </div>
  </center>
</div>
</center>
<div class="row row-cols-1 row-cols-md-2 g-4" style={{marginTop:20+"px",marginLeft:180+"px",marginRight:180+"px"}}>
  <div class="col">
    <div class="card hov">
      <img src="https://codelearn.io/CodeCamp/CodeCamp/Upload/Course/e0a85ff6c0c64720ad582bdec3741cd1.jpg" class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body"   style={{backgroundColor:"black",color:"white"}}>
        <h3>Algorithms and Data Structures</h3>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card hov">
      <img src="https://codelearn.io/CodeCamp/CodeCamp/Upload/Course/8396de4f1f30479aac948a0ac0ca22da.jpg" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body"  style={{backgroundColor:"black",color:"white"}}>
        <h3>Advance Algorithms</h3>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card hov">
      <img src="https://cdn.educba.com/academy/wp-content/uploads/2019/03/what-is-system-design.jpg" class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body"  style={{backgroundColor:"black",color:"white"}}>
        <h3>System Design for Beginners</h3>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card hov">
      <img src="https://www.techfry.com/images/articles/php/object-oriented-programming.jpg" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body"  style={{backgroundColor:"black",color:"white"}}>
        <h3>Object-Oriented Design</h3>
      </div>
    </div>
  </div>
</div>
<center>
<div class="card" style={{backgroundColor:"#262626",color:"white",marginTop:50+"px"}}>
<center>
  <div class="card-body un">
   <h2><span>📝Lessons</span></h2>
  </div>
  </center>
</div>
</center>
<div class="row row-cols-1 row-cols-md-2 g-4" style={{marginTop:20+"px",marginLeft:280+"px",marginRight:280+"px"}}>
  <div class="col">
    <div class="card hov">
      <img src="https://kinsta.com/wp-content/uploads/2020/08/html-vs-css.png" class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body"   style={{backgroundColor:"black",color:"white"}}>
        <h3><fahtml5/>Html/CSS</h3>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card hov">
      <img src="https://media.sketchfab.com/models/1b277fc32bbc451fa6f40e298996ba91/thumbnails/1c9c06b1fa3c4aaaa94a70bc7bfc3c7e/d369fbc48d5b479bb657791e4026ca34.jpeg" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body"  style={{backgroundColor:"black",color:"white"}}>
        <h3>C++</h3>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card hov">
      <img src="https://assets-global.website-files.com/606a802fcaa89bc357508cad/61143444834cd54b9b0a88b3_2.png" class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body"  style={{backgroundColor:"black",color:"white"}}>
        <h3>JavaScript</h3>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card hov">
      <img src="https://th.bing.com/th/id/OIP.lT2MFAkuTPhZW__tqbkF1wHaEo?pid=ImgDet&rs=1" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body"  style={{backgroundColor:"black",color:"white"}}>
        <h3>Java</h3>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card hov">
      <img src="https://th.bing.com/th/id/OIP.KVUgc1olTPvjmMml8sbywwHaDh?pid=ImgDet&rs=1" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body"  style={{backgroundColor:"black",color:"white"}}>
        <h3>React JS</h3>
      </div>
    </div>
  </div>
  
  <div class="col">
    <div class="card hov">
      <img src="https://qph.fs.quoracdn.net/main-qimg-7491ebc88a52095de31b9d4d8c3170a6" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body"  style={{backgroundColor:"black",color:"white"}}>
        <h3>Python</h3>
      </div>
    </div>
  </div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<MDBFooter className='text-center text-white' style={{backgroundColor:"#262626",color:"white"}}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'black' }}>
        © 2023 Copyright:
        <a className='text-white'>
          Let's Code
        </a>
      </div>
    </MDBFooter>
      </div>

      </>
    )
}
export default Home;