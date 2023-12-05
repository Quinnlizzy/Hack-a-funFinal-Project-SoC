import Link from 'next/link';

const LeftSideBar = () => {
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/">
            <li>Community chat</li>
          </Link>
          <Link href="/teamchat">
            <li>Team chat</li>
          </Link>
          <Link href="/projectsubmission">
            <li>Project submissions </li>
          </Link>
          <Link href="/pastprojects">
            <li>Past projects </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default LeftSideBar;
