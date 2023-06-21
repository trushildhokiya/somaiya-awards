import React from 'react'
import {LineChart , Line, XAxis, YAxis, Tooltip, Legend} from 'recharts'

const LineGraph = () => {

    const data = [
        { "date": "2023-01-01", "formsFilled": 7 },
        { "date": "2023-01-02", "formsFilled": 8 },
        { "date": "2023-01-03", "formsFilled": 8 },
        { "date": "2023-01-04", "formsFilled": 12 },
        { "date": "2023-01-05", "formsFilled": 20 },
        { "date": "2023-01-06", "formsFilled": 25 },
        { "date": "2023-01-07", "formsFilled": 22 },
        { "date": "2023-01-08", "formsFilled": 14 },
        { "date": "2023-01-09", "formsFilled": 18 },
        { "date": "2023-01-10", "formsFilled": 11 },
        { "date": "2023-01-11", "formsFilled": 13 },
        { "date": "2023-01-12", "formsFilled": 17 },
        { "date": "2023-01-13", "formsFilled": 22 },
        { "date": "2023-01-14", "formsFilled": 19 },
        { "date": "2023-01-15", "formsFilled": 16 }
      ];

      
  return (
    <div className='flex justify-center p-5 rounded-lg  bg-[#FDFBFA]'>
      <LineChart width={800} height={250} data={data} margin={{ top: 5,  bottom: 5 }}>
      <XAxis dataKey='date' />
      <YAxis />
      <Tooltip />
        <Line type={'linear'} dataKey="formsFilled" stroke='#0c64f2' strokeWidth={2} />
      </LineChart>
    </div>
  )
}

export default LineGraph
