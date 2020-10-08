import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
   negara:'Singapura',kematian: 2400, sembuh: 2400,
  },
  {
   negara: 'Malaysia', kematian: 1398, sembuh: 2210,
  },
  {
   negara: 'Indonesia', kematian: 9800, sembuh: 2290,
  },
  {
   negara: 'Filiphina',kematian: 3908, sembuh: 2000,
  },
  {
   negara: 'Thailand',kematian: 4800, sembuh: 2181,
  },
  {
   negara: 'Brunei',kematian: 3800, sembuh: 2500,
  },
  {
   negara: 'Myanmar',kematian: 4300, sembuh: 2100,
  },
];

const Graphic = () => {
  return(
    <div>
      <LineChart
        width={1000}
        height={500}
        data={data}
        margin={{
          top: 50, left: 200, right: 150,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="negara" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="kematian" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="sembuh" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}

export default Graphic