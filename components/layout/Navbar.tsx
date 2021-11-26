import Link from 'next/link'

const menus = [
  { label: 'PROFILE', link: '/profile' },
  { label: 'JOBS', link: '/jobs' },
  { label: 'PROFESSIONAL NETWORK', link: '/network' },
  { label: 'LOUNGE', link: '/lounge' },
  { label: 'SALARY', link: '/salary' },
]

function Navbar() {
  return <nav className="fixed w-full flex justify-between items-center py-4 px-2 bg-white">
    <div className="text-lg font-bold text-blue-500">HEALTH EXPLORER</div>
    <div className="hidden md:flex justify-between items-center">
      {menus.map((menu, index) => (<Link href={menu.link} key={index}>
        <div className="font-bold text-md px-2 cursor-pointer">{menu.label}</div>
      </Link>))}
    </div>
    <div className="flex justify-between items-center space-x-2">
      <button className="hidden md:block font-bold cursor-pointer border rounded-md border-blue-500 text-blue-500 px-3 py-2">CREATE JOB</button>
      <div className="relative bg-blue-500 rounded-full flex justify-center items-center text-lg w-12 h-12 text-white">
        JD
        <div className="absolute -top-2 -right-2 bg-red-400 w-8 h-8 flex justify-center items-center border-4 rounded-full border-white text-sm">2</div>
      </div>
      <Link href="/logout">
        <div className="hidden md:block font-bold">LOGOUT</div>
      </Link>
    </div>
  </nav>
}

export default Navbar;