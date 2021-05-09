const data=async function()
{


  try{

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      const raw = await fetch("https://api.covid19india.org/v4/min/data.min.json", requestOptions)
      const res= await raw.json()
      console.log(res)
      return res
  }
  catch(e)
  {
      console.log(e)
  }


}





const mainFunction=async function()
{

  
}
mainFunction()

const apiCall=async function(){
    let response=''
    document.querySelector('.result').innerHTML=''

         response=await data()
        console.log(response)
        let inputValue=document.getElementById("myInput").value
        console.log(inputValue)
        let val=Object.entries(response)
        let secondVal=''
        let newTr=''
        console.log(val)
        val.forEach(function(innerArr){
          console.log(innerArr[1].districts)
            if(innerArr[1].districts[`${inputValue}`])
            {
            console.log(innerArr[1].districts[`${inputValue}`].total)
            newTr=` 
            <tr>
    <th>Districts</th>
    <th>Confirmed</th>
    <th>Deceased</th>
    <th>Recovered</th>
    <th>Tested</th>
    <th>Vaccinated</th>
  </tr>
            <tr>
        <td>${inputValue}</td>
        <td>${innerArr[1].districts[`${inputValue}`].total.confirmed}</td>
        <td>${innerArr[1].districts[`${inputValue}`].total.deceased}</td>
        <td>${innerArr[1].districts[`${inputValue}`].total.recovered}</td>
        <td>${innerArr[1].districts[`${inputValue}`].total.tested}</td>
        <td>${innerArr[1].districts[`${inputValue}`].total.vaccinated}</td>
      </tr>`
      document.querySelector('.result').innerHTML+=newTr
    //   result
            }
            // let val2=Object.entries(innerArr[1])
            // console.log(val2)
        })
}