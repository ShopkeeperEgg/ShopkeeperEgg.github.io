<template>
  <div class="m-main" v-if="ok">
    <header>
      <div class="logo">
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMC4wMHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM4Mi40ODA0MjcgNjk4LjY4OGMtOC42NjEzMzMgMC4yNzczMzMtMTYuMzQxMzMzIDcuNzg2NjY3LTE3LjUxNDY2NyAxNi45Mzg2NjctMS4wODggOS4wODggNC44MjEzMzMgMTYuMzg0IDEzLjU0NjY2NyAxNi4yNTYgOC44NzQ2NjctMC4xNDkzMzMgMTYuODk2LTcuODcyIDE4LjAyNjY2Ni0xNy4xNzMzMzQgMC45MTczMzMtOS4yOC01LjM5NzMzMy0xNi41MTItMTQuMDU4NjY2LTE2LjAyMTMzM3pNMzIzLjUzNjQyNyA3MDkuMDk4NjY3Yy0yNi42NjY2NjcgMS4yNTg2NjctNTAuODE2IDI0LjUxMi01NC4yOTMzMzQgNTIuNTY1MzMzLTMuNjI2NjY3IDI4LjIyNCAxNS4xNjggNTAuODU4NjY3IDQyLjAyNjY2NyA1MC4zODkzMzMgMjcuMjQyNjY3LTAuNDI2NjY3IDUyLjM1Mi0yNC4yOTg2NjcgNTUuNjgtNTMuMDk4NjY2IDIuOTg2NjY3LTI4Ljg2NC0xNi4zNjI2NjctNTAuOTg2NjY3LTQzLjQxMzMzMy00OS44NTZ6IiBmaWxsPSIjRkZGRkZGIiAvPjxwYXRoIGQ9Ik03NjYuNDU5MDkzIDY3My42ODUzMzNjLTEyLjIwMjY2Ny0xMjcuNTk0NjY3LTE4My44NTA2NjctMjE1LjUzMDY2Ny0zODMuNDAyNjY2LTE5Ni40MzczMzMtMTk5LjU1MiAxOS4wOTMzMzMtMzUxLjQyNCAxMzcuOTg0LTMzOS4yMjEzMzQgMjY1LjYgMTIuMjI0IDEyNy41OTQ2NjcgMTgzLjg3MiAyMTUuNTUyIDM4My40MjQgMTk2LjQ1ODY2NyAxOTkuNTUyLTE5LjExNDY2NyAzNTEuNDI0LTEzOC4wMDUzMzMgMzM5LjItMjY1LjYyMTMzNHogbS0yNTEuMTM2IDQ5LjQ1MDY2N2MtOS4wNjY2NjcgODMuMDI5MzMzLTg5LjIzNzMzMyAxNTEuMzM4NjY3LTE3NS44NTA2NjYgMTUwLjk3Ni04My42MDUzMzMtMC4zMi0xMzkuNTYyNjY3LTY0Ljk4MTMzMy0xMjcuODA4LTE0Mi45OTczMzMgMTEuNTQxMzMzLTc2LjUyMjY2NyA4NC40OC0xNDAuODg1MzMzIDE2NS43MTczMzMtMTQ1LjIzNzMzNCA4NC4wNTMzMzMtNC42OTMzMzMgMTQ3LjAwOCA1NS45Nzg2NjcgMTM3Ljk0MTMzMyAxMzcuMjU4NjY3eiIgZmlsbD0iI0ZGRkZGRiIgLz48cGF0aCBkPSJNMTAyMi4wOTY0MjcgMzEzLjg3NzMzM2MtMzMuNjg1MzMzLTE4OC4yMjQtMTgzLjMzODY2Ny0yNjMuNzg2NjY3LTI4Ny4wNC0yNzAuOTk3MzMzLTE5LjQ5ODY2Ny0xLjg3NzMzMy0zNy42MTA2NjcgOS44NzczMzMtNDAuMjk4NjY3IDI4LjcxNDY2Ny0yLjU4MTMzMyAxOC4zMjUzMzMgMTAuNTM4NjY3IDM2LjU2NTMzMyAyOC43MTQ2NjcgNDAuMjk4NjY2IDY3Ljg0IDE0Ljk3NiAxOTYuMjAyNjY3IDM0LjczMDY2NyAyMzAuMTY1MzMzIDIyNS43NDkzMzQgMi45NjUzMzMgMTkuMzcwNjY3IDE4LjkyMjY2NyA0MC4wMjEzMzMgNDMuMDUwNjY3IDM0Ljc3MzMzMyAxNy42NjQtMy45MDQgMzMuNDUwNjY3LTEzLjcxNzMzMyAyNS40MDgtNTguNTM4NjY3ek03MjAuMzc5MDkzIDI2MS4yOTA2NjdhMjQuMzYyNjY3IDI0LjM2MjY2NyAwIDAgMC0yNy40OTg2NjYgMTcuNDUwNjY2Yy0zLjk0NjY2NyAxMy4xNDEzMzMgMy4zMjggMjguMTgxMzMzIDE2LjY4MjY2NiAzMC45NzYgMjguMzczMzMzIDUuOTMwNjY3IDQyLjI2MTMzMyAyNS40OTMzMzMgNDYuMzc4NjY3IDQ2LjM1NzMzNCAwIDAgMy42MjY2NjcgMTQuMTQ0IDE3LjI1ODY2NyAxOC4wNDggMTMuMzMzMzMzIDMuODE4NjY3IDM3LjQxODY2Ny02LjAzNzMzMyAzMC40ODUzMzMtMzIuMjk4NjY3LTYuODkwNjY3LTM1LjczMzMzMy00Mi40MTA2NjctNzQuMTEyLTgzLjMwNjY2Ny04MC41MzMzMzN6IiBmaWxsPSIjRTc5MDE0IiAvPjxwYXRoIGQ9Ik03MzcuNjM3NzYgMTYwLjQyNjY2N2MtMjkuNzgxMzMzLTUuMTQxMzMzLTQzLjQxMzMzMyAxNi4yMTMzMzMtNDMuNDEzMzMzIDMzLjI1ODY2NiAwIDE3LjAyNCAxMi4xNiAyOS4zMTIgMzQuNjAyNjY2IDM1LjU2MjY2NyA1OS42MDUzMzMgMTYuNTMzMzMzIDk3Ljg3NzMzMyA0Mi42NjY2NjcgMTA4LjM3MzMzNCAxMTEuNjggMy4wNTA2NjcgMjAuMDMyIDIxLjM1NDY2NyAzMC43MiAzNC42NDUzMzMgMzAuNzIgMTcuOTQxMzMzIDAgMzIuNDY5MzMzLTE0LjU0OTMzMyAzMi40NjkzMzMtMzIuNDY5MzMzIDAtMC42NjEzMzMtMC4wNjQtMS4zMjI2NjctMC4xMDY2NjYtMS45NjI2NjdsMC4xNzA2NjYtMC4wNDI2NjdjLTExLjM0OTMzMy04OC41MzMzMzMtNzcuNjk2LTE2MS4zNjUzMzMtMTY2Ljc0MTMzMy0xNzYuNzQ2NjY2eiIgZmlsbD0iI0U3OTAxNCIgLz48cGF0aCBkPSJNNzMxLjYwMDQyNyA2OTcuNDcyYy0xMS45NjggMTI0LjA1MzMzMy0xODguODQyNjY3IDIyMy4zODEzMzMtMzgwLjY1MDY2NyAyMTguNDk2LTE3Ny43NDkzMzMtNC4zOTQ2NjctMjk2LjE5Mi05Ny45ODQtMjc2LjU2NTMzMy0yMDYuNTcwNjY3IDE5LjEzNi0xMDUuNDcyIDE2NC40MTYtMTk2LjYyOTMzMyAzMzUuMjk2LTIwNi43MiAxODMuNTUyLTEwLjgxNiAzMzMuNTg5MzMzIDc0LjU4MTMzMyAzMjEuOTIgMTk0Ljc5NDY2N3ogbS0yNy45NjgtMTk4LjgwNTMzM2MtNy4wODI2NjcgMC4xOTItMTAuMDY5MzMzIDEuMDI0LTExLjEzNi0xLjUxNDY2Ny0wLjg3NDY2Ny0yLjA2OTMzMyAwLjE3MDY2Ny00LjMzMDY2NyAzLjk4OTMzMy0xMy45NzMzMzMgMTAuNjQ1MzMzLTI2Ljg1ODY2NyAyNy41NjI2NjctODIuMDY5MzMzLTcuMjMyLTExMi44NzQ2NjctMjIuOTU0NjY3LTIwLjMzMDY2Ny0xMjAuMTQ5MzMzLTM1Ljg0LTIyMi41NzA2NjcgMzUuMi01LjA5ODY2NyAzLjU0MTMzMy0xMy4zNzYgMTEuMDkzMzMzLTE3LjU1NzMzMyA5LjcwNjY2Ny00LjYwOC0xLjU1NzMzMy01LjU4OTMzMy02LjUyOC02LjIwOC0xNS45MTQ2NjctMy4zNDkzMzMtNTAuNjAyNjY3IDM5LjIxMDY2Ny0xOTEuMjMyLTcwLjU3MDY2Ny0xNzkuNTYyNjY3LTExNi42OTMzMzMgMTkuNzU0NjY3LTI3NC4xMzMzMzMgMjA0LjE2LTMxOS4xMjUzMzMgMjkzLjM1NDY2Ny0xNTkuNjggMzE2LjQ1ODY2NyA3MS4yMzIgNDQ1LjM5NzMzMyAyOTcuMTA5MzMzIDQ1Mi4xMzg2NjcgMjQ1LjA1NiA3LjIzMiA0OTMuMzEyLTEzMS45MDQgNTI1Ljk1Mi0zMTguMDM3MzM0IDIxLjc4MTMzMy0xMjQuMjQ1MzMzLTEyNC40OC0xNDkuNTg5MzMzLTE3Mi42NTA2NjYtMTQ4LjUyMjY2NnoiIGZpbGw9IiNENjI2MjkiIC8+PHBhdGggZD0iTTM3Ny4zODE3NiA1ODUuODc3MzMzYy04MS4yMzczMzMgNC4zNzMzMzMtMTU0LjE3NiA2OC43MTQ2NjctMTY1LjcxNzMzMyAxNDUuMjM3MzM0LTExLjczMzMzMyA3OC4wMTYgNDQuMjAyNjY3IDE0Mi42NzczMzMgMTI3LjgwOCAxNDIuOTk3MzMzIDg2LjYxMzMzMyAwLjM2MjY2NyAxNjYuNzg0LTY3Ljk0NjY2NyAxNzUuODUwNjY2LTE1MC45NzYgOS4wNjY2NjctODEuMjgtNTMuODg4LTE0MS45NTItMTM3Ljk0MTMzMy0xMzcuMjU4NjY3eiBtLTEwLjQzMiAxNzMuMDc3MzM0Yy0zLjMyOCAyOC44LTI4LjQzNzMzMyA1Mi42NTA2NjctNTUuNjggNTMuMDk4NjY2LTI2Ljg4IDAuNDY5MzMzLTQ1LjY3NDY2Ny0yMi4xNjUzMzMtNDIuMDI2NjY3LTUwLjM4OTMzMyAzLjQ3NzMzMy0yOC4wNTMzMzMgMjcuNjI2NjY3LTUxLjMwNjY2NyA1NC4yOTMzMzQtNTIuNTY1MzMzIDI3LjA1MDY2Ny0xLjEzMDY2NyA0Ni40IDIwLjk5MiA0My40MTMzMzMgNDkuODU2eiBtMTEuNTYyNjY3LTI3LjA5MzMzNGMtOC43MDQgMC4xMjgtMTQuNjEzMzMzLTcuMTY4LTEzLjU0NjY2Ny0xNi4yNTYgMS4xNzMzMzMtOS4xMzA2NjcgOC44NTMzMzMtMTYuNjYxMzMzIDE3LjUxNDY2Ny0xNi45Mzg2NjYgOC42NC0wLjQ5MDY2NyAxNC45NzYgNi43NDEzMzMgMTQuMDU4NjY2IDE2LTEuMTMwNjY3IDkuMzIyNjY3LTkuMTUyIDE3LjA0NTMzMy0xOC4wMjY2NjYgMTcuMTk0NjY2eiIgZmlsbD0iIzAzMDAwMCIgLz48L3N2Zz4=" alt="logo">
      </div>
      <div class="mmm">
        <h1 v-if="step===0" style="font-size: 26px;">奖金计算系统(计算页)</h1>
        <h1 v-if="step===1" style="font-size: 26px;">奖金计算系统(结果页)</h1>
      </div>
      <div class="username">
        苏红
      </div>
    </header>
    <section class="w960">
      <template v-if="step===0">
      <div class="table" style="margin-bottom: 40px;">
        <div class="tr">
          <div class="td">默认配置</div>
        </div>
        <div class="tr">
          <div class="td">版权使用者</div>
          <div class="td">
            苏红
          </div>
          <div class="td">奖金总额</div>
          <div class="td">
            <input type="number" v-model="totalNumber" style="width: 80%;"> 元
          </div>
        </div>
      </div>
      <div class="table">
        <div class="table-header">
          <div class="tr">
            <div class="td" v-for="(item, index) in config" :key="index">{{item.name}} <a class="del-icon" @click="deleteAllCol(item)" href="javascript:;">x</a> </div>
            <div class="td">操作</div>
          </div>
          <div class="tr" v-for="(item, index) in list" :key="index">
            <div class="td" v-for="(i, v) in config" :key="v">
              <label>
                <input :ref="index.toString() + '-' + v.toString()" type="text" v-if="i.string" :placeholder="i.name" v-model="item[i.set]">
                <input @keyup.enter="keyup(index, v)" :ref="index.toString() + '-' + v.toString()" type="number" v-else :placeholder="i.name" v-model="item[i.set]">
              </label>
            </div>
            <div class="td">
              <a class="del" style="margin-right: 5px;color: #6853ff;" @click="add(index)" href="javascript:;">添加</a>
              <a class="del" @click="deleteItem(index)" href="javascript:;">删除</a>
            </div>
          </div>
          <div style="background: #e8e8e8;" class="tr">
            <div v-for="(item, index) in config" :key="index" class="td">
              <label>
                <input v-if="item.set === 'name'" type="text" :placeholder="`默认${item.name}`" v-model="item.default">
                <input v-else type="number" :placeholder="`默认${item.name}`" v-model="item.default">
              </label>
            </div>
            <div class="td cp" @click="add(undefined)">
              <a style="color: #6853ff" href="javascript:;">添加</a>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-area">
        <a href="javascript:;" @click="jsZs" style="padding-left: 60px;padding-right: 60px;" class="btn m-btn-green">计算</a>
        <label for="file">
          <div class="btn m-btn-orange">导入数据</div>
          <input v-show="0" type="file" id="file" @change="change" ref="file"/>
        </label>
        <a href="javascript:;" class="btn m-btn-blue" @click="exportData">导出数据</a>
        <a href="javascript:;" class="btn m-btn-red" @click="clearAll">清空所有数据</a>
      </div>
      </template>
      <template v-else>
      <div class="table" ref="table">
        <div class="table-header">
          <div class="tr">
            <div class="td">姓名</div>
            <div class="td">系数</div>
            <div class="td">80%奖金</div>
            <div class="td">调整</div>
            <div class="td">手术提成</div>
            <div class="td">绩效</div>
            <div class="td">缺勤费</div>
            <div class="td">分娩病房</div>
            <div class="td">分娩产房</div>
            <div class="td">20%奖金</div>
            <div class="td">增加项</div>
            <div class="td">扣钱项</div>
            <div class="td">总数</div>
          </div>
          <div style="background-color: #fff;" class="tr" v-for="(item, index) in list" :key="index">
            <div class="td">{{item.name}}</div>
            <div class="td">{{so2(item.xs)}}</div>
            <div class="td">{{so2(item.jj)}}</div>
            <div class="td">{{so2(item.tz)}}</div>
            <div class="td">{{so2(item.sstc)}}</div>
            <div class="td">{{so2(item.jx)}}</div>
            <div class="td">{{so2(item.qqJJ)}}</div>
            <div class="td">{{so2(item.fmbf)}}</div>
            <div class="td">{{so2(item.fmcf)}}</div>
            <div class="td">{{so2(item.jj2)}}</div>
            <div class="td">{{so2(item.qt)}}</div>
            <div class="td">{{so2(item.kqx)}}</div>
            <div class="td">{{so2(item.total_all)}}</div>
          </div>
          <div class="tr">
            <div class="td">总计</div>
            <div class="td">{{so2(totalObj.xs)}}</div>
            <div class="td">{{so2(totalObj.jj)}}</div>
            <div class="td">{{so2(totalObj.tz)}}</div>
            <div class="td">{{so2(totalObj.sstc)}}</div>
            <div class="td">{{so2(totalObj.jx)}}</div>
            <div class="td">{{so2(totalObj.qqJJ)}}</div>
            <div class="td">{{so2(totalObj.fmbf)}}</div>
            <div class="td">{{so2(totalObj.fmcf)}}</div>
            <div class="td">{{so2(totalObj.jj2)}}</div>
            <div class="td">{{so2(totalObj.qt)}}</div>
            <div class="td">{{so2(totalObj.kqx)}}</div>
            <div class="td">{{so2(totalObj.total_all)}}</div>
          </div>
        </div>
      </div>
      <div class="btn-area">
        <a href="javascript:;" class="btn m-btn-blue" @click="downloadFile(1)">生成Excel(测试版)</a>
        <a href="javascript:;" class="btn m-btn-green" @click="downloadFile">生成文本文档</a>
        <a href="javascript:;" class="btn m-btn-white" @click="tupian" style="color: #787878;">生成图片</a>
        <a href="javascript:;" class="btn m-btn-red" @click="step=0">返回</a>
      </div>
      </template>
      <a id="downlink"></a>
    </section>
  </div>
</template>


<script>
import html2canvas from "html2canvas";

export default {
  data() {
    return {
      config: [
        { name: "系数", set: "xs" },
        { name: "姓名", set: "name", string: true },
        { name: "80%奖金", set: "jj" },
        { name: "调整", set: "tz" },
        { name: "手术提成", set: "sstc" },
        { name: "绩效", set: "jx" },
        { name: "分娩病房", set: "fmbf" },
        { name: "分娩产房", set: "fmcf" },
        { name: "20%奖金", set: "jj2" },
        { name: "增加项(正)", set: "qt" },
        { name: "扣钱项(负)", set: "kqx" },
        { name: "全勤？", set: "qqts" }
      ],
      list: [],
      file1: null,
      ok: 0,
      addItem: {},
      totalObj: {
        jj: 0,
        tz: 0,
        qqJJ: 0,
        sstc: 0,
        jx: 0,
        fmbf: 0,
        fmcf: 0,
        jj2: 0,
        qt: 0,
        xs: 0,
        kqx: 0,
        total_all: 0
      },
      days: 30,
      step: 0,
      totalNumber: 0
    };
  },
  methods: {
    add(index) {
      const obj = {};
      Object.assign(obj, this.addItem);
      for (let i = 0; i < this.config.length; i++) {
        obj[this.config[i].set] = this.config[i].default;
      }
      if (index === 0) {
        const list_temp = [];
        Object.assign(list_temp, this.list);
        this.list = [obj, ...list_temp];
      } else if (index) {
        const list_temp = [];
        Object.assign(list_temp, this.list);
        this.list = [
          ...list_temp.slice(0, index),
          obj,
          ...list_temp.slice(index)
        ];
      } else {
        this.list.push(obj);
      }

      setTimeout(() => {
        this.clearAddItem();
      });
    },
    clearAddItem() {
      for (const key in this.addItem) {
        this.addItem[key] = "";
      }
    },
    exportData() {
      const filename = prompt("请输入配置文件名称");
      if (filename) {
        this.downloadData(filename, JSON.stringify(this.list));
      }
    },
    downloadData(name, file) {
      function download(filename, text) {
        const element = document.createElement("a");
        element.setAttribute(
          "href",
          "data:text/plain;charset=utf-8," + encodeURIComponent(text)
        );
        element.setAttribute("download", filename);

        element.style.display = "none";
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
      }
      download(name, file);
    },
    change() {
      let file = this.$refs.file.files[0];
      if (!/text/.test(file.type)) {
        alert("格式有误");
        return false;
      }
      const _this = this;
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function() {
        if (confirm("确定导入文件么？导入文件会导致原来的输入内容被覆盖")) {
          try {
            _this.list = JSON.parse(this.result);
          } catch (e) {
            alert("导入失败！文件内容不匹配");
          }
        }
      };
    },
    tupian() {
      const shareContent = this.$refs.table;
      html2canvas(shareContent).then(canvas => {
        const base64 = canvas.toDataURL("image/png");
        const img = new Image();
        img.src = base64;
        document.body.appendChild(img);
        alert("生成图片成功，请在页面最下方查看");
      });
    },
    deleteItem(index) {
      this.list.splice(index, 1);
    },
    clearAll() {
      if (
        prompt(
          "\n\n您确定要清空所有数据信息吗？一旦清空，无法恢复！！！\n\n请输入您的姓名以清空："
        ) === "苏红"
      ) {
        this.list = [];
      } else {
        alert("清空失败，您的输入有误");
      }
    },
    downloadFile(tag) {
      const arr1 = [
        "姓名",
        "系数",
        "80%奖金",
        "调整",
        "手术提成",
        "绩效",
        "缺勤费",
        "分娩病房",
        "分娩产房",
        "20%奖金",
        "增加项",
        "扣钱项",
        "总数"
      ];
      let str = arr1.join("\t") + "\n";
      this.list.forEach(item => {
        const arr = [];
        arr.push(item.name);
        arr.push(this.so2(item.xs));
        arr.push(this.so2(item.jj));
        arr.push(this.so2(item.tz));
        arr.push(this.so2(item.sstc));
        arr.push(this.so2(item.jx));
        arr.push(this.so2(item.qqJJ));
        arr.push(this.so2(item.fmbf));
        arr.push(this.so2(item.fmcf));
        arr.push(this.so2(item.jj2));
        arr.push(this.so2(item.qt));
        arr.push(this.so2(item.kqx));
        arr.push(this.so2(item.total_all));
        str += arr.join("\t") + "\n";
      });
      const arr2 = [
        "总计",
        this.so2(this.totalObj.xs),
        this.so2(this.totalObj.jj),
        this.so2(this.totalObj.tz),
        this.so2(this.totalObj.sstc),
        this.so2(this.totalObj.jx),
        this.so2(this.totalObj.qqJJ),
        this.so2(this.totalObj.fmbf),
        this.so2(this.totalObj.fmcf),
        this.so2(this.totalObj.jj2),
        this.so2(this.totalObj.qt),
        this.so2(this.totalObj.kqx),
        this.so2(this.totalObj.total_all)
      ];
      str += arr2.join("\t") + "\n";
      const filename = prompt("请输入导出文件名称");
      if (!filename) {
        alert("未输入文件名");
      }
      if (tag === 1) {
        this.downloadData(filename + ".xls", str);
      } else {
        this.downloadData(filename, str);
      }
    },
    so2(num) {
      return Math.round(+num * 1000000) / 1000000 || 0;
    },
    jsZs() {
      // if (
      //   !confirm(\`
      //     '本网站仅供学习，请勿用于商业用途！ \n 由本网站计算造成的后果，网站作者和提供网站者不承担任何责任！ \n 点击下方的"确定"即代表已阅读并同意 \n 您确认进行计算么？'
      //   )
      // ) {
      //   return;
      // }
      function n(m) {
        if (!m) {
          return 0;
        }
        return +m;
      }
      let total = 0;
      let n_total = 0;
      for (let i = 0; i < this.list.length; i++) {
        const item = this.list[i];
        item.total =
          n(item.jj) +
          n(item.tz) +
          n(item.sstc) +
          n(item.jx) +
          n(item.fmbf) +
          n(item.fmcf) +
          n(item.jj2) +
          n(item.qt);
        this.totalObj.jj += n(item.jj);
        this.totalObj.tz += n(item.tz);
        this.totalObj.sstc += n(item.sstc);
        this.totalObj.jx += n(item.jx);
        this.totalObj.fmbf += n(item.fmbf);
        this.totalObj.fmcf += n(item.fmcf);
        this.totalObj.jj2 += n(item.jj2);
        this.totalObj.qt += n(item.qt);
        this.totalObj.xs += n(item.xs);
        total += item.total;
        item.isQq = +item.qqts === 0;
        if (!item.isQq) {
          n_total += n(item.xs);
        }
      }
      const qqNum = this.totalNumber - total;
      for (let i = 0; i < this.list.length; i++) {
        const item = this.list[i];
        if (!item.isQq) {
          item.qqJJ = qqNum * n(item.xs) / n_total;
          item.qqJJ = Math.round(item.qqJJ * 100) / 100;
        } else {
          item.qqJJ = 0;
        }
        item.total_all = item.total + item.qqJJ + +item.kqx;
        item.total_all = Math.round(item.total_all * 100) / 100;
        this.totalObj.qqJJ += n(item.qqJJ);
        this.totalObj.total_all += n(item.total_all);
        this.totalObj.kqx += n(item.kqx);
      }
      // 总缺勤奖金
      this.step = 1;
    },
    deleteAllCol(item) {
      if (!confirm(`确认删除 ${item.name} 整列？？？？删除后不可恢复`)) {
        return;
      }
      for (let i = 0; i < this.list.length; i++) {
        this.list[i][item.set] = '';
      }
    },
    keyup(index1, index2) {
      const nextDom = this.$refs[(index1 + 1).toString() + '-' + index2.toString()];
      if(nextDom){
        this.list[index1 + 1][this.config[index2].set] = this.list[index1][this.config[index2].set];
        nextDom[0].focus();
      }
    }
  },
  created() {
    if (prompt("请输入密码") === "dengziyang") {
      this.ok = 1;
    } else {
      alert("密码输入错误");
    }
    // this.ok = 1;
    const member = window.localStorage.getItem("member");
    if (member) {
      this.list = JSON.parse(member);
    }
    for (let i = 0; i < this.config.length; i++) {
      this.addItem[this.config[i].set] = "";
    }
  },
  mounted() {
    this.imFile = document.getElementById("file");
    this.outFile = document.getElementById("downlink");
  },
  watch: {
    list: {
      deep: true,
      handler() {
        window.localStorage.setItem("member", JSON.stringify(this.list));
      }
    },
    step() {
      if (this.step === 0) {
        this.totalObj = {
          jj: 0,
          xs: 0,
          tz: 0,
          qqJJ: 0,
          sstc: 0,
          jx: 0,
          fmbf: 0,
          fmcf: 0,
          jj2: 0,
          qt: 0,
          kqx: 0,
          total_all: 0
        };
      }
    }
  }
};
</script>
