
interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
  showPercentage?: boolean;
}

const ProgressBar = ({ current, total, label, showPercentage = true }: ProgressBarProps) => {
  const percentage = Math.min((current / total) * 100, 100);
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-700">{label}</span>
          {showPercentage && (
            <span className="text-sm font-bold text-game-primary">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
        <div 
          className="progress-bar h-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {!showPercentage && (
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-slate-500">{current} / {total}</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
