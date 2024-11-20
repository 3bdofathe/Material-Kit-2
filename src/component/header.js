/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Header(){
    return(
        <div>
    <nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand txt-kit ms-3" href="#">Material Kit 2</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item pe-4">
          <a class="nav-link p-2" href="#"><i class="fa-solid fa-file"></i> Pages</a>
        </li>
        <li class="nav-item pe-4">
          <a class="nav-link p-2" href="#"><i class="fa-solid fa-file-invoice"></i> Account</a>
        </li>
        <li class="nav-item pe-4">
          <a class="nav-link p-2" href="#"> <i class="fa-solid fa-puzzle-piece"></i> Sections</a>
        </li>
        <li class="nav-item pe-4">
          <a class="nav-link p-2" href="#"> <i class="fa-solid fa-folder"></i> Docs</a>
        </li>
        <li class="nav-item pe-3">
          <button class="buy">Buy Now</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}