import { ClerkProvider } from "@clerk/nextjs";
import { FloatingSupport } from "@/components/shared/floatingSupport";
import Header from "@/components/shared/appHeader";
import Sidebar from "@/components/shared/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col relative">
          {/* Header */}
          <Header />

          {/* Main Page Content */}
          <div className="flex-1 w-full overflow-auto">
            <div className="p-6 md:p-8 lg:p-10 w-full mt-[72px]">
              {/* Adjusted margin for fixed header */}
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Floating Support */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <FloatingSupport supportEmail="agulonyemicheal9@gmail.com" />
      </div>
    </ClerkProvider>
  );
}
