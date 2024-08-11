import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Fish Farming</h1>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/fish-species'>Fish Species</Link>
      </nav>
    </div>
  )
}
