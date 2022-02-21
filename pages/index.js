import Head from 'next/head'
import Header from '../components/Header.js'
import Sidebar from '../components/Sidebar.js'
import Feed from '../components/Feed.js'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Phacebook</title>
        <link rel="icon" href="../assets/footsteps2.ico"/>
      </Head>
      <Header />
      <main className="flex">
          <Sidebar />
          <Feed />
      </main>
      <div>
        <Link href="pig1">
        <a>pig1</a>
        </Link>
        <h2>pig2</h2>
        <h2>pig4</h2>
        <h2>wolf</h2>
      </div>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  )
}
