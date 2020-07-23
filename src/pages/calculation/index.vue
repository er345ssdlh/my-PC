<!--
 * @Author: lzy
 * @Date: 2020-07-14 17:21:15
 * @FilePath: \my-init-PC\vue-cli-template-master\src\pages\calculation\index.vue
 * @explain: 基于element-ui封装的树形组件.
  使用/deep/ 改造element组件内部样式，使更加适合各种风格项目
  增删改三个按钮 移步到树形列表顶部，增加判断按钮禁用时机
  element组件的default-expanded-keys属性值动态添加，给谁增加子元素，谁就展开，更符合逻辑，代码更加优化
  点击项高亮显示，左侧图案可以自定义
  增加删除修改弹窗公用一个
--> 
<template>
  <div class="custom-tree-container">
    <div class="custom-tree-container--button">
      <!-- 不存在选择项 但是数据为空 也可以添加数据 -->
      <el-button :disabled='!(isNode && isData) && data.length > 0'
        type="primary"
        size="mini"
        icon="el-icon-plus"
        circle
        @click.stop="() => append()">
      </el-button>
      <el-button :disabled='!(isNode && isData)'
        type="danger"
        size="mini"
        icon="el-icon-delete"
        circle
        @click.stop="() => remove()">
      </el-button>
      <el-button :disabled='!(isNode && isData)'
        type="primary"
        icon="el-icon-edit"
        size="mini"
        circle
        @click.stop="() => modify()">
      </el-button>
    </div>
    <!-- expand-on-click-node 点击前头箭头才会释放选项 -->
    <!-- node-key 唯一值 -->
    <div class="expandBlock">
      <el-tree
        :default-expanded-keys='defaultExpanded'
        :data="data"
        node-key="id"
        :expand-on-click-node="false">
        <span :class ="isData === data ? 'SelecColoe' : ''" class="custom-tree-node" @click="handleTree(node,data)" slot-scope="{ node, data }">
          <span class="TreeName">{{ node.label }}</span>
        </span>
      </el-tree>
    </div>
    <el-dialog
      :title='title'
      :visible.sync="dialogVisible"
      width="30%">
      <el-input v-show="isSelect !=='dele'" placeholder="请输入新的名字" v-model="modifyText"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleTextNo">取 消</el-button>
        <el-button type="primary" @click="handleTextYes">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  let id = 1000;

  export default {
    data() {
      const data = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      return {
        data: JSON.parse(JSON.stringify(data)),
        isData: null,
        isNode: null,
        dialogVisible: false,
        modifyText: '',
        defaultExpanded:[],// 展开的选项
        title: '提示', // 修改窗标题
        isSelect: '',// 弹窗复用 'add' 表示添加弹窗 'modify'表示修改弹窗  'dele' 表示删除
      }
    },
    methods: {
      handleTree (node, data) {
        //记录点击项
        this.isData= data
        this.isNode = node
        console.log(this.isData)
      },
      append() {
        this.isSelect = 'add'
        if (this.data.length > 0) { //存在数据
          this.title = `将:<${this.isData.label}>添加子元素？`
        } else { //不存在数据
          this.title = `添加全新数据`
        }
        this.dialogVisible = true
      },
      remove() {
        this.isSelect = 'dele'
        this.title = `确认删除:<${this.isData.label}>元素？`
        this.dialogVisible = true
      },
      modify() {
        this.isSelect = 'modify'
        this.title = `将标题:<${this.isData.label}>修改为：`
        this.dialogVisible = true
      },
      handleTextYes () {
        // 如果字段为空并且不是删除模态框
        if(this.modifyText == '' && this.isSelect !=='dele') return this.$message({type: 'info',message: '字段为空!'});
        if(this.isSelect ==='modify'){ //修改模态框
          this.isData.label = this.modifyText
        } else if(this.isSelect ==='add') { // 添加模态框
          const newChild = { id: id++, label: this.modifyText, children: [] };
          //区分空数据 和有数据
          if (this.data.length > 0) { // 有数据
            if (!this.isData.children) {
              this.$set(this.isData, 'children', []);
            }
            this.isData.children.push(newChild);
            // 添加完成后 节点展开
            this.defaultExpanded.push(this.isData.id)
          } else { // 无数据直接push到数据里边并且展开
            this.data.push(newChild)
            this.defaultExpanded.push(newChild.id)
          }
        } else if (this.isSelect ==='dele'){// 删除模态框
            const parent = this.isNode.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === this.isData.id);
            children.splice(index, 1);
            //删除成功，点击项也清空
            this.isData = null,
            this.isNode = null
            console.log('this.data =========>', this.data)
        }
        //清除弹窗和内容
        this.dialogVisible = false
        this.modifyText = ''
      },
      handleTextNo () {
        //清除弹窗和内容
        this.dialogVisible = false
        this.modifyText = ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    border-left: 4px solid transparent;
  }
  .custom-tree-container--button{
    height: 40px;
    padding-left: 20px;
  }
  .TreeName{
    padding-left: 30px;
    background: url('../../assets/images/timg.jpg') no-repeat center left;
    background-size: 20px;
  }
  .SelecColoe {
    background-color: #d9e9fd;
    border-left: 4px solid #4090f7;
  }
  .custom-tree-container{
    width: 300px;
    height: 100%;
  }
  /deep/.el-tree{
     background-color: transparent;
  }
</style>