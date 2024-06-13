<script>
import axios from "axios";
import SingleProject from "../components/SingleProject.vue";
import Loader from "../components/Loader.vue";
import { store} from "../store.js";

export default {
    name: 'ProjectsList',
    components: {
        SingleProject,
        Loader,
        store
    },
    data() {
        return {
            currentPage: 1,
            prevPageUrl: null,
            nextPageUrl: null,
            projects: [],
            loader:false
        };
    },
    methods: {
        GetProject(pageNumber) {
            this.loader=true;
            axios.get(`${store.apiUrl}/api/project`, {
                params: {
                    page: pageNumber
                }
            })

                .then((response) => {
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.prevPageUrl = response.data.results.prev_page_url;
                    this.nextPageUrl = response.data.results.next_page_url;
                    this.loader=false;
                });
        },
    }, mounted() {
        this.GetProject(this.currentPage);
    }
}
</script>

<template>
    <div class="container ">
        <div class="d-flex flex-column h-100">
            <h1 class="text-center mt-3 mb-5">Lista Progetti</h1>
            <div v-if="!loader" class="row row-cols-3 gy-3 mb-3 flex-grow-1">
                <div class="col" v-for="project in projects" :key="project.id">
                    <SingleProject :projectInfo="project"></SingleProject>
                </div>
            </div>
            <div v-else>
                <Loader></Loader>
            </div>
            <div>
                <nav aria-label="Page navigation example" class="d-flex justify-content-center align-items-end">
                    <ul class="pagination">
                        <li v-if="prevPageUrl" class="page-item"><a class="page-link"
                                @click="GetProject(this.currentPage - 1)">Previous</a></li>
                        <li v-if="nextPageUrl" class="page-item"><a class="page-link"
                                @click="GetProject(this.currentPage + 1)">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: calc(100vh - 56px);
}
</style>