export default function Layout(props) {
  return (
    <>
      <h1>Pages / Routing in Next.js</h1>
      <a href="/">Home</a> | <a href="/about">About</a> | <a href="/dashboard">Dashboard</a> | <a href="/dashboard/preferences">Dashboard Preferences</a>
      <hr />
      <br />
      {props.children}
      <br />
    </>
  );
}