import { Session } from 'next-auth';

type Props = {
  session: Session | null;
};
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      Hellow
    </div>
  );
}
