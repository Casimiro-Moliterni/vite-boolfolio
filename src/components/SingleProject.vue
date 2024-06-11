<script>
export default {
    name: 'SingleProject',
    props: {
        projectInfo: Object
    },
    methods: {
        minText(text) {
            if (text.length > 100) {
                return text.substr(0, 100) + '...';
            }
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body text-start d-flex flex-column">
                <div class="flex-grow-1">
                    <h5 class="card-title">
                        <strong>Name:</strong> {{ projectInfo.name }}
                    </h5>
                    <div class="card-title ">
                        <strong>Client_Name:</strong>{{ projectInfo.client_name }}
                    </div>
                    <div v-if="projectInfo.type" class="text-start">
                        <strong>Type:</strong>{{ projectInfo.type.name }}
                    </div>
                    <div v-if="projectInfo.technologies.length > 0" class="text-start">
                        <strong>Technologies:</strong>
                        <span v-for="technology in projectInfo.technologies">
                            {{ technology.name }} &nbsp;
                        </span>
                    </div>
                    <p v-show="projectInfo.summary" class="card-text text-start">
                        <strong>Content:</strong> {{ minText(projectInfo.summary) }}
                    </p>
                </div>
                <div>
                    <router-link class="btn btn-success" :to="{ name:'single-project',params:{slug:projectInfo.slug}}">View</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    min-height: 300px;
}
</style>