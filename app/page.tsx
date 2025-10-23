import { LayoutToggle } from '@/components/layout-toggle';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ThemeToggle />
      <LayoutToggle />
    </div>
  );
}
