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
    <!-- 在遍历对象时，会按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下都一致。 -->
    <div v-for="(value, name, index) in object" :key="index">
      {{ name }}: {{ value }}
    </div>
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
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      // 数组变更方法，它们会触发视图进行更新
      // push()
      // pop()
      // shift()
      // unshift()
      // splice()
      // sort()
      // reverse()
      arr: [],
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