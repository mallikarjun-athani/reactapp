
import './layout.css'

function Layout() {
  return (
    <div className="page-layout">

      {/* Top Navbar */}
      <header className="navbar-area">
        <h3>Navbar</h3>
      </header>

      {/* Main layout */}
      <div className="layout-body">

        {/* Left Sidebar */}
        <aside className="sidebar-area">
          <h3>Sidebar</h3>
          <p>Sidebar content goes here.</p>
        </aside>

        {/* Center Content */}
        <main className="main-area">
          <h2>Main Content</h2>
          <p>
            Welcome to my React application.
            Add your page content here.
          </p>
        </main>

        {/* Right Ads */}
        <aside className="ads-area">
          <h3>Ads</h3>
          <p>Advertisement content</p>
        </aside>

      </div>

      {/* Bottom Footer */}
      <footer className="footer-area">
        <h3>Footer</h3>
        <p>© 2026 My React App</p>
      </footer>

    </div>
  )
}

export default Layout
