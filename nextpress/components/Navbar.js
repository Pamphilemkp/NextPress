import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
        <div>
            <Image src="https://retrocket.github.io/retrocketeer-api/images/avatars/1.jpg" alt="Retrocket logo" width={50} height={50} />
        </div>
        <div>
            <Link href="/">Home</Link>
            <Link href="Authors">Authors</Link>
        </div>
    </div>
  )
}

export default Navbar;