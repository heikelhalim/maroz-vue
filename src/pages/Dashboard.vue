<template>
   <div>
      <div class="md-layout md-gutter">
         <div v-for="(item,index) in productionState" :key="index" class="md-layout-item md-size-20">
            <stats-card :header-color="item.color">
               <template slot="header">
                  <div class="card-icon">
                     <md-icon>{{item.icon}}</md-icon>
                  </div>
                  <p class="category">{{item.name}}</p>
                  <h3 class="title">{{item.value}}
                  </h3>
               </template>

               <template slot="footer">
                  <div class="stats">
                     <md-icon>update</md-icon>
                     Just Updated
                  </div>
               </template>
            </stats-card>
         </div>
      </div>

      <chart-card header-animation="false" :chart-data="colouredLineChart.data"
         :chart-options="colouredLineChart.options" chart-type="Line" header-icon chart-inside-content no-footer
         background-color="blue">
         <template slot="chartInsideHeader" class="chartJualan">
            <div class="card-icon">
               <md-icon>timeline</md-icon>
            </div>
            <h4 class="title">
               Coloured Line Chart
               <small> - Rounded</small>
            </h4>
         </template>
      </chart-card>
   </div>
</template>

<script>
   import {
      StatsCard,
      ChartCard,
   } from '@/components'
   export default {
      name: "Dashboard",
      components: {
         ChartCard,
         StatsCard,
      },
      data() {
         return {
             colouredLineChart: {
          data: {
            labels: [
              "'06",
              "'07",
              "'08",
              "'09",
              "'10",
              "'11",
              "'12",
              "'13",
              "'14",
              "'15"
            ],
            series: [
              [287, 480, 290, 554, 690, 690, 500, 752, 650, 900, 944],
              [217, 180, 245, 565, 490, 890, 600, 867, 950, 950, 994],
              [317, 280, 345, 465, 590, 690, 700, 867, 910, 980, 964]
            ]
          },
          options: {
            lineSmooth: this.$Chartist.Interpolation.cardinal({
              tension: 10
            }),
            axisY: {
              showGrid: true,
              offset: 40
            },
            axisX: {
              showGrid: false
            },
            low: 0,
            high: 1000,
            showPoint: true,
            height: "300px"
          }
        },
        // DERAF,HANTAR,TEMPAHAN TERKINI,JAHITAN,BUTANG,SULAM,OC,PACKING
        productionState: [{
            name: "DERAF",
            value: 8,
            color: "blue",
            icon: "drafts"
          },
          {
            name: "HANTAR",
            value: 12,
            color: "blue",
            icon: "local_shipping"
          },
          {
            name: "JAHITAN",
            value: 56,
            color: "blue",
            icon: "local_offer"
          },
          {
            name: "TEMPAHAN TERKINI",
            value: 23,
            color: "blue",
            icon: "new_releases"
          },
          {
            name: "BUTANG",
            value: 11,
            color: "blue",
            icon: "fiber_smart_record"
          },
          {
            name: "SULAM",
            value: 67,
            color: "blue",
            icon: "scatter_plot"
          }, {
            name: "OC",
            value: 67,
            color: "blue",
            icon: "scatter_plot"
          }, {
            name: "PACKING",
            value: 7,
            color: "blue",
            icon: "scatter_plot"
          }
        ],
         }
      },
   }
</script>

<style>

</style>