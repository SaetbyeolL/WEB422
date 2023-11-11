import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hello from '@/components/Hello';
import Clock from '@/components/Clock';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Hello />,
    <Clock locale="en-CA" />
  )
}
