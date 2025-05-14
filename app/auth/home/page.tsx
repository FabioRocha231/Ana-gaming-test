import { SportsResponseData } from '@/app/api/sports/route';
import { Events } from '@/components/events';
import { SideBar } from '@/components/SideBar';
import { Session } from 'next-auth';

type Props = {
  session: Session | null;
};
export default async function Home() {
  const sports: SportsResponseData = await fetch(
    'http://localhost:3000/api/sports'
  )
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });
  return (
    <div className="flex flex-row items-center justify-center h-screen max-w-5xl">
      <SideBar sports={sports} />
      <Events />
    </div>
  );
}
