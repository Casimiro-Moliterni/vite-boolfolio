<script>
export default {
    name: 'ProjectList',
    data() {
        return {
            project: []
        };
    },
    methods: {
        GetProject() {
            console.log('test mounted');
        }
    },mounted(){
        this.GetProject()
    }
}
</script>

<template>
    <div class="container">
        <h1 class="text-center">Lista Progetti</h1>
        <div class="row row-cols-3 gy-3">
            <div class="col">
                <div class="card">
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>