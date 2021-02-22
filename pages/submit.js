import Router from 'next/router'
import prisma from "../lib/prisma";
import { GetServerSideProps } from "next";

export async function getServerSideProps(context) {
    const { query } = context
    const createUser = await prisma.form.create({ data: {
        name: query.name,
        email: query.email,
        body: query.text,
    } })
    return {
      props : {}
    }
}

export default () => {
    function clickHandler() {
      Router.push('/home')
      return
    }
    return (
      <div style={{textAlign: "center"}}>
        <h1>送信しました</h1>
        <button onClick={clickHandler}>戻る</button>
      </div>
    );
  }