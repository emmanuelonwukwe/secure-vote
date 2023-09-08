import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className='text-center'>
      <h1>404</h1>
      <p>Page not found <Link to='/' className="text-slate-400">Back to Home</Link></p>
    </div>
  )
}
