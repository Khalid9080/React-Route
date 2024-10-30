import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';
const LineChart = () => {
    const students = [
        { id: 1, name: "Alice", math: 85, science: 78, english: 90 },
        { id: 2, name: "Bob", math: 78, science: 85, english: 88 },
        { id: 3, name: "Charlie", math: 92, science: 89, english: 95 },
        { id: 4, name: "David", math: 88, science: 92, english: 85 },
        { id: 5, name: "Eve", math: 10, science: 68, english: 72 },
        { id: 6, name: "Frank", math: 10, science: 86, english: 91 },
        { id: 7, name: "Grace", math: 10, science: 73, english: 78 },
        { id: 8, name: "Hannah", math: 0, science: 79, english: 84 },
        { id: 9, name: "Ivy", math: 0, science: 94, english: 92 },
        { id: 10, name: "Jack", math: 69, science: 74, english: 71 }
    ];

    return (
        <div>
            <LChart width={500} height={400} data={students}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="math" stroke='green'  />
                <Line dataKey="science" type="monotone" stroke="red" />
                <Line dataKey="english" type="monotone" stroke="white" />
            </LChart>
        </div>
    );
};

export default LineChart;