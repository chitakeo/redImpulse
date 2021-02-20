import Router from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'
import { check } from 'prettier'
import RegistrationForm from '../components/formik'

export default () => {
  const [ session, loading ] = useSession()
  
  async function clickHandler() {
    Router.push("/admin")
    return
}
  return (
    <div style={{textAlign: "center"}}>
      <h1>ホームページ</h1>
      <RegistrationForm />
      {session && (
        <>
          <button onClick={clickHandler}>管理者ページへ</button>
          <button onClick={signOut}>Sign out</button>
        </>
      )}
      {!session && (
        <>
          <button onClick={signIn}>Sign in</button>
        </>
      )}
    </div>
  );
}