<script>
export default {
    name: 'SingleProject',
    props:{
        projectInfo:Object
    }
}
</script>

<template>
            <div class="col" >
                <div class="card" >
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                    <div class="card-body text-center">
                        <h5 class="card-title">
                            <strong>Name:</strong> {{  projectInfo.name }}
                        </h5>
                        <h5 class="card-title">
                            <strong>Client_Name:</strong>{{  projectInfo.client_name }}
                        </h5>
                        <div v-if=" projectInfo.type " class="text-start">
                            <strong>Type:</strong>{{ projectInfo.type.name }}
                        </div>
                        <div v-if="projectInfo.technologies.length > 0" class="text-start">
                            <strong>Technologies:</strong>
                            <span v-for="technology in projectInfo.technologies">
                                {{  technology.name}} &nbsp;
                            </span>
                        </div>
                        <p v-show="projectInfo.summary" class="card-text text-start">
                            <strong>Content:</strong>  {{  projectInfo.summary }}
                        </p>
                    </div>
                </div>
            </div>
</template>

<style lang="scss" scoped>
.card{
    min-height: 400px;
}
</style>