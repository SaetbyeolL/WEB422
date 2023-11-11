import Link from 'next/link';

export default function Layout(props) {
    import { useRouter } from 'next/router';

export default function SomePage() {
  const router = useRouter();

  useEffect(() => {
    // Your logic to conditionally redirect to the home page
    if (/* Some condition */) {
      router.push('/');
    }
  }, []);
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