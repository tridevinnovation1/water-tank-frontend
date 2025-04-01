import { Droplet, AlertTriangle, Activity, History } from "lucide-react";

const SummaryStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      <div className="glass rounded-xl p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">Avg. Daily Usage</h3>
            <p className="text-2xl font-semibold mt-1">245 L</p>
          </div>
          <div className="h-9 w-9 rounded-full flex items-center justify-center bg-water-100">
            <Droplet className="h-5 w-5 text-water-600" />
          </div>
        </div>
        <div className="text-xs text-muted-foreground mt-2">
          +12% from last week
        </div>
      </div>
      
      <div className="glass rounded-xl p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">Leak Incidents</h3>
            <p className="text-2xl font-semibold mt-1">0</p>
          </div>
          <div className="h-9 w-9 rounded-full flex items-center justify-center bg-alert-success/10">
            <AlertTriangle className="h-5 w-5 text-alert-success" />
          </div>
        </div>
        <div className="text-xs text-muted-foreground mt-2">
          No leaks detected this month
        </div>
      </div>
      
      <div className="glass rounded-xl p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">Pump Runtime</h3>
            <p className="text-2xl font-semibold mt-1">3.2 hrs</p>
          </div>
          <div className="h-9 w-9 rounded-full flex items-center justify-center bg-water-100">
            <Activity className="h-5 w-5 text-water-600" />
          </div>
        </div>
        <div className="text-xs text-muted-foreground mt-2">
          Today's total operational time
        </div>
      </div>
      
      <div className="glass rounded-xl p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">System Health</h3>
            <p className="text-2xl font-semibold mt-1">98%</p>
          </div>
          <div className="h-9 w-9 rounded-full flex items-center justify-center bg-alert-success/10">
            <History className="h-5 w-5 text-alert-success" />
          </div>
        </div>
        <div className="text-xs text-muted-foreground mt-2">
          System operating normally
        </div>
      </div>
    </div>
  );
};

export default SummaryStats;
