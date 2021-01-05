<template>
  <div>
    <!-- []都是可以变的 -->
    <a v-bind:[attributeName]="url"> ... </a>
    <a v-on:[eventName]="doSomething"></a>
    <a :[key]="url"> ... </a>
    <span>{{ message.split("").reverse().join("") }}</span>
    <!-- 每当触发重新渲染时，调用方法将总会再次执行函数 -->
    <span>{{ reversedMessageComp }}</span>
    <p>Reversed message: "{{ reversedMessage() }}"</p>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "编程好玩",
      attributeName: "href",
      key: "href",
      noChange: {
        a: 1,
      },
      firstName: "Foo",
      lastName: "Bar",
    };
  },
  computed: {
    // 计算属性的 getter
    reversedMessageComp: function () {
      // `this` 指向 vm 实例
      return this.message.split("").reverse().join("");
    },
    fullName: {
      // getter
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
  mounted() {
    Object.freeze(this.noChange);
    // 会调用fullName的setter
    this.fullName = "aa";
  },
  methods: {
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
};
</script>

<style>
</style>