import Link from 'next/link'

export default function Game() {
  return (
    <>
      <h1>対戦画面</h1>
      <h2>
        <Link href="/">
          <a>トップページに戻る</a>
        </Link>
      </h2>
    </>
  )
}