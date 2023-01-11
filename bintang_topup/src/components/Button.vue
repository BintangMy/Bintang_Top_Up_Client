<script>
export default {
  props:["buttonName"],
  data() {
    return {
     
    };
  }
};
</script>
<template>
   <button type="submit" class="p-2 rounded-xl items-center border w-full bg-green-500 text-white py-2 hover:scale-105 duration-300">
            {{ buttonName }}
    </button>
</template>