import LeftSideBar from '../src/app/components/LeftSideBar';
import HomeIntro from '../src/app/components/HomeIntro';
import Footer from '../src/app/components/Footer';
import Header from '../src/app/components/Header';
const GroupChat = () => {
  return (
    <>
      {' '}
      <Header />
      <LeftSideBar />
      <h1>You are in the group chat page !</h1>
      <Footer />
    </>
  );
};
export default GroupChat;
