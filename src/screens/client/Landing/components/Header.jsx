
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function DashboardHeader({ 
  hasLeak, 
  toggleLeakSimulation,
  onRefresh 
}) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-semibold">Water Management Dashboard</h1>
        <p className="text-muted-foreground mt-1">Monitor and control your water system</p>
      </div>
      <div className="flex items-center">
        <button 
          variant="secondary" 
          className="mr-2 flex items-center"
          onClick={onRefresh}
        >
          <RefreshCw className="mr-1.5 h-4 w-4" />
          <span>Refresh</span>
        </button>
        <button 
          variant="default"
          className={hasLeak ? "bg-alert-error hover:bg-alert-error/90" : ""}
          onClick={toggleLeakSimulation}
        >
          <AlertTriangle className="mr-1.5 h-4 w-4" />
          <span>{hasLeak ? "Fix Leak" : "Simulate Leak"}</span>
        </button>
      </div>
    </div>
  );
}
