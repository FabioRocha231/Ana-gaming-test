import { SportsResponseData } from '@/app/api/sports/route';
import { Events } from '@/components/events';
import { SideBar } from '@/components/SideBar';
export default async function Home() {
  const sports: SportsResponseData = await fetch(
    `${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/sports`
  )
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });

  if (!sports) {
    return (
      <div>Houve um erro ao buscar os dados tente novamente mais tarde</div>
    );
  }

  return (
    <div className="flex flex-row gap-2 justify-center h-screen">
      <SideBar sports={sports} />
      <Events />
    </div>
  );
}
