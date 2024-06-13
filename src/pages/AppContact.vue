<script>
import Form from "../components/Form.vue";
export default {
    name: 'AppContact',
    components: {
        Form
    }
}
</script>

<template>
    <div class="container-fluid">
        <h1>Compila il Form</h1>
        <Form></Form>
    </div>
</template>
<style scoped lang="scss">
.container-fluid{
    width: 60%;
}
</style>