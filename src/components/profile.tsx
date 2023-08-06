import Image from "next/image";
import Link from "next/link";
import me from "public/images/me.jpg";
const Profile = () => {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        width={400}
        height={400}
        src={me}
        alt="me"
      />
      <h2 className="text-3xl font-bold mt-2">Hi Im SukHyun</h2>
      <h3 className="text-xl font-semibold">Front-end Engineer</h3>
      <div>Normal Developer</div>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-md py-1 px-4">
          Contact Me
        </button>
      </Link>
    </section>
  );
};

export default Profile;
