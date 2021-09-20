<template>

  <div class="page-container md-layout-row wrapper" 
    :class="[
      { 'nav-open': $sidebar.showSidebar },
      { rtl: false }
    ]"
  >
    <div>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Lama Utama</span>
      </md-app-toolbar>

      <side-bar>
        <template slot="links">
         <div v-for="(menu,index) in menuList" :key="index">
            <sidebar-item :link="{
            name: menu.name,
            icon: menu.icon,
            path: menu.path,
          }"> 
            </sidebar-item>
          </div>
       
       <!-- <sidebar-item :link="{
            name: 'dashboard',
            icon: 'dashboard',
            path: '/dashboard'
          }">
            </sidebar-item> -->
        </template>
      </side-bar>

      <div class="main-panel">
        <top-navbar></top-navbar>
        <fixed-plugin :sidebarMini.sync="sidebarMini">
        </fixed-plugin>
        <div :class="{ content: true }" @click="toggleSidebar">
          <zoom-center-transition :duration="200" mode="out-in">
            <!-- your content here -->
           <router-view></router-view>
          </zoom-center-transition>
        </div>
        <content-footer></content-footer>
      </div>

    </div>
  </div>
</template>

<script>
  import {
    StatsCard,
    ChartCard,
  } from '@/components'
  export default {
    name: 'Home',
    data() {
      return {
        sidebarMini: true,
          // Utama, Pengurusan Stok, Pengurusan Syarikat, Pengurusan Kontrak, Senarai Tempahan, Design, Laporan
        menuList: [{
            icon: "home",
            name: "Utama",
            path: '/dashboard'
          },
          {
            icon: "assignment",
            name: "Pengurusan Stok",
            path: '/pengurusanstock'
          },
          {
            icon: "assignment",
            name: "Pengurusan Syarikat"
          },
          {
            icon: "assignment",
            name: "Pengurusan Kontrak"
          },
          {
            icon: "checklist",
            name: "Senarai Tempahan"
          },
          {
            icon: "design_services",
            name: "Design"
          },
          {
            icon: "local_post_office",
            name: "Laporan"
          }
        ]
      }
    },
    watch: {
      sidebarMini() {
        this.minimizeSidebar();
      }
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      },
      minimizeSidebar() {
        if (this.$sidebar) {
          this.$sidebar.toggleMinimize();
        }
      },
      classicModalHide() {
        this.classicModal = false
      }
    },
  }
</script>

<style lang="scss" scoped>
  .contentwrap {
    // padding-right: 50px;
  }

  .md-app {
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>