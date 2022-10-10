<template>
  <div class="layout">
    <Header />
    <section class="main page-container page-component flex">
      <Menu />
      <div class="content f1">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
</script>

<style lang="scss">
@import "@/styles/var.scss";
.layout {
  height: 100%;
  background-color: #fdfdfd;
  .main {
    margin: auto;
    height: 100%;
    padding-top: 70px;
    .content {
      padding: 20px;
      .content {
        > {
          h3 {
            margin: 55px 0 20px;
          }

          table {
            border-collapse: collapse;
            width: 100%;
            background-color: #fff;
            font-size: 14px;
            margin-bottom: 45px;
            line-height: 1.5em;

            strong {
              font-weight: normal;
            }

            td,
            th {
              border-bottom: 1px solid #dcdfe6;
              padding: 15px;
              max-width: 250px;
            }

            th {
              text-align: left;
              white-space: nowrap;
              color: #909399;
              font-weight: normal;
            }

            td {
              color: #606266;
            }

            th:first-child,
            td:first-child {
              padding-left: 10px;
            }
          }

          ul:not(.timeline) {
            margin: 10px 0;
            padding: 0 0 0 20px;
            font-size: 14px;
            color: #5e6d82;
            line-height: 2em;
          }
        }
      }
    }
  }
  .page-component {
    box-sizing: border-box;
    height: 100%;
  }

  @media (max-width: 768px) {
    .page-component {
      .page-component__nav {
        width: 100%;
        position: static;
        margin-top: 0;
      }
      .side-nav {
        padding-top: 0;
        padding-left: 50px;
      }
      .page-component__content {
        padding-left: 10px;
        padding-right: 10px;
      }
      .content {
        padding-top: 0;
      }
      .content > table {
        overflow: auto;
        display: block;
      }
    }
  }
}
</style>
