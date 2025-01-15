import Link from 'next/link';

const Header = () => {
  return <header className="flex flex-col">
    <nav className="bg-white p-4">
      {/* <input type="checkbox" id="menuToggle" className="hidden" />
      <label htmlFor="menuToggle" className="cursor-pointer">☰</label> */}
      <div className="w-[1000px] mx-auto">
        <ul className="flex w-[100%] justify-between">
          {['People', 'Party', 'Registry', 'Place', 'Travel', 'Accommodations', 'RSVP', 'Photos'].map(item => (
            <li key={item} className="text-lg">
              <Link href={`#${item.toLowerCase()}`} className="text-black-600 hover:underline">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
}

export default Header