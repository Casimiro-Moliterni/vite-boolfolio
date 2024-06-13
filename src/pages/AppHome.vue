<script>
export default {
    name: 'AppHome'
}
</script>

<template>
    <div class="container-my">
        <div class="row row-cols-2 h-100">
            <div class="col left text-white ">
                <div class="p-1">
                    <h1>Benvenuto sulla nostra piattaforma</h1>
                    <div class="col right">
                    </div>
                </div>
            </div>
            <div class="col right text-white">
                <h2 class="text-center mb-5">Visita il nostro sito</h2>
                <p class="w-50 m-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, unde eum a ipsum enim, et amet, exercitationem quas temporibus expedita laudantium voluptatem impedit facilis deleniti sequi perspiciatis fugiat ipsa minima.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container-my {
    height: calc(100vh - 56px);
    width: 100%;
    overflow: hidden;

    .col.right {
        background-image: url('https://wallpapers.com/images/hd/vintage-typewriter-blogging-backdrop-ndtp0o2n8wkxxz0k.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .col.left {
        background-image: linear-gradient(rgb(75, 144, 213), rgb(30, 75, 179));
    }
}
</style>