// rafce
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <a className="navbar-brand">ไอทีจีเนียส</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link">หน้าหลัก</a></li>
            <li className="nav-item"><a className="nav-link">เกี่ยวกับเรา</a></li>
            <li className="nav-item"><a className="nav-link">ติดต่อ</a></li>
            <li className="nav-item"><a className="nav-link">ราคา</a></li>
            <li className="nav-item"><a className="nav-link">ถามตอบ</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" role="button" data-bs-toggle="dropdown" aria-expanded="false">บลอก</a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                <li><a className="dropdown-item">หน้าหลักบลอก</a></li>
                <li><a className="dropdown-item">บลอกโพสต์</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" role="button" data-bs-toggle="dropdown" aria-expanded="false">ผลงาน</a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                <li><a className="dropdown-item">รวมผลงาน</a></li>
                <li><a className="dropdown-item">รายละเอียดผลงาน</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar