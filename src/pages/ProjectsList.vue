<script>
import axios from "axios";
import SingleProject from "../components/SingleProject.vue";
export default {
    name: 'ProjectsList',
    components: {
        SingleProject
    },
    data() {
        return { 
            currentPage:1,
            prevPageUrl:null,
            nextPageUrl:null,
            projects: []
        };
    },
    methods: {
        GetProject(pageNumber) {
            axios.get('http://127.0.0.1:8000/api/project',{
                params:{
                    page:pageNumber
                }
            })

                .then((response) => {
                    this.projects = response.data.results.data;
                    this.currentPage=response.data.results.current_page;
                    this.prevPageUrl= response.data.results.prev_page_url;
                    this.nextPageUrl= response.data.results.next_page_url;
                });
        },
        // NextBtn(){
        // },
        // PreviousBtn(){
        // },
    }, mounted() {
        this.GetProject(this.currentPage);
    }
}
</script>

<template>
    <div class="container ">
        <h1 class="text-center">Lista Progetti</h1>
        <div class="row row-cols-3 gy-3 mb-3">
            <SingleProject v-for="project in projects" :key="project.id" :projectInfo="project"></SingleProject>
        </div>
        <nav aria-label="Page navigation example" class="d-flex justify-content-center align-items-end">
            <ul class="pagination">
                <li v-if="prevPageUrl" class="page-item"><a class="page-link"  @click="GetProject( this.currentPage - 1)">Previous</a></li>
                <li v-if="nextPageUrl"  class="page-item"><a class="page-link" @click="GetProject(this.currentPage + 1)">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.container{
    height: calc(100vh - 54px);
}
</style>