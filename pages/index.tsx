import type { GetServerSideProps } from "next";
import prisma from "../lib/prisma";

type Props = {
  count: number;
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const count = await prisma.form.count();
  return {
    props: {
      count,
    },
  };
};

export default function Index(props: Props) {
  return <div>user count: {props.count}</div>;
}