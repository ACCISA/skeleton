import { Navbar, Button } from "flowbite-react";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const auth = useAuthUser();
  const signOut = useSignOut()
  // useNavigate
  


  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/" className="gap-2">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg> */}

        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          DB Manage
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {auth() && (
          <Navbar.Collapse className="mt-3 items-center justify-center">
            <Navbar.Link className="cursor-pointer" onClick={signOut}>Logout</Navbar.Link>
          </Navbar.Collapse>
        )}

        {!auth() && <Button>Get started</Button>}
        {auth() && auth().data.root && (
          <Link to={"/root"}>
            <Button className="ml-2">Admin Panel</Button>
          </Link>
        )}
        {auth() && !auth().data.root && (
          <Link to={"/dashboard"}>
            <Button className="ml-2">Dashboard</Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}