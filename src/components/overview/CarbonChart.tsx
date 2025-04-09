import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import TimeSelector from './TimeSelector';

interface DataPoint {
  time: string;
  carbonIn: number;
  carbonOut: number;
}

interface CarbonChartProps {
  data: DataPoint[];
}

const CarbonChart: React.FC<CarbonChartProps> = ({ data = [] }) => {
  const [timeRange, setTimeRange] = useState('week');

  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
    // Here you would typically fetch new data based on the selected time range
    console.log('Time range changed to:', range);
  };

  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    colors: ['#9333EA', '#7C3AED'],
    grid: {
      borderColor: '#f1f1f1',
      row: {
        colors: ['transparent', 'transparent'],
        opacity: 0.5
      }
    },
    markers: {
      size: 4,
      strokeWidth: 0,
      hover: {
        size: 6
      }
    },
    xaxis: {
      categories: data.map(d => d.time),
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '12px'
        },
        rotate: -45,
        rotateAlways: true
      }
    },
    yaxis: {
      title: {
        text: 'CO₂ Level (ppm)',
        style: {
          color: '#6B7280',
          fontSize: '12px'
        }
      },
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '12px'
        }
      }
    },
    tooltip: {
      enabled: true,
      shared: true,
      theme: 'dark',
      x: {
        show: true,
        format: 'HH:mm'
      },
      y: {
        formatter: function(val: number) {
          return val.toFixed(0) + " ppm";
        }
      },
      marker: {
        show: true,
      },
      style: {
        fontSize: '12px'
      }
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      fontSize: '12px'
    }
  };

  const series = [
    {
      name: 'Carbon In',
      data: data.map(d => d.carbonIn || 0)
    },
    {
      name: 'Carbon Out',
      data: data.map(d => d.carbonOut || 0)
    }
  ];

  const avgCarbonIn = data.reduce((acc, curr) => acc + (curr.carbonIn || 0), 0) / data.length;
  const avgCarbonOut = data.reduce((acc, curr) => acc + (curr.carbonOut || 0), 0) / data.length;

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4 md:p-6">
      <div className="flex justify-between mb-5">
        <div className="grid gap-4 grid-cols-1">
          <div>
            <h5 className="inline-flex items-center text-gray-500 leading-none font-normal mb-2">
              Avg CO₂
              <svg className="w-3 h-3 text-gray-400 hover:text-gray-900 cursor-pointer ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
              </svg>
            </h5>
            <div className="space-y-1">
              <p className="text-gray-900 text-base leading-none font-bold">In: {avgCarbonIn.toFixed(0)} ppm</p>
              <p className="text-gray-900 text-base leading-none font-bold">Out: {avgCarbonOut.toFixed(0)} ppm</p>
            </div>
          </div>
        </div>
        <TimeSelector onTimeRangeChange={handleTimeRangeChange} color="#9333EA" />
      </div>
      
      <div id="carbon-chart">
        <ReactApexChart
          options={chartOptions}
          series={series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default CarbonChart;
