export default async function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-sm text-gray-500">Stat Label</h4>
              <p className="text-2xl font-bold">Value</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Recent Applications */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-4">Recent Applications</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 border rounded-lg">
                  Application Card
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <button
                  key={i}
                  className="w-full p-3 border rounded-lg text-left"
                >
                  Action Item
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
