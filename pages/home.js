// これがリンクAPIです
import Link from 'next/link'

export default () => (
    <div>
      <p>This is the home page</p>
      <Link href="/admin">
        <a>管理者ページへ</a>
      </Link>
    </div>
  )