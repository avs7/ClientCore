import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Link
      to='/dashboard'
      className='flex justify-center text-2xl mt-2 font-sans text-sky-950'>
      Client Core
    </Link>
  )
}
