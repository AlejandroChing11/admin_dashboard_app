import { Welcome } from "@/components";

export const metadata = {
  title: '¡Welcome to WePlot!',
  description: 'Welcome to WePlot, the best place to plot your data!',
};

export default function HomePage() {
  return (
    <div>
      <Welcome />
    </div>
  );
}