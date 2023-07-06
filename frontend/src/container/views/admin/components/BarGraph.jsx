import React from 'react'
import { BarChart, ResponsiveContainer, XAxis , YAxis , Legend , Tooltip, Bar } from 'recharts'
const BarGraph = () => {

    const data =[
        {
            name:'HOI',
            AvgScore:'4.12',
        },
        {
            name:'IEAC',
            AvgScore:'4.82',
        } ,
        {
            name:'Feedback',
            AvgScore:'1.12',
        }        
    ]

    return (

        <div>

            <ResponsiveContainer width={300} height={250}>
                <BarChart width={300} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis dataKey='AvgScore'/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="AvgScore" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default BarGraph
