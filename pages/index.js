import {useEffect, useState} from 'react'

export default function Home() {
  const API_URL = process.env.API_URL
  const [entries,setEntries] = useState([])
  useEffect(()=>{
    fetch(API_URL, {method: 'GET'})
		.then(res => res.json())
		.then(results => {
      setEntries(results)
      let entries = results
      for (let i = 0; i < entries.length; i++) {
        var current = entries[i];
        if (current.allUsersScore.length > 0) {
          Highcharts.chart(`container-${i}`,{
            chart: {
              type: 'bar'
            },
            title: {
              text: ''
            },
            xAxis: {
              categories: current.allUsersScore.map((item) => item.user_name)
            },
            yAxis: {
              min: 0,
              title: {
                text: 'Total fruit consumption'
              }
            },
            plotOptions: {
              series: {
                stacking: 'normal'
              }
            },
            series: [{
              name: 'Scores',
              data: current.allUsersScore.map((item) => item.COUNT)
            }],
            legend: {
              display: false
            },
          });
        }
      } 
    })
  },[])
  
  return (
    <div className="index">
      <h1>Scores</h1>
      {
        entries.map((item,i)=>
          item.allUsersScore.length > 0 ? <div className="chars">
            <figure className="highcharts_figure">
              <div className="container"id={`container-${i}`}></div>
            </figure>
          </div> :null
        )
      }
    </div>
  )
}
