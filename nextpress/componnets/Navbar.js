import Link from "next/link";

const Navbar = () => {
  return (
    <div>
        <div>
            <img src={< ></>} alt="Retrocket logo"/>
        </div>
        <div>
            <Link href="/">Home</Link>
            <Link href="Authors">Authors</Link>
        </div>
    </div>
  )
}

export default Navbar;