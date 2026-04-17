import React, { useContext } from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { TimeLineContext } from '../context/TimeLineDataProvider';

const COLORS = ["#3B82F6", "#10B981", "#F59E0B"];

const StatsCharts = () => {
    const { timeLineAllData } = useContext(TimeLineContext);

    const data = [
        {
            name: "Call",
            value: timeLineAllData.filter(
                (item) => item.connectionType === "Call"
            ).length,
        },
        {
            name: "Text",
            value: timeLineAllData.filter(
                (item) => item.connectionType === "Text"
            ).length,
        },
        {
            name: "Vedio",
            value: timeLineAllData.filter(
                (item) => item.connectionType === "Vedio"
            ).length,
        },
    ];

    if (timeLineAllData.length === 0) {
        return (
            <div className="w-full h-75 bg-white rounded-lg p-4 shadow mt-10 flex items-center justify-center">
                <h1 className="text-gray-400 text-2xl font-bold">No interaction data available</h1>
            </div>
        );
    }

    return (
        <div className="w-full h-75 bg-white rounded-lg p-4 shadow mt-10">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={100}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index]} />
                        ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StatsCharts;