<template>
  <div class="reg">
    <span class="firn">
      <el-button type="text" @click="dialogFormVisible1 = true">登录</el-button>
      <el-button type="text" @click="dialogFormVisible = true">注册</el-button>
    </span>

    <!-- 弹出的表单 -->
    <el-dialog title="用户登录" :visible.sync="dialogFormVisible" center>
      <!-- 分割线 -->
      <el-divider></el-divider>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="aname">
          <el-input v-model.trim="ruleForm.aname" autocomplete="new-password" placeholder="请输入邮箱账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model.trim="ruleForm.pass"
            placeholder="请输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model.trim="ruleForm.checkPass"
            placeholder="请重新输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">取消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </div>
    </el-dialog>
    <el-dialog title="用户登录" :visible.sync="dialogFormVisible1" center>
      <!-- 分割线 -->
      <el-divider></el-divider>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="aname">
          <el-input v-model.trim="ruleForm.aname" autocomplete="new-password" placeholder="请输入邮箱账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model.trim="ruleForm.pass"
            placeholder="请输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">取消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogFormVisible1: false,
      ruleForm: {
        aname: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        aname: [
          // { validator: validatePass, trigger: "blur" },
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            max: 20,
            message: "邮箱长度不能超过20个字格",
            trigger: "blur"
          },
          {
            pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            message: "请检查邮箱格式是否正确",
            trigger: "blur"
          }
        ],
        pass: [
          {
            required: true,
            message: "请输入长度位6-18位不包含特殊字符的密码",
            trigger: "blur"
          },
          {
            pattern: /^[a-zA-Z0-9]\w{5,17}$/,
            message: "密码只能包含6-18位字母数字和下划线",
            trigger: "blur"
          }
        ],
        checkPass: [
          { validator: validatePass, trigger: "blur" },
          { required: true, message: "请重新输入密码", trigger: "blur" }
        ]
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          dialogFormVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.dialogFormVisible = false;
      this.dialogFormVisible1 = false;
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
div /deep/ .el-dialog {
  border-radius: 30px;
  height: 440px;
  width: 550px;
  z-index: 9999;
  .el-dialog__body {
    margin-top: 0;
    padding: 25px 25px 10px;
    padding-top: 0;
  }
  .el-divider {
    margin-bottom: 45px;
  }
  .el-dialog__header {
    padding: 30px 20px 5px;
    .el-dialog__title {
      font-size: 25px;
    }
  }
}
.el-input {
  width: 80%;
}
.el-page-header {
  float: left;
}

.el-button {
  padding: 10px 20px;
  font-size: 16px;
}
.reg {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 8888;
}
</style>