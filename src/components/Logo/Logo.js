import { Link } from 'react-router-dom';

export default function Logo({ sectionClass }) {
  return (
    <Link to='/' className={`logo ${sectionClass}`}></Link>
  )
}
