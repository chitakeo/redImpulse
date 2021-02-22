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
    
export default ({posts}) => {
    const [ session, loading ] = useSession()
    console.log(posts.length);
    var name = [];
    var email = [];
    var body = [];
    for (let i = 0; i < posts.length; i++){
      name.push(<h1>{posts[i].name}</h1>);
      email.push(<h1>{posts[i].email}</h1>);
      body.push(<h1>{posts[i].body}</h1>);
    }
    function clickHandler() {
      if (signOut('credentials') != null)
      Router.push('/home')
      
      return
    }
    return (
      
      <div style={{textAlign: "center"}}>
        <h1>管理者ページ</h1>
        <h2>{posts[0].name}</h2>
        
       
        <button onClick={clickHandler}>サインアウト</button>
        {name}
      </div>

    );
  }