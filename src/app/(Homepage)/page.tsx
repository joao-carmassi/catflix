import ContainerBanner from './ContainerBanner';
import ContainerCard from './ContainerCards';

export default function Home() {
  return (
    <main className="bg-base-200 -z-20 min-h-svh">
      <ContainerBanner />
      <ContainerCard />
    </main>
  );
}
