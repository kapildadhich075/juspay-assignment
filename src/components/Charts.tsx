interface BarChartProps {
  isDarkMode: boolean;
}

export function ProjectionsChart({ isDarkMode }: BarChartProps) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const projections = [8, 15, 18, 12, 8, 20];
  const actuals = [10, 12, 16, 14, 10, 16];
  const yAxisSteps = [0, 5, 10, 15, 20];

  return (
    <div className="w-full h-72 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Projections vs Actuals
        </h3>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded ${isDarkMode ? 'bg-blue-400' : 'bg-blue-300'}`} />
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Projections</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'}`} />
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Actuals</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex gap-1 relative">
        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs" style={{ width: '30px' }}>
          {yAxisSteps.reverse().map((step, i) => (
            <span key={i} className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              {step}M
            </span>
          ))}
        </div>
        
        <div className="flex-1 flex items-end justify-around gap-2 ml-8 mb-6 relative">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className={`w-full h-px ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
            ))}
          </div>
          
          {months.map((month, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 relative z-10">
              <div className="w-full flex items-end justify-center gap-1 h-48">
                <div 
                  className={`w-5 rounded-t ${isDarkMode ? 'bg-blue-400' : 'bg-blue-300'}`}
                  style={{ height: `${(projections[i] / 20) * 100}%` }}
                />
                <div 
                  className={`w-5 rounded-t ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'}`}
                  style={{ height: `${(actuals[i] / 20) * 100}%` }}
                />
              </div>
              <span className={`text-xs mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                {month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RevenueChart({ isDarkMode }: BarChartProps) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const currentWeek = [12, 14, 16, 18, 20, 22];
  const previousWeek = [10, 12, 15, 17, 19, 21];
  const maxValue = 30;
  
  const svgHeight = 200;
  const svgWidth = 600;
  const padding = 40;
  const chartHeight = svgHeight - padding * 2;
  const chartWidth = svgWidth - padding * 2;
  const pointSpacing = chartWidth / (months.length - 1);

  const getY = (value: number) => {
    return svgHeight - padding - (value / maxValue) * chartHeight;
  };

  const getX = (index: number) => {
    return padding + index * pointSpacing;
  };

  const currentWeekPath = currentWeek
    .map((value, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(value)}`)
    .join(' ');

  const previousWeekPath = previousWeek
    .map((value, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(value)}`)
    .join(' ');

  return (
    <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full">
      {[0, 10, 20, 30].map((value) => {
        const y = getY(value);
        return (
          <g key={value}>
            <line
              x1={padding}
              y1={y}
              x2={svgWidth - padding}
              y2={y}
              stroke={isDarkMode ? '#374151' : '#E5E7EB'}
              strokeWidth="1"
              strokeDasharray="2,2"
            />
            <text
              x={padding - 10}
              y={y + 4}
              fill={isDarkMode ? '#9CA3AF' : '#6B7280'}
              fontSize="10"
              textAnchor="end"
            >
              {value}M
            </text>
          </g>
        );
      })}

      <path
        d={currentWeekPath}
        fill="none"
        stroke={isDarkMode ? '#A78BFA' : '#8B5CF6'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d={previousWeekPath}
        fill="none"
        stroke={isDarkMode ? '#A78BFA' : '#8B5CF6'}
        strokeWidth="2.5"
        strokeDasharray="5,5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function CircleChart({ isDarkMode }: BarChartProps) {
  const segments = [
    { 
      color: isDarkMode ? '#A78BFA' : '#C084FC', 
      percentage: 47.1, 
      label: 'Direct', 
      value: '$300.56' 
    },
    { 
      color: isDarkMode ? '#60A5FA' : '#3B82F6', 
      percentage: 24.1, 
      label: 'Sponsored', 
      value: '$154.02' 
    },
    { 
      color: isDarkMode ? '#86EFAC' : '#22C55E', 
      percentage: 21.2, 
      label: 'Affiliate', 
      value: '$135.18' 
    },
    { 
      color: isDarkMode ? '#7C3AED' : '#6366F1', 
      percentage: 7.7, 
      label: 'E-mail', 
      value: '$48.96' 
    },
  ];
  
  const legendOrder = [
    segments[0],
    segments[1],
    segments[2],
    segments[3],
  ];

  const circumference = 251.2;
  const gapSize = 2.5;
  const totalGaps = segments.length * gapSize;
  const availableCircumference = circumference - totalGaps;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-40 h-40">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {(() => {
            let gapOffset = 0;
            return segments.map((segment, i) => {
              const segmentLength = (segment.percentage / 100) * availableCircumference;
              const currentGapOffset = gapOffset + segmentLength;
              gapOffset += segmentLength + gapSize;
              
              return (
                <circle
                  key={`gap-${i}`}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={isDarkMode ? '#1F2937' : '#FFFFFF'}
                  strokeWidth="14"
                  strokeDasharray={`${gapSize} ${circumference}`}
                  strokeDashoffset={-currentGapOffset}
                  strokeLinecap="round"
                />
              );
            });
          })()}
          
          {(() => {
            let segmentOffset = 0;
            return segments.map((segment, i) => {
              const segmentLength = (segment.percentage / 100) * availableCircumference;
              const currentOffset = segmentOffset;
              segmentOffset += segmentLength + gapSize;

              return (
                <circle
                  key={`segment-${i}`}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={segment.color}
                  strokeWidth="12"
                  strokeDasharray={`${segmentLength} ${circumference}`}
                  strokeDashoffset={-currentOffset}
                  strokeLinecap="round"
                />
              );
            });
          })()}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`rounded-lg px-3 py-1.5 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <span className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              38.6%
            </span>
          </div>
        </div>
      </div>

      <div className="w-full space-y-2">
        {legendOrder.map((segment, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: segment.color }} />
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {segment.label}
              </span>
            </div>
            <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {segment.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorldMapChart({ isDarkMode }: BarChartProps) {
  const locations = [
    { city: 'New York', value: 72, x: 180, y: 80 },
    { city: 'San Francisco', value: 39, x: 80, y: 85 },
    { city: 'Sydney', value: 25, x: 320, y: 130 },
    { city: 'Singapore', value: 61, x: 300, y: 100 },
  ];
  const maxValue = 72;

  return (
    <div className="mb-4">
      <div className="w-full h-32 mb-4 flex items-center justify-center" style={{ minHeight: '128px' }}>
        <svg viewBox="0 0 400 180" className="w-full h-full" preserveAspectRatio="xMidYMid meet" style={{ minHeight: '128px' }}>
          <g fill={isDarkMode ? '#4B5563' : '#E5E7EB'} opacity={isDarkMode ? 0.5 : 0.4}>
            <path 
              d="M 50 40 Q 100 30, 150 45 L 160 80 Q 120 85, 80 90 L 60 70 Z" 
              stroke={isDarkMode ? '#6B7280' : '#D1D5DB'}
              strokeWidth="0.5"
            />
            <path 
              d="M 180 50 Q 220 45, 250 55 L 245 75 Q 220 80, 190 75 Z" 
              stroke={isDarkMode ? '#6B7280' : '#D1D5DB'}
              strokeWidth="0.5"
            />
            <path 
              d="M 260 50 Q 300 45, 340 60 L 335 90 Q 300 95, 270 85 Z" 
              stroke={isDarkMode ? '#6B7280' : '#D1D5DB'}
              strokeWidth="0.5"
            />
            <path 
              d="M 300 120 Q 320 115, 340 125 L 335 140 Q 320 145, 305 135 Z" 
              stroke={isDarkMode ? '#6B7280' : '#D1D5DB'}
              strokeWidth="0.5"
            />
            <path 
              d="M 120 100 Q 140 95, 160 105 L 155 130 Q 140 135, 120 130 Z" 
              stroke={isDarkMode ? '#6B7280' : '#D1D5DB'}
              strokeWidth="0.5"
            />
            <path 
              d="M 200 80 Q 220 75, 240 85 L 235 120 Q 220 125, 200 115 Z" 
              stroke={isDarkMode ? '#6B7280' : '#D1D5DB'}
              strokeWidth="0.5"
            />
          </g>

          {locations.map((location, i) => (
            <g key={i}>
              <circle
                cx={location.x}
                cy={location.y}
                r="8"
                fill={isDarkMode ? '#60A5FA' : '#3B82F6'}
                opacity="0.2"
              />
              <circle
                cx={location.x}
                cy={location.y}
                r="5"
                fill={isDarkMode ? '#60A5FA' : '#3B82F6'}
                opacity="0.6"
              />
              <circle
                cx={location.x}
                cy={location.y}
                r="3"
                fill={isDarkMode ? '#60A5FA' : '#3B82F6'}
                opacity="1"
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="space-y-3">
        {locations.map((location) => {
          const barWidth = (location.value / maxValue) * 100;
          return (
            <div key={location.city} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {location.city}
                </span>
                <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {location.value}K
                </span>
              </div>
              <div className={`h-1.5 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div
                  className={`h-full rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'}`}
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
