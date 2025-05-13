import { Navbar } from '@/components/NavBar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  if (!session) redirect('/');
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
