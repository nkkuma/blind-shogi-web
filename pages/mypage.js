import Link from 'next/link'

export default function MyPage() {
  return (
    <>
      <h1>マイページ</h1>
      <h2>
        <Link href="/">
          <a>トップページに戻る</a>
        </Link>
      </h2>
    </>
  )
}