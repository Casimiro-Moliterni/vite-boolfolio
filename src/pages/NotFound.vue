<script>
export default {
    name: 'NotFound',
    data() {
        return {
            linksRoute: [
                {
                    label: 'HomePage',
                    route: 'home'
                },
                {
                    label: 'projects',
                    route: 'projects'
                }
            ]
        }
    }
}
</script>

<template>
    <div class="container-fluid d-flex align-items-center justify-content-center">
        <div class="ms_overlay"></div>
        <div class="d-flex flex-column align-items-center my_body_text">
            <div class="error">error</div>
            <h1>404</h1>
            <h2>PAGE NOT FOUND</h2>
            <div class="mb-3 "><i class="fa-regular fa-face-frown"></i></div>
            <div>
                <ul class="d-flex gap-2 justify-content-center m-0 p-0">
                    <li v-for="singleLink in linksRoute">
                        <router-link class="btn fw-bold" :to="{ name: singleLink.route }" :class="singleLink.route">{{
                            singleLink.label }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container-fluid {
    height: calc(100vh - 56px);
    background-image: linear-gradient(rgb(32, 28, 28), rgb(102, 102, 98));
    position: relative;
    z-index: 1;

    .ms_overlay {
        position: absolute;
        opacity: 0.7;
        height: 100%;
        width: 100%;
        z-index: 2;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        background-image: url('https://static.vecteezy.com/system/resources/previews/017/398/835/original/glitch-error-effect-digital-background-free-png.png');
    }

    .my_body_text {
  position: relative;
  z-index: 3;
  color: white;
        .error,
        h1 {
            font-size: 90px;
            font-weight: 700;
        }

        h2 {
            font-size: 70px;
            font-weight: 700;
        }

        ul {
            list-style: none;
        }

        .projects {
            background-color: rgb(234, 207, 28);
            color: black;
            transition: 0.6s;
        }

        .home {
            background-color: aqua;
            color: rgb(206, 122, 18);
            transition: 0.6s;
        }

        .btn:hover {
            background-color: aliceblue;
            color: blue;
            border-radius: 0;
            transition: 0.6s;
        }

        .fa-face-frown {
            font-size: 60px;
            color: red;
        }
    }
}
</style>