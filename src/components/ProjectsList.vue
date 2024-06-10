<script>
import axios from "axios" ;
import SingleProject from "./SingleProject.vue";
export default {
    name: 'ProjectList',
    components:{
        SingleProject
    },
    data() {
        return {
            projects: []
        };
    },
    methods: {
        GetProject() {
            axios.get('http://127.0.0.1:8000/api/project')

            .then((response)=>{
                this.projects= response.data.results;
            });
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
           <SingleProject v-for="project in projects" :key="project.id" :projectInfo="project" ></SingleProject>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>