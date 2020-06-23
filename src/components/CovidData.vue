<template>
  <div class="hello">
    <p>
      <b>COUNTRY: </b>{{this.country}}
    </p>
    <p>
      <b>CONFIRMED: </b>{{this.covid.Confirmed}}
    </p>
    <p>
      <b>DEATHS: </b>{{this.covid.Deaths}}
    </p>
    <p>
       <b> RECOVERED: </b>{{this.covid.Recovered}}  
    </p>
    <p></p>
     <button style="font-size: 20px;">Pesquisar</button>
  </div>
 
</template>

<script>
export default {
  name: "CovidData",
  props: {
    country:String,
    Date: Date,
  },
  data(){
    return{
      covid:{}
    }
  },
async created(){
  const response= await fetch('https://api.covid19api.com/all')
  const myData = await response.json()

  this.covid = myData.Countries.find(result => result.Country == this.country)
  console.log(this.covid)
  
}

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>