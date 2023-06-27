import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-5">
        <Image src='/images/teams/male-team.jpg' alt="male-team" width={800} height={300} />
      </div>
      <div>
        <Image src='/images/teams/mix-team.jpg' alt="mix-team" width={500} height={300} />
      </div>
    </div>
  );
}
