import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/layout.module.css';

const Layout = (props) => {
    const { title, description, children } = props
    const siteTitle = 'サンプル株式会社'