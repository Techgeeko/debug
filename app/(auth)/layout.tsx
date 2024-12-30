import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Authenticating | Please wait...",
    description: "Securely sign in or create a new account to access your personalized experience. It only takes a moment!",
    icons: {
      icon: '/favicon.ico',
    },
  };

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-white">
            {children}
        </div>
    );
};

export default Layout;