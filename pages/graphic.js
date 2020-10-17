import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { useEffect, useState } from "react"
import axios from "axios"
import dayjs from "dayjs"
import 'dayjs/locale/id'
import Navbar from '../components/Navbar';

const Graphic = (props) => {
  // create state
  const [data, setData] = useState([{ date: 0, dead: 0, recovered: 0 }])

  useEffect(() => {
    const fethcer = async () => {
      const res = await axios.get("https://api.covid19api.com/country/italy?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z");
      // console.log(res.data)

      const rawData = res.data

      const finalData = rawData.map(data => { return { date: dayjs(data.Date).format('D'), death: data.Deaths, recovered: data.Recovered } })
      setData(finalData)
    }
    fethcer()

  }, [])

  return (
    <>
      <div >
        <Navbar />
        {/* Desktop version */}
        <div className="sm:hidden md:hidden lg:flex">
          <ResponsiveContainer
            className="mx-auto mt-32 "
            width="90%"
            height={500}
          >
            <LineChart
              data={data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="death" stroke="red" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="recovered" stroke="green" />
            </LineChart>
          </ResponsiveContainer>
        </div>


        {/* Mobile version */}
        <div className="sm:flex md:hidden lg:hidden">
          <ResponsiveContainer
            className="mx-auto mt-32  "
            width="90%"
            height={500}
          >
            <LineChart
              data={data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="death" stroke="red" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="recovered" stroke="green" />
            </LineChart>
          </ResponsiveContainer>
        </div>


      </div>
    </>

  )
}

export default Graphic