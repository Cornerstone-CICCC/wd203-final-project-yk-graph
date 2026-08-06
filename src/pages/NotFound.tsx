import { Link } from 'react-router-dom'
import { PATHS } from '../routes/paths'

export default function NotFound() {
  return (
    <div className="p-8">
      <h1 className="text-3xl">404 - Page Not Found</h1>
      <Link to={PATHS.home} className="underline">
        Back to Home
      </Link>
    </div>
  )
}
