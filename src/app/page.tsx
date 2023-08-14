import { FeaturedPost } from "@/components/FeaturedPost";
import { OtherPost } from "@/components/OtherPost";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <>
      <Profile />
      <FeaturedPost />
      <OtherPost />
    </>
  );
}
