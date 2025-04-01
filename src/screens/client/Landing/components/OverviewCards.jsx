import WaterLevelCard from "@/components/WaterLevelCard";
import PumpControl from "@/components/PumpControl";
import LeakageStatus from "@/components/LeakageStatus";

export default function OverviewCards({ hasLeak, isPumpActive, handlePumpStatusChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <WaterLevelCard 
        tankName="Main Water Tank"
        currentLevel={hasLeak ? 180 : 650}
        capacity={1000}
        unit="liters"
      />
      
      <PumpControl 
        pumpId="PUMP-001"
        initialStatus={isPumpActive}
        flowRate={isPumpActive ? 12.5 : 0}
        lastActivated={isPumpActive ? "Just now" : "3 hours ago"}
        onStatusChange={handlePumpStatusChange}
      />
      
      <LeakageStatus 
        hasLeak={hasLeak}
        leakConfidence={87}
        leakLocation="Main Pipeline"
        detectedAt="2 minutes ago"
      />
    </div>
  );
}
