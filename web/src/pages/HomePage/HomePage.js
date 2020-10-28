import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>Mintbean</h1>
      <p>
        This is the home page
      </p>
      <nav>
        <ul>
          <li>
          <Link to={routes.home()}>Home</Link>
          </li>
          <li>
          <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default HomePage
