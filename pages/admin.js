import Router from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'

export default () => {
    const [ session, loading ] = useSession()
    
    function clickHandler() {
      if (signOut('credentials') != null)
      Router.push('/home')
      return
    }
    return (
      <div style={{textAlign: "center"}}>
        <h1>管理者ページ</h1>
        <button onClick={clickHandler}>サインアウト</button>
      </div>
    );
  }