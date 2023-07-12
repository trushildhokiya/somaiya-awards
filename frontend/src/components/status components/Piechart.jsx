import React, { useEffect,useState } from 'react'
import { Legend, Pie, PieChart, Tooltip, Cell, ResponsiveContainer } from 'recharts'
import axios from 'axios'
const Piechart = () => {
    const [counts, setCounts] = useState('');
    const loadDashboardData = () => {

        // all Counts
        axios.get('http://localhost:5001/admin/data/count/all', {
            headers: {
                'user_id': localStorage.getItem('user_id'),
                'x-access-token': localStorage.getItem('token'),
            }
        })
            .then((res) => {
                setCounts(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
        } 

    const data = [
        {
            group: "A",
            formsFilled: counts.group1,
        },
        {
            group: "B",
            formsFilled: counts.group2,
        },
        {
            group: "C",
            formsFilled: counts.group3,
        },
        {
            group: "D",
            formsFilled: counts.group4,
        },
    ]

    useEffect(()=>{
        loadDashboardData()
    })
    const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50'];
    return (
        <div>
            <ResponsiveContainer  width={300} height={350}>
            <PieChart width={300} height={350} >
                <Pie data={data} dataKey={'formsFilled'} nameKey='group' fill="#8884d8" label>
                    {
                        data.map((entry, index) => <Cell fill={colors[index]} />)
                    }
                </Pie>
                {console.log(counts.group3)}
                <Legend />
                <Tooltip />
            </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Piechart
