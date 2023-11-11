import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout(props) {const router = useRouter();
router.push('/'); // navigate to the home route "/"
  return (
    <>
      <h1>Pages / Routing in Next.js</h1>
      <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/dashboard">Dashboard</Link> | <Link href="/dashboard/preferences">Dashboard Preferences</Link>
      <hr />
      <br />
      {props.children}
      <br />
    </>
  );
}