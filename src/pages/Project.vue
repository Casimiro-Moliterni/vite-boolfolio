<script>
import axios from 'axios';
import Loader from "../components/Loader.vue";
import { store} from "../store.js";

export default {
    name: 'Project',
    components: {
        Loader,
        store
    },
    data() {
        return {
            project: null,
            loader: false
        }
    },
    methods: {
        GetSingleProject() {
            this.loader = true;
            axios.get(`${store.apiUrl}/api/project/${this.$route.params.slug}`)
                .then((response) => {
                    if (response.data.success) {
                        this.project = response.data.project;
                    } else {
                        this.$router.push({ name: 'not-found' });
                    }
                    this.loader = false;
                });
        }
    },
    mounted() {
        this.GetSingleProject()
    }
}
</script>

<template>
    <div class="container">
        <div v-if="!loader">
            <div v-if="project">
                <h1>{{ project.name }}</h1>
                <div v-if="project.thumb">
                    <img :src="`http://127.0.0.1:8000/storage/${project.thumb}`" alt="project.thumb">
                </div>
                <div v-if="project.client_name">
                    <strong>client_name:</strong>{{ project.client_name }}
                </div>
                <div v-if="project.type">
                    <strong>Type:</strong> {{ project.type.name }}
                </div>
                <div v-if="project.technologies">
                    <strong>Technologies:</strong>
                    <span v-for="tech in project.technologies">
                        {{ tech.name }}&nbsp;
                    </span>
                </div>
                <div v-if="project.summary">
                    <strong>Content:</strong>{{ project.summary }}
                </div>
            </div>
        </div>
        <div v-else class="mt-4">
            <Loader></Loader>
        </div>
    </div>
</template>

<style scoped lang="scss">
img {
    height: 300px;
}
</style>