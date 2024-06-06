import { defineComponent, reactive, ref } from "vue";
import { ElButton, ElMessage } from "element-plus";

const JsxDemo = defineComponent({
  setup() {
    const count = ref(0);

    const person = reactive({
      name: "cs",
      age: 18,
    });

    const open = () => {
      ElMessage({ message: "This is a message.", type: "success" });
    };

    const inc = () => {
      count.value++;
      open();
    };

    return () => (
      <div class="text-blue" onClick={inc}>
        Test{count.value}
        {Object.keys(person)?.map((i) => (
          <div key={i}>{person[i]}</div>
        ))}
        <ElButton type="success">成功</ElButton>
      </div>
    );
  },
});
export default JsxDemo;
