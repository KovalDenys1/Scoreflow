import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary font-sans">
      <Navbar />
      <main className="flex-grow max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-surface border-t border-border py-6 mt-auto">
        <div className="max-w-[1200px] mx-auto px-4 text-center text-text-muted text-sm">
          &copy; {new Date().getFullYear()} Scoreflow. Built for NBA fans.
        </div>
      </footer>
    </div>
  );
}
