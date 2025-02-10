import LogoutButton from "@/components/LogoutButton";

export default async function DashboardPage() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <LogoutButton />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center gap-4"></div>
      </div>
    </div>
  );
}
