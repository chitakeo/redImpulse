import Router from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'
import prisma from "../lib/prisma";
import { GetServerSideProps } from "next";
import { strict } from 'assert';


export async function getStaticProps() {
  const posts = await prisma.form.findMany();
  return {
    props : { posts }
  }
}

const Hello = ({name, email, body}) => (
  <div>
   <p> {name} {email} {body}</p>
  </div>
);
    
export default ({posts}) => {
    const [ session, loading ] = useSession();
    
    function clickHandler() {
      if (signOut('credentials') != null)
      Router.push('/home')
      
      return
    }
    return (
      
      <div style={{textAlign: "center"}}>
        <h1>管理者ページ</h1>
        {posts.map((item) => (
          <Hello id={item.id} name={item.name} email={item.email} body={item.body} key={item.id}/>
        ))}

        <button onClick={clickHandler}>サインアウト</button>
        
      </div>

    );
  }