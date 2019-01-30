<template>
  <div class="m-main">
    <header>
      <div class="logo">
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMC4wMHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM4Mi40ODA0MjcgNjk4LjY4OGMtOC42NjEzMzMgMC4yNzczMzMtMTYuMzQxMzMzIDcuNzg2NjY3LTE3LjUxNDY2NyAxNi45Mzg2NjctMS4wODggOS4wODggNC44MjEzMzMgMTYuMzg0IDEzLjU0NjY2NyAxNi4yNTYgOC44NzQ2NjctMC4xNDkzMzMgMTYuODk2LTcuODcyIDE4LjAyNjY2Ni0xNy4xNzMzMzQgMC45MTczMzMtOS4yOC01LjM5NzMzMy0xNi41MTItMTQuMDU4NjY2LTE2LjAyMTMzM3pNMzIzLjUzNjQyNyA3MDkuMDk4NjY3Yy0yNi42NjY2NjcgMS4yNTg2NjctNTAuODE2IDI0LjUxMi01NC4yOTMzMzQgNTIuNTY1MzMzLTMuNjI2NjY3IDI4LjIyNCAxNS4xNjggNTAuODU4NjY3IDQyLjAyNjY2NyA1MC4zODkzMzMgMjcuMjQyNjY3LTAuNDI2NjY3IDUyLjM1Mi0yNC4yOTg2NjcgNTUuNjgtNTMuMDk4NjY2IDIuOTg2NjY3LTI4Ljg2NC0xNi4zNjI2NjctNTAuOTg2NjY3LTQzLjQxMzMzMy00OS44NTZ6IiBmaWxsPSIjRkZGRkZGIiAvPjxwYXRoIGQ9Ik03NjYuNDU5MDkzIDY3My42ODUzMzNjLTEyLjIwMjY2Ny0xMjcuNTk0NjY3LTE4My44NTA2NjctMjE1LjUzMDY2Ny0zODMuNDAyNjY2LTE5Ni40MzczMzMtMTk5LjU1MiAxOS4wOTMzMzMtMzUxLjQyNCAxMzcuOTg0LTMzOS4yMjEzMzQgMjY1LjYgMTIuMjI0IDEyNy41OTQ2NjcgMTgzLjg3MiAyMTUuNTUyIDM4My40MjQgMTk2LjQ1ODY2NyAxOTkuNTUyLTE5LjExNDY2NyAzNTEuNDI0LTEzOC4wMDUzMzMgMzM5LjItMjY1LjYyMTMzNHogbS0yNTEuMTM2IDQ5LjQ1MDY2N2MtOS4wNjY2NjcgODMuMDI5MzMzLTg5LjIzNzMzMyAxNTEuMzM4NjY3LTE3NS44NTA2NjYgMTUwLjk3Ni04My42MDUzMzMtMC4zMi0xMzkuNTYyNjY3LTY0Ljk4MTMzMy0xMjcuODA4LTE0Mi45OTczMzMgMTEuNTQxMzMzLTc2LjUyMjY2NyA4NC40OC0xNDAuODg1MzMzIDE2NS43MTczMzMtMTQ1LjIzNzMzNCA4NC4wNTMzMzMtNC42OTMzMzMgMTQ3LjAwOCA1NS45Nzg2NjcgMTM3Ljk0MTMzMyAxMzcuMjU4NjY3eiIgZmlsbD0iI0ZGRkZGRiIgLz48cGF0aCBkPSJNMTAyMi4wOTY0MjcgMzEzLjg3NzMzM2MtMzMuNjg1MzMzLTE4OC4yMjQtMTgzLjMzODY2Ny0yNjMuNzg2NjY3LTI4Ny4wNC0yNzAuOTk3MzMzLTE5LjQ5ODY2Ny0xLjg3NzMzMy0zNy42MTA2NjcgOS44NzczMzMtNDAuMjk4NjY3IDI4LjcxNDY2Ny0yLjU4MTMzMyAxOC4zMjUzMzMgMTAuNTM4NjY3IDM2LjU2NTMzMyAyOC43MTQ2NjcgNDAuMjk4NjY2IDY3Ljg0IDE0Ljk3NiAxOTYuMjAyNjY3IDM0LjczMDY2NyAyMzAuMTY1MzMzIDIyNS43NDkzMzQgMi45NjUzMzMgMTkuMzcwNjY3IDE4LjkyMjY2NyA0MC4wMjEzMzMgNDMuMDUwNjY3IDM0Ljc3MzMzMyAxNy42NjQtMy45MDQgMzMuNDUwNjY3LTEzLjcxNzMzMyAyNS40MDgtNTguNTM4NjY3ek03MjAuMzc5MDkzIDI2MS4yOTA2NjdhMjQuMzYyNjY3IDI0LjM2MjY2NyAwIDAgMC0yNy40OTg2NjYgMTcuNDUwNjY2Yy0zLjk0NjY2NyAxMy4xNDEzMzMgMy4zMjggMjguMTgxMzMzIDE2LjY4MjY2NiAzMC45NzYgMjguMzczMzMzIDUuOTMwNjY3IDQyLjI2MTMzMyAyNS40OTMzMzMgNDYuMzc4NjY3IDQ2LjM1NzMzNCAwIDAgMy42MjY2NjcgMTQuMTQ0IDE3LjI1ODY2NyAxOC4wNDggMTMuMzMzMzMzIDMuODE4NjY3IDM3LjQxODY2Ny02LjAzNzMzMyAzMC40ODUzMzMtMzIuMjk4NjY3LTYuODkwNjY3LTM1LjczMzMzMy00Mi40MTA2NjctNzQuMTEyLTgzLjMwNjY2Ny04MC41MzMzMzN6IiBmaWxsPSIjRTc5MDE0IiAvPjxwYXRoIGQ9Ik03MzcuNjM3NzYgMTYwLjQyNjY2N2MtMjkuNzgxMzMzLTUuMTQxMzMzLTQzLjQxMzMzMyAxNi4yMTMzMzMtNDMuNDEzMzMzIDMzLjI1ODY2NiAwIDE3LjAyNCAxMi4xNiAyOS4zMTIgMzQuNjAyNjY2IDM1LjU2MjY2NyA1OS42MDUzMzMgMTYuNTMzMzMzIDk3Ljg3NzMzMyA0Mi42NjY2NjcgMTA4LjM3MzMzNCAxMTEuNjggMy4wNTA2NjcgMjAuMDMyIDIxLjM1NDY2NyAzMC43MiAzNC42NDUzMzMgMzAuNzIgMTcuOTQxMzMzIDAgMzIuNDY5MzMzLTE0LjU0OTMzMyAzMi40NjkzMzMtMzIuNDY5MzMzIDAtMC42NjEzMzMtMC4wNjQtMS4zMjI2NjctMC4xMDY2NjYtMS45NjI2NjdsMC4xNzA2NjYtMC4wNDI2NjdjLTExLjM0OTMzMy04OC41MzMzMzMtNzcuNjk2LTE2MS4zNjUzMzMtMTY2Ljc0MTMzMy0xNzYuNzQ2NjY2eiIgZmlsbD0iI0U3OTAxNCIgLz48cGF0aCBkPSJNNzMxLjYwMDQyNyA2OTcuNDcyYy0xMS45NjggMTI0LjA1MzMzMy0xODguODQyNjY3IDIyMy4zODEzMzMtMzgwLjY1MDY2NyAyMTguNDk2LTE3Ny43NDkzMzMtNC4zOTQ2NjctMjk2LjE5Mi05Ny45ODQtMjc2LjU2NTMzMy0yMDYuNTcwNjY3IDE5LjEzNi0xMDUuNDcyIDE2NC40MTYtMTk2LjYyOTMzMyAzMzUuMjk2LTIwNi43MiAxODMuNTUyLTEwLjgxNiAzMzMuNTg5MzMzIDc0LjU4MTMzMyAzMjEuOTIgMTk0Ljc5NDY2N3ogbS0yNy45NjgtMTk4LjgwNTMzM2MtNy4wODI2NjcgMC4xOTItMTAuMDY5MzMzIDEuMDI0LTExLjEzNi0xLjUxNDY2Ny0wLjg3NDY2Ny0yLjA2OTMzMyAwLjE3MDY2Ny00LjMzMDY2NyAzLjk4OTMzMy0xMy45NzMzMzMgMTAuNjQ1MzMzLTI2Ljg1ODY2NyAyNy41NjI2NjctODIuMDY5MzMzLTcuMjMyLTExMi44NzQ2NjctMjIuOTU0NjY3LTIwLjMzMDY2Ny0xMjAuMTQ5MzMzLTM1Ljg0LTIyMi41NzA2NjcgMzUuMi01LjA5ODY2NyAzLjU0MTMzMy0xMy4zNzYgMTEuMDkzMzMzLTE3LjU1NzMzMyA5LjcwNjY2Ny00LjYwOC0xLjU1NzMzMy01LjU4OTMzMy02LjUyOC02LjIwOC0xNS45MTQ2NjctMy4zNDkzMzMtNTAuNjAyNjY3IDM5LjIxMDY2Ny0xOTEuMjMyLTcwLjU3MDY2Ny0xNzkuNTYyNjY3LTExNi42OTMzMzMgMTkuNzU0NjY3LTI3NC4xMzMzMzMgMjA0LjE2LTMxOS4xMjUzMzMgMjkzLjM1NDY2Ny0xNTkuNjggMzE2LjQ1ODY2NyA3MS4yMzIgNDQ1LjM5NzMzMyAyOTcuMTA5MzMzIDQ1Mi4xMzg2NjcgMjQ1LjA1NiA3LjIzMiA0OTMuMzEyLTEzMS45MDQgNTI1Ljk1Mi0zMTguMDM3MzM0IDIxLjc4MTMzMy0xMjQuMjQ1MzMzLTEyNC40OC0xNDkuNTg5MzMzLTE3Mi42NTA2NjYtMTQ4LjUyMjY2NnoiIGZpbGw9IiNENjI2MjkiIC8+PHBhdGggZD0iTTM3Ny4zODE3NiA1ODUuODc3MzMzYy04MS4yMzczMzMgNC4zNzMzMzMtMTU0LjE3NiA2OC43MTQ2NjctMTY1LjcxNzMzMyAxNDUuMjM3MzM0LTExLjczMzMzMyA3OC4wMTYgNDQuMjAyNjY3IDE0Mi42NzczMzMgMTI3LjgwOCAxNDIuOTk3MzMzIDg2LjYxMzMzMyAwLjM2MjY2NyAxNjYuNzg0LTY3Ljk0NjY2NyAxNzUuODUwNjY2LTE1MC45NzYgOS4wNjY2NjctODEuMjgtNTMuODg4LTE0MS45NTItMTM3Ljk0MTMzMy0xMzcuMjU4NjY3eiBtLTEwLjQzMiAxNzMuMDc3MzM0Yy0zLjMyOCAyOC44LTI4LjQzNzMzMyA1Mi42NTA2NjctNTUuNjggNTMuMDk4NjY2LTI2Ljg4IDAuNDY5MzMzLTQ1LjY3NDY2Ny0yMi4xNjUzMzMtNDIuMDI2NjY3LTUwLjM4OTMzMyAzLjQ3NzMzMy0yOC4wNTMzMzMgMjcuNjI2NjY3LTUxLjMwNjY2NyA1NC4yOTMzMzQtNTIuNTY1MzMzIDI3LjA1MDY2Ny0xLjEzMDY2NyA0Ni40IDIwLjk5MiA0My40MTMzMzMgNDkuODU2eiBtMTEuNTYyNjY3LTI3LjA5MzMzNGMtOC43MDQgMC4xMjgtMTQuNjEzMzMzLTcuMTY4LTEzLjU0NjY2Ny0xNi4yNTYgMS4xNzMzMzMtOS4xMzA2NjcgOC44NTMzMzMtMTYuNjYxMzMzIDE3LjUxNDY2Ny0xNi45Mzg2NjYgOC42NC0wLjQ5MDY2NyAxNC45NzYgNi43NDEzMzMgMTQuMDU4NjY2IDE2LTEuMTMwNjY3IDkuMzIyNjY3LTkuMTUyIDE3LjA0NTMzMy0xOC4wMjY2NjYgMTcuMTk0NjY2eiIgZmlsbD0iIzAzMDAwMCIgLz48L3N2Zz4=" alt="logo">
      </div>
      <div class="username">
        苏红
      </div>
    </header>
    <section class="w960">
      <div class="table">
        <div class="table-header">
          <div class="tr">
            <div class="td">姓名</div>
            <div class="td">上班天数</div>
            <div class="td">系数</div>
            <div class="td">请假天数</div>
            <div class="td">操作</div>
          </div>
          <div class="tr" v-for="(item, index) in list" :key="index">
            <div class="td">
              <label>
                <input type="text" placeholder="姓名" v-model="item.name">
              </label>
            </div>
            <div class="td">
              <label>
                <input type="text" placeholder="上班天数" v-model="item.days">
              </label>
            </div>
            <div class="td">
              <label>
                <input type="text" placeholder="系数" v-model="item.xxx">
              </label>
            </div>
            <div class="td">
              <label>
                <input type="text" placeholder="请假天数" v-model="item.sss">
              </label>
            </div>
            <div class="td cp" @click="deleteItem(index)">
              <a href="javascript:;">删除</a>
            </div>
          </div>
          <div class="tr">
            <div class="td"></div>
            <div class="td"></div>
            <div class="td"></div>
            <div class="td"></div>
            <div class="td cp" @click="add">
              <a href="javascript:;">添加</a>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-area">
        <a href="javascript:;" @click="downloadFile" style="padding-left: 60px;padding-right: 60px;" class="btn m-btn-green">计算</a>
        <label for="file">
          <div class="btn m-btn-orange">导入数据</div>
          <input v-show="0" type="file" id="file" @change="change" ref="file"/>
        </label>
        <a href="javascript:;" class="btn m-btn-blue" @click="exportData">导出数据</a>
        <a href="javascript:;" class="btn m-btn-red" @click="clearAll">清空所有数据</a>
      </div>
       <a id="downlink"></a>
    </section>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: [
        // { name: "张三", days: "123", xxx: "0.8", sss: "0.45" }
      ],
      addItem: { name: "", days: "", xxx: "", sss: "" },
      fullscreenLoading: false, // 加载中
      imFile: "", // 导入文件el
      outFile: "", // 导出文件el
      errorDialog: false, // 错误信息弹窗
      errorMsg: "" // 错误信息内容
    };
  },
  methods: {
    add() {
      const obj = {};
      Object.assign(obj, this.addItem);
      this.list.push(obj);
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
        this.addItem = { name: "", days: "", xxx: "", sss: "" };
      } else {
        alert("清空失败，您的输入有误");
      }
    },
    downloadFile() {
      let str = "姓名\t上班天数\t系数\t请假天数\n";
      this.list.forEach(item => {
        const arr = [];
        for (const key in item) {
          const i = item[key];
          arr.push(i);
        }
        str += arr.join("\t") + "\n";
      });
      const filename = prompt("请输入导出文件名称");
      if (filename) {
        if (confirm("是否生成excel文件（测试版）")) {
          this.downloadData(filename + ".xls", str);
        } else {
          this.downloadData(filename, str);
        }
      }
    }
  },
  created() {
    const member = window.localStorage.getItem("member");
    if (member) {
      this.list = JSON.parse(member);
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
    }
  }
};
</script>
